import Link from 'next/link';
import Image from 'next/image';
import { Flex , Box , Text , Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

function Banner(props){
  return (
     <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
       <Image src={props.imageUrl} width={500} height={300} alt="bannerimg"/>
       <Box p="5">
         <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>
         <Text fontSize="3xl" fontWeight="bold">{props.title1} <br/> {props.title2}</Text>
         <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{props.description1} <br/> {props.description2}</Text>
         <Button fontSize="x1">
          <Link href={props.linkName}>{props.buttonText}</Link>
         </Button>
       </Box>
     </Flex>
  )
}


function Home({propertiesForSale,propertiesForRent}) {
  return (
    <Box >
      
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, villas, Homes"
        description2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

      />

      <Flex flexWrap={"wrap"}>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner 
        purpose="BUY A HOME"
        title1="Search, Buy and Own Your"
        title2="Dream Home"
        description1="Explore Apartments, villas, Homes"
        description2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"

      />
      <Flex flexWrap={"wrap"}>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)} 
      </Flex>
      
    </Box>
  )
}

export default Home;


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits, 
    }
  }
}
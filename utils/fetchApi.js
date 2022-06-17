import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '7beb5a4fffmsh0cbc9aff852c0edp109a11jsndd71d91c0884'
          }
    });
   
    return data;
}
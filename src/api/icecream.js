import axios from "axios";
import { API_URL } from "../constants";

export const getIcecreamAxios = () => {
  const enpoint = "/icecream";
  return axios
    .get(`${API_URL}${enpoint}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const getIcecreamFetch = () => {
  const enpoint = "/icecream";
  return fetch(`${API_URL}${enpoint}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};


export const createIcecream =  async (params)=>{
  const endpoint="/icecream/create"
  const icecream = await axios.post(`${API_URL}${endpoint}`, params)
  console.log("respuesta del post", icecream)

}
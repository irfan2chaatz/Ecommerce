import axios from "axios";

const ECOMM_INSTANCE = axios.create({
    baseURL: 'https://dummyjson.com'
  });


export default ECOMM_INSTANCE;
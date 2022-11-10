import axios from "axios";


const MyAxios = axios.create({
  baseURL: 'http://localhost:80',
  timeout: 1000,
})

export default MyAxios;
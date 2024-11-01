import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.1.90.229:3000/api",
});
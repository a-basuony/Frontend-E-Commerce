import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://backend-e-commerce-c17e.vercel.app/",
});

export default baseUrl;

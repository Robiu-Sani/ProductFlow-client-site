import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://product-flow-server-site-eta.vercel.app/",
});

export default function useAxiosSource() {
  return { axiosSource: axiosInstance };
}

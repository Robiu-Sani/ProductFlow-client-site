import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useProducts() {
  const { axiosSource } = useAxiosSource();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSource.get("/products");
      return res.data;
    },
  });
  return { products, refetch };
}

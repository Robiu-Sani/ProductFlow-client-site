import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function usePasitionProducts({ getCurrentPage }) {
  const { axiosSource } = useAxiosSource();
  const itemOfPAges = 10;

  const { data: PasitionProducts = [], refetch } = useQuery({
    queryKey: ["pasitionProducts", getCurrentPage],
    queryFn: async () => {
      const res = await axiosSource.get(
        `/pasitionProducts?page=${getCurrentPage}&size=${itemOfPAges}`
      );
      return res.data;
    },
    keepPreviousData: true, // Optional: To keep the previous data while fetching new data
  });

  return { PasitionProducts, refetch };
}

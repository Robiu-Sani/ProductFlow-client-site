import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";
import { useContext } from "react";
import { AuthContext } from "../defaultComponent/Contaxt";

export default function useAllAddCards() {
  const { loggedUser } = useContext(AuthContext);
  const { axiosSource } = useAxiosSource();
  const {
    data: AddCard = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["AddCard"],
    queryFn: async () => {
      const res = await axiosSource.get(`/AddCard/${loggedUser.email}`);
      return res.data;
    },
  });
  return { AddCard, refetch, isLoading };
}

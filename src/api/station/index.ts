import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../enum";
import { getAllStation } from "./station.api";

export const useGetAllStation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_STATION],
    queryFn: getAllStation,
    refetchOnWindowFocus: false,
  });
};

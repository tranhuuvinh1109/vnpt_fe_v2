import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QUERY_KEY } from "../../enum";
import { StationType } from "../../type";
import { getAllStation } from "./station.api";

export const useGetAllStation = () => {
  return useQuery<StationType[], AxiosError>({
    queryKey: [QUERY_KEY.GET_ALL_STATION],
    queryFn: getAllStation,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

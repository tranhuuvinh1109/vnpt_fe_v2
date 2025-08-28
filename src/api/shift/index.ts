import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../enum";
import { getAllShift, getAllShiftOrderByDate } from "./shift.api";

export const useGetAllShift = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_SHIFT],
    queryFn: getAllShift,
  });
};

export const useGetAllShiftOrderByDate = ({ from, to }: { from?: string; to?: string }) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_SHIFT_ORDER_BY_DATE, from, to],
    queryFn: () => getAllShiftOrderByDate({ from, to }),
  });
};

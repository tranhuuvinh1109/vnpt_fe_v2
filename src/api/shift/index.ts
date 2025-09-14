import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { MUTATION_KEY, QUERY_KEY } from "../../enum";
import { ShiftDetailOrderByDateType, ShiftDetailType, ShiftType } from "../../type";
import { createShiftForDay, getAllShift, getAllShiftOrderByDate, updateShiftForDay } from "./shift.api";
import { CreateShiftForDayRequestType, UpdateShiftForDayRequestType } from "./shift.type";

export const useGetAllShift = () => {
  return useQuery<ShiftDetailType[], AxiosError>({
    queryKey: [QUERY_KEY.GET_ALL_SHIFT],
    queryFn: getAllShift,
  });
};

export const useGetAllShiftOrderByDate = ({ from, to }: { from?: string; to?: string }) => {
  return useQuery<ShiftDetailOrderByDateType[], AxiosError>({
    queryKey: [QUERY_KEY.GET_ALL_SHIFT_ORDER_BY_DATE, from, to],
    queryFn: () => getAllShiftOrderByDate({ from, to }),
  });
};

export const useCreateShiftForDay = () => {
  return useMutation<ShiftType[], AxiosError, CreateShiftForDayRequestType>({
    mutationFn: createShiftForDay,
    mutationKey: [MUTATION_KEY.CREATE_SHIFT_FOLLOW_DAY],
  });
};

export const useUpdateShiftForDay = () => {
  return useMutation<ShiftType, AxiosError, UpdateShiftForDayRequestType>({
    mutationFn: updateShiftForDay,
    mutationKey: [MUTATION_KEY.UPDATE_SHIFT_FOLLOW_DAY],
  });
};

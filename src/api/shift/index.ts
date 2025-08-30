import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API } from "../../constant";
import { MUTATION_KEY, QUERY_KEY } from "../../enum";
import { ShiftType } from "../../type";
import { createShiftForDay, getAllShift, getAllShiftOrderByDate } from "./shift.api";
import { CreateShiftForDayRequestType } from "./shift.type";

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

export const useCreateShiftForDay = () => {
  return useMutation<ShiftType[], AxiosError, CreateShiftForDayRequestType>({
    mutationFn: createShiftForDay,
    mutationKey: [MUTATION_KEY.CREATE_SHIFT_FOLLOW_DAY],
  });
};

export const useCreateShiftForDayTemp = () => {
  const createShiftForDay = async (params: CreateShiftForDayRequestType) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${API.CREATE_SHIFT_FOLLOW_DAY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add authorization if needed
        // 'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  };
  return useMutation<ShiftType[], AxiosError, CreateShiftForDayRequestType>({
    mutationFn: createShiftForDay,
    mutationKey: [MUTATION_KEY.CREATE_SHIFT_FOLLOW_DAY],
  });
};

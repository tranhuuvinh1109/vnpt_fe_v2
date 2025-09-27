import { API } from "../../constant";
import axiosClient from "../axiosInstant";
import {
  CreateShiftForDayRequestType,
  CreateShiftForDayResponseType,
  GetAllShiftOrderByDateResponseType,
  GetAllShiftResponseType,
  UpdateShiftForDayRequestType,
  UpdateShiftForDayResponseType,
} from "./shift.type";

export const getAllShift = async () => {
  const res: GetAllShiftResponseType = await axiosClient.get(API.GET_ALL_SHIFT);

  return res.data;
};

export const getAllShiftOrderByDate = async ({ from, to }: { from?: string; to?: string }) => {
  const res: GetAllShiftOrderByDateResponseType = await axiosClient.get(API.GET_ALL_SHIFT_ORDER_BY_DATE, {
    params: { from, to },
  });

  return res.data;
};

export const createShiftForDay = async (params: CreateShiftForDayRequestType) => {
  const res: CreateShiftForDayResponseType = await axiosClient.post(API.CREATE_SHIFT_FOLLOW_DAY, params);
  return res.data;
};

export const updateShiftForDay = async (params: UpdateShiftForDayRequestType) => {
  const res: UpdateShiftForDayResponseType = await axiosClient.patch(API.UPDATE_SHIFT_FOLLOW_DAY(params._id), params);
  return res.data;
};

export const updateShiftForDayFormData = async (formData: FormData) => {
  const res: UpdateShiftForDayResponseType = await axiosClient.patch(
    API.UPDATE_SHIFT_FOLLOW_DAY(formData.get("_id") as string),
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

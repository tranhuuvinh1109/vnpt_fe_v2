import { API } from "../../constant";
import axiosClient from "../axiosInstant";
import { GetAllShiftOrderByDateResponseType, GetAllShiftResponseType } from "./shift.type";

export const getAllShift = async () => {
  const res: GetAllShiftResponseType = await axiosClient.get(API.GET_ALL_SHIFT);

  return res.data;
};

export const getAllShiftOrderByDate = async () => {
  const res: GetAllShiftOrderByDateResponseType = await axiosClient.get(API.GET_ALL_SHIFT_ORDER_BY_DATE);

  return res.data;
};

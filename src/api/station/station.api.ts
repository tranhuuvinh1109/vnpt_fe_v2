import { API } from "../../constant";
import axiosClient from "../axiosInstant";
import { GetAllStationResponseType } from "./station.type";

export const getAllStation = async () => {
  const res: GetAllStationResponseType = await axiosClient.get(API.GET_ALL_STATION);

  return res.data;
};

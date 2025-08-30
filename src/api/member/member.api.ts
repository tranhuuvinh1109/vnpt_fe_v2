import { API } from "../../constant";
import axiosClient from "../axiosInstant";
import { GetAllMemberResponseType } from "./member.type";

export const getAllMember = async () => {
  const res: GetAllMemberResponseType = await axiosClient.get(API.GET_ALL_MEMBER);

  return res.data;
};

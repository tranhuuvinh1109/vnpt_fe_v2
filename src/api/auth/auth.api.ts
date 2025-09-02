import { API } from "../../constant";
import axiosClient from "../axiosInstant";
import { GetUserProfileResponseType, SignInPayloadType, SignInResponseType } from "./auth.type";

export const signIn = async (payload: SignInPayloadType) => {
  const res: SignInResponseType = await axiosClient.post(API.SIGN_IN, payload);

  return res.data.user;
};

export const getProfile = async () => {
  const res: GetUserProfileResponseType = await axiosClient.get(API.ME);

  return res.data.user;
};

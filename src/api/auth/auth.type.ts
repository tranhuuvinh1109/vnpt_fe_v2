import { UserType } from "../../type";
import { ResponseType } from "../common.type";

export type SignInPayloadType = {
  email: string;
  password: string;
};

export type SignInDataResponseType = {
  user: UserType;
};

export type SignInResponseType = ResponseType<SignInDataResponseType>;

export type GetUserProfileDataResponseType = {
  user: UserType;
};

export type GetUserProfileResponseType = ResponseType<GetUserProfileDataResponseType>;

import { InfoType, ShiftDetailOrderByDateType, ShiftDetailType, ShiftType, UserType } from "../../type";
import { ResponseType } from "../common.type";

export type GetAllShiftResponseType = ResponseType<ShiftDetailType[]>;
export type GetAllShiftOrderByDateResponseType = ResponseType<ShiftDetailOrderByDateType[]>;

export type CreateShiftForDayRequestType = {
  start_time: string;
  end_time: string;
  create_user: string;
  date: string;
};

export type CreateShiftForDayResponseType = ResponseType<ShiftType[]>;

export type InfoUpdateRequestType = {
  _id: string;
  note?: string;
  image?: string | File;
};

export type DataShiftForDayRequestType = {
  _id: string;
  station: { value: string; label: string };
  assigned_user: UserType[];
  assign: { value: string; label: string }[];
  status?: string;
  approved?: boolean;
  start_time: string;
  end_time: string;
  infor_pre: InfoType;
  infor_during: InfoType;
  infor_exist: InfoType;
};

export type UpdateShiftForDayRequestType = {
  _id: string;
  station: string;
  assign: string[];
  start_time: string;
  end_time: string;
  status?: string;
  approved?: boolean;
  infor_pre: InfoUpdateRequestType;
  infor_during: InfoUpdateRequestType;
  infor_exist: InfoUpdateRequestType;
};

export type UpdateShiftForDayResponseType = ResponseType<ShiftType>;

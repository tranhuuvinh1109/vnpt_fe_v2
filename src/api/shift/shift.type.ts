import { ShiftDetailOrderByDateType, ShiftDetailType, ShiftType } from "../../type";
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

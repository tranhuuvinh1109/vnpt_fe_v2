import { EShiftStatus } from "../enum";
import { InfoType } from "./infoType";
import { StationType } from "./station";
import { UserType } from "./user";

export type ShiftType = {
  id: number;
  station: number;
  assign_user: number;
  pre_shift: number | null;
  next_shift: number | null;
  start_time: string;
  end_time: string;
  shift_number: number;
  infor_exist: number;
  infor_during: number;
  infor_pre: number;
  status: EShiftStatus;
  approved: boolean;
  note: string;
  create_user: number;
};

export type ShiftDetailType = {
  _id: string;
  assign_user: UserType[] | null;
  pre_shift: string | null;
  next_shift: string | null;
  date: string;
  start_time: string;
  end_time: string;
  shift_number: number;
  infor_exist: InfoType;
  infor_during: InfoType;
  infor_pre: InfoType;
  status: EShiftStatus;
  approved: boolean;
  note: string;
  create_user: UserType;
  station: StationType;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type ShiftDetailOrderByDateType = {
  date: string;
  shifts: ShiftDetailType[];
};

import { ShiftDetailOrderByDateType, ShiftDetailType } from "../../type";
import { ResponseType } from "../common.type";

export type GetAllShiftResponseType = ResponseType<ShiftDetailType[]>;
export type GetAllShiftOrderByDateResponseType = ResponseType<ShiftDetailOrderByDateType[]>;

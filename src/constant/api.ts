export const API = {
  GET_ALL_STATION: "/station",
  GET_ALL_SHIFT: "/shift",
  GET_ALL_SHIFT_ORDER_BY_DATE: "/shift/order",
  CREATE_SHIFT_FOLLOW_DAY: "/shift/create-follow-day",
  UPDATE_SHIFT_FOLLOW_DAY: (id: string) => `/shift/update-follow-day/${id}`,
  GET_ALL_MEMBER: "/user",
  SIGN_IN: "/auth/signin",
  ME: "/user/me",
};

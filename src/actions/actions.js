import { GET_MONTHS } from "./action-types";

export const getMonths = months => ({
  type: GET_MONTHS,
  payload: months
});

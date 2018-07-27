import { TEST_ACTION } from "./action-types";

export const testAction = test => ({
  type: TEST_ACTION,
  payload: test
});

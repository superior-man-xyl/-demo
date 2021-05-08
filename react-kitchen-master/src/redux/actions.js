import { TRANSMIT } from "./action-types";
//为了复用所以单独写一个文件出来
export const transmit = (data) => {
  return { type: TRANSMIT, data: data };
};

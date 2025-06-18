import { myPrivateAxios } from "./helper";

export const addUserTransaction = (data, userId) => {
  return myPrivateAxios
    .post(`/api/transactions/user/${userId}`, data)
    .then((response) => {
      return response.data;
    });
};

export const loadUserTransaction = (userId) => {
  return myPrivateAxios
    .get(`/api/transactions/user/${userId}`)
    .then((response) => {
      return response.data;
    });
};

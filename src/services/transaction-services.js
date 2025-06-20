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

export const deleteTransaction = (entryId) => {
  return myPrivateAxios
    .delete(`/api/transactions/${entryId}`)
    .then((response) => {
      return response.data;
    });
};

export const updateTransaction = (entryId, data) => {
  return myPrivateAxios
    .put(`/api/transactions/${entryId}`, data)
    .then((response) => {
      return response.data;
    });
};

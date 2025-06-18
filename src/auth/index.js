// Is User Logged In
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null || data == undefined) return false;
  else return true;
};

//do Login => set the data to local storage
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//do Logout => remove data from local storage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};
// get current user
export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    // console.log(localStorage.getItem("data"));
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return undefined;
  }
};

export const getToken = () => {
  if (isLoggedIn()) {
    // console.log(localStorage.getItem("data"));
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};

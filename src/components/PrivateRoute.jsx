import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../auth";

const PrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/signup"} />;
};

export default PrivateRoute;

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Base from "./Base";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../pages/UserDashboard";
import About from "../pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      {/* <Base> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashBoard" element={<UserDashboard />} />
        </Route>
      </Routes>
      {/* </Base> */}
    </BrowserRouter>
  );
};

export default App;

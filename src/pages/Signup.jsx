import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginUser, signUp } from "../services/user-service.js";
import InputField from "../components/loginFields/InputField.jsx";
import { doLogin } from "../auth/index.js";
import Base from "../components/Base.jsx";

const Signup = () => {
  const [loginPageVisible, setloginPageVisible] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [error, setError] = useState({ errors: {}, isError: false });
  const navigate = useNavigate();

  const handleChange = (e, fieldname) => {
    setData({ ...data, [fieldname]: e.target.value });
  };
  const submitForm = () => {
    console.log(data);
    // validation

    /*
     * calling api
     */
    if (loginPageVisible) {
      //=================== FOR SIGN IN=============
      const requestData = { username: data.email, password: data.password };
      if (
        requestData.username.trim().length == 0 ||
        requestData.password.trim().length == 0
      ) {
        toast.error("Username or Password Required !");
        return;
      }

      //Submit data for login
      loginUser(requestData)
        .then((jwtTokenData) => {
          console.log(jwtTokenData);
          doLogin(jwtTokenData, () => {
            console.log("Logged in! saved in local storage");
            //===========> Redirect
            navigate("/user/dashboard");
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("Error while sign in");
          setError({
            errors: error,
            isError: true,
          });
          if (error?.response?.status == 400 || error?.response?.status == 404)
            toast.error(error.response.data.message);
          else
            toast.error(
              "Something went wrong on server. Contact team for support!"
            );
        });
    } else {
      //=====================calling register API
      signUp(data)
        .then((response) => {
          console.log(response);
          console.log("success");
          toast.success("User registered!");
          setError({ errors: {}, isError: false });
          setData({
            name: "",
            email: "",
            password: "",
            about: "",
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("Error");
          setError({
            errors: error,
            isError: true,
          });
        });
    }
  };

  return (
    <Base>
      <div className=" max-w-full h-[700px] flex justify-center items-center">
        {/* <div className="bg-white py-4 h-[400px]"> */}

        <div className="min-w-sm rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 ">
          <span className="w-full flex justify-center font-medium text-lg text-teal-600 tracking-widest">
            {loginPageVisible ? "Login" : "Sign Up"}
          </span>
          <div className="h-full px-4 py-3 w-full">
            <form
              className="h-full flex flex-col gap-6 items-center"
              onSubmit={(event) => event.preventDefault()}
            >
              {!loginPageVisible && (
                <InputField
                  type={"text"}
                  data={data}
                  handleChange={handleChange}
                  error={error.errors?.response?.data?.name}
                  fieldName={"Name"}
                  value={data.name}
                />
              )}
              <InputField
                type={"email"}
                data={data}
                handleChange={handleChange}
                error={error.errors?.response?.data?.email}
                fieldName={"Email"}
                value={data.email}
              />
              <InputField
                type={"password"}
                data={data}
                handleChange={handleChange}
                error={error.errors?.response?.data?.password}
                fieldName={"Password"}
                value={data.password}
              />
              <div className="w-full flex justify-between items-center">
                <div>
                  <button
                    onClick={submitForm}
                    className="group relative inline-block text-sm font-medium text-teal-600 focus:ring-3 focus:outline-hidden"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-teal-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>

                    <span className="relative block border border-current bg-white px-8 py-3">
                      {loginPageVisible ? (
                        <span>Login</span>
                      ) : (
                        <span>Register</span>
                      )}
                    </span>
                  </button>
                </div>
                <button
                  className="text-sm text-gray-500 hover:underline hover:text-blue-500 hover:cursor-pointer"
                  onClick={() => setloginPageVisible(!loginPageVisible)}
                >
                  {loginPageVisible ? (
                    <span>Register as a user</span>
                  ) : (
                    <span>Already a user?</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Base>
  );
};

export default Signup;

/*
<form className="h-fit grid grid-flow-col grid-rows-4 gap-6" onSubmit={(event)=>event.preventDefault()}>{loginFieldVisible&&(<label htmlFor="Name"><span className="text-xl font-medium text-gray-700">Name</span><input type="text" className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3" onChange={(e)=>handleChange(e,"name")}value={data.name}aria-invalid="true"/>{error.errors?.response?.data?.name!=undefined&&(<span className="text-xs text-red-400 w-full flex justify-end mt-1 pr-2">{error.errors?.response?.data?.name}</span>)}</label>)}<InputField type={"email"}data={data}handleChange={handleChange}error={error}/><label htmlFor="Email"><span className="text-xl font-medium text-gray-700">Email</span><input type="email" className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3" onChange={(e)=>handleChange(e,"email")}value={data.email}/>{error.errors?.response?.data?.email!=undefined&&(<span className="text-xs text-red-400 w-full flex justify-end mt-1 pr-2">{error.errors?.response?.data?.email}</span>)}</label><label htmlFor="Password"><span className="text-xl font-medium text-gray-700">Password</span><input type="password" className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3" onChange={(e)=>handleChange(e,"password")}value={data.password}/>{error.errors?.response?.data?.password!=undefined&&(<span className="text-xs text-red-400 w-full flex justify-end mt-1 pr-2">{error.errors?.response?.data?.password}</span>)}</label><div className="w-full flex justify-between items-center"><div><button onClick={submitForm}className="group relative inline-block text-sm font-medium text-teal-600 focus:ring-3 focus:outline-hidden"><span className="absolute inset-0 translate-x-0 translate-y-0 bg-teal-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span><span className="relative block border border-current bg-white px-8 py-3">{loginFieldVisible?(<span>Register</span>):(<span>Login</span>)}</span></button></div><button className="text-sm text-gray-500 hover:underline hover:text-blue-500 hover:cursor-pointer" onClick={()=>setloginFieldVisible(!loginFieldVisible)}>{loginFieldVisible?(<span>Already a user?</span>):(<span>Register as a user</span>)}</button></div></form>
 */

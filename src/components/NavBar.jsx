import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const handleLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/signup");
    });
  };
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" target="/home">
                <span className="sr-only">Home</span>
                <span className="text-4xl font-bold font-mono">Tracker</span>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="#"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>

                  {/* <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Blog
                    </a>
                  </li> */}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  {login ? (
                    <>
                      <button
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                      <span className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 tracking-wider">
                        {user.name.toUpperCase()}
                      </span>
                    </>
                  ) : (
                    <>
                      <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                        to="/signup"
                      >
                        Login
                      </Link>

                      <div className="hidden sm:flex">
                        <Link
                          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                          to="signup"
                        >
                          Register
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;

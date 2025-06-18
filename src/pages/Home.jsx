import Base from "../components/Base";
import { Link } from "react-router";

const Home = () => {
  return (
    <Base>
      <section className="flex flex-grow">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 m-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Tracker — Your Smart Budget Buddy
                </h2>

                <p className="mt-4 text-gray-700">
                  Stay on top of your income and expenses effortlessly.
                  Visualize, control, and grow your financial future today.
                </p>

                <Link
                  className="mt-4 group relative inline-block focus:ring-3 focus:outline-hidden"
                  to="/signup"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest uppercase">
                    Try it!
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget288.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

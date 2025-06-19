import Base from "../components/Base.jsx";

const About = () => {
  return (
    <Base>
      <section className="sm:mt-40 py-12 px-4 sm:px-6 lg:px-8 flex-grow flex justify-center">
        <div className=" sm:w-3xl ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About us</h2>

          <p className="text-gray-700 text-lg mb-6">
            We're still working on adding more awesome features — stay tuned!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2 ">
                Currently Available
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Track your income and expenses</li>
                <li>User authentication and secure login</li>
                <li>Mobile-friendly responsive design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                Coming Soon
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Advanced budget planning tools</li>
                <li>Basic analytics and charts</li>
                <li>Recurring transaction support</li>
                <li>Export to CSV or PDF</li>
                <li>Dark mode & personalization</li>
                <li>Cloud sync & multi-device access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default About;

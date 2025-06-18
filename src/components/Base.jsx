import Footer from "./Footer";
import NavBar from "./NavBar";

const Base = ({ title = "Welcome", children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Base;

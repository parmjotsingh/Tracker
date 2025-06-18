import NavBar from "./NavBar";

const Base = ({ title = "Welcome", children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <div className="w-full bg-amber-400 h-full text-5xl">Footer</div>
    </div>
  );
};
export default Base;

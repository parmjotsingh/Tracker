const Pagination = () => {
  return (
    <div className="p-4 flex flex-row justify-around items-center text-gray-900 font-medium">
      <span className="font-bold text-3xl  -translate-y-0.5 cursor-pointer hover:text-gray-600">
        {"<"}
      </span>
      <span className="items-center mx-2 ">2/20</span>
      <span className="font-bold text-3xl  -translate-y-0.5 cursor-pointer hover:text-gray-600">
        {">"}
      </span>
    </div>
  );
};

export default Pagination;

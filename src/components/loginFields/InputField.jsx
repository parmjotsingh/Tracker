const InputField = ({ type, handleChange, data, error, fieldName }) => {
  return (
    // htmlFor="Email"
    <label className="w-full">
      <span className="font-medium text-gray-500">{fieldName}</span>
      <input
        type={type} //"email"
        className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
        onChange={(e) => handleChange(e, fieldName.toLowerCase())}
        value={data?.fieldName}
      />
      {error != undefined && (
        <span className="text-xs text-red-400 w-full flex justify-end mt-1 pr-2">
          {error}
        </span>
      )}
    </label>
  );
};

export default InputField;

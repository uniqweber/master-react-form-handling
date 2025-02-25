const Input = ({ placeholder, type, ...rest }) => {
  return <input type={type} {...rest} className="bg-white w-full h-12 text-gray-800 px-3 border rounded" placeholder={placeholder} />;
};

export default Input;

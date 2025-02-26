import { FaExclamation } from "react-icons/fa";

const Error = ({ text }) => {
  return (
    <div className="h-5 text-sm rounded-xs text-red-500   font-medium flex items-center   w-full ">
      <FaExclamation className="text-[10px]" />
      <span>{text}</span>
    </div>
  );
};

export default Error;

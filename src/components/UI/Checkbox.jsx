import { FaCheck } from "react-icons/fa";

const Checkbox = ({ title, ...rest }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative size-5   flex items-center justify-center overflow-hidden">
        <input {...rest} type="checkbox" className="hidden peer" />
        <div className="absolute inset-0 border border-gray-700 rounded peer-checked:bg-purple-600 peer-checked:border-purple-600"></div>
        <FaCheck className="text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform " />
      </div>
      <span className="text-white">{title}</span>
    </label>
  );
};

export default Checkbox;

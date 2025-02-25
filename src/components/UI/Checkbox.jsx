const Checkbox = ({ title }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="size-4 rounded-2xl cursor-pointer" />
      <span>{title}</span>
    </label>
  );
};

export default Checkbox;

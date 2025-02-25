

const Button = ({children, type, ...rest}) => {
  return (
    <button type={type} {...rest} className="bg-black text-white w-full h-12 rounded-md border border-gray-700" >{children}</button>
  )
}

export default Button
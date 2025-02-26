import { NavLink } from "react-router";

const Navbar = () => {
   return (
      <div className="flex items-center justify-between max-container py-4 bg-black ">
         <h1>Navbar</h1>
         <div className="flex items-center gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="registration">Registration</NavLink>
         </div>
      </div>
   );
};

export default Navbar;

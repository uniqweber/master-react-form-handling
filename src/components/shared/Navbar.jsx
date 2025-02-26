import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { auth } from "../../firebase.config";

const Navbar = () => {
   const [currentUser, setCurrentUser] = useState("");
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setCurrentUser(user.displayName);
         } else {
            setCurrentUser("");
         }
      });
      return unsubscribe;
   }, []);
   console.log(currentUser);
   return (
      <div className="flex items-center justify-between max-container py-4 bg-black ">
         <h1>Navbar</h1>
         <div className="flex items-center gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="registration">Registration</NavLink>
            {currentUser && currentUser}
         </div>
      </div>
   );
};

export default Navbar;

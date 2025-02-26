import { onAuthStateChanged, signOut } from "firebase/auth";
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

   const userLogout = () => {
      signOut(auth);
   };
   return (
      <div className="flex items-center justify-between max-container py-4 bg-black ">
         <h1>Navbar</h1>
         <p className="flex items-center gap-3">
            {!currentUser && (
               <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="registration">Registration</NavLink>
               </>
            )}
            {currentUser && <button onClick={userLogout}>Logout</button>}
            {currentUser && currentUser}
         </p>
      </div>
   );
};

export default Navbar;

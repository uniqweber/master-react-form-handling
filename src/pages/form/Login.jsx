import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "../../utils/schema";
import { Button, Error, Input } from "../../components/UI";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Link } from "react-router";
import { useState } from "react";

const Login = () => {
   const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(loginSchemas) });
   const [authError, setAuthError] = useState("");
   const [authLoading, setAuthLoading] = useState(false);

   const submitData = async (data) => {
      try {
         setAuthLoading(true);
         setAuthError("");
         const user = await signInWithEmailAndPassword(auth, data.email, data.password);
         if (user) {
            setAuthLoading(false);
         }
         console.log(user);
      } catch (error) {
         setAuthError(error.code);
         setAuthLoading(false);
      }
   };

   return (
      <div className="h-[90vh] max-container flex items-center justify-center">
         <div className="max-w-lg w-full ">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submitData)} className="space-y-2 mt-5">
               <Input {...register("email")} type="text" placeholder="Enter your email" />
               {formState.errors.email && <Error text={formState.errors.email.message} />}
               <Input {...register("password")} type="text" placeholder="Enter your password" />
               {formState.errors.password && <Error text={formState.errors.password.message} />}
               {authError && <Error text={authError} />}
               <Button disabled={authLoading} type="submit">
                  {authLoading ? "Submitting..." : "Login"}
               </Button>
               <p>
                  Don&apos;t have an account ?{" "}
                  <Link to="/registration" className="text-indigo-500">
                     Create an account
                  </Link>{" "}
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;

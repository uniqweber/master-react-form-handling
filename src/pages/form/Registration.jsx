import { Button, Checkbox, Error, Input } from "../../components/UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../utils/schema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";

const Registration = () => {
   const { register, reset, handleSubmit, formState } = useForm({ resolver: zodResolver(registrationSchema) });
   const [authError, setAuthError] = useState("");
   const [authLoading, setAuthLoading] = useState(false);

   const onSubmit = async (data) => {
      try {
         setAuthLoading(true);
         setAuthError("");
         const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
         if (user) {
            await updateProfile(user.user, { displayName: data.name });
            setAuthLoading(false);
            reset();
         }
      } catch (error) {
         setAuthLoading(false);
         if (error.code === "auth/email-already-in-use") {
            setAuthError("This email is already in use. ");
         } else {
            setAuthError(error.code);
         }
      }
   };
   return (
      <div className="max-w-lg w-full">
         <h1>Registration </h1>
         <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-3 mt-5">
            <Input {...register("name")} type="text" placeholder="Enter your name" />
            {formState.errors.name && <Error text={formState.errors.name.message} />}
            <Input {...register("email")} type="email" placeholder="Enter your email" />
            {formState.errors.email && <Error text={formState.errors.email.message} />}
            <Input {...register("password")} type="text" placeholder="Enter your password" />
            {formState.errors.password && <Error text={formState.errors.password.message} />}
            <Input {...register("confirmPassword")} type="text" placeholder="Confirm your password" />
            {formState.errors.confirmPassword && <Error text={formState.errors.confirmPassword.message} />}
            <Checkbox {...register("terms")} title="Agree to terms and conditions" />
            {formState.errors.terms && <Error text={formState.errors.terms.message} />}
            {authError && <Error text={authError} />}
            <Button type="submit" disabled={authLoading}>
               {authLoading ? "Submitting...." : "Register"}
            </Button>
         </form>
      </div>
   );
};

export default Registration;

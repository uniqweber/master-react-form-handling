import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "../../utils/schema";
import { Button, Error, Input } from "../../components/UI";

const Login = () => {
   const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(loginSchemas) });

   const submitData = (data) => {
      console.log(data);
   };

   return (
      <div className="max-w-lg w-full">
         <h1>Login</h1>
         <form onSubmit={handleSubmit(submitData)} className="space-y-2 mt-5">
            <Input {...register("email")} type="text" placeholder="Enter your email" />
            {formState.errors.email && <Error text={formState.errors.email.message} />}
            <Input {...register("password")} type="password" placeholder="Enter your password" />
            {formState.errors.password && <Error text={formState.errors.password.message} />}
            <Button type="submit">Login</Button>
         </form>
      </div>
   );
};

export default Login;

import { Button, Checkbox, Error, Input } from "../../components/UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../utils/schema";

const ExploreForm = () => {
   const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(registrationSchema) });

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="h-[90vh] flex items-center justify-center">
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
               <Button type="submit">Submit</Button>
            </form>
         </div>
      </div>
   );
};

export default ExploreForm;

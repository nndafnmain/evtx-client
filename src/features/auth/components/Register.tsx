import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useRegister } from "../hooks/useRegister";
import { RegisterFormData } from "../schemas/register.schema";
import { FormHeader } from "./FormHeader";
import { registerSchema } from "../schemas/register.schema";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useRegister();

  const onSubmit = (data: RegisterFormData) => {
    const { username, email, password, referralCode } = data;
    mutation.mutate({ username, email, password, referralCode });
  };

  return (
    <main className="w-full space-y-3">
      <section>
        <FormHeader
          title="Register"
          subtitle="Already have an account?"
          link="Login"
          to="/auth/login"
        />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 space-y-3 rounded-xl border border-gray-300 bg-white p-3 shadow-xl"
      >
        <Input
          label="Username"
          placeholder="Cole Palmer"
          registration={register("username")}
          error={errors.username?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="palmer@gmail.com"
          registration={register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="*********"
          registration={register("password")}
          error={errors.password?.message}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="*********"
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Input
          label="Referral Code"
          placeholder="5ABBV7"
          registration={register("referralCode")}
          error={errors.referralCode?.message}
        />

        <button
          type="submit"
          className="button-full cursor-pointer"
          disabled={mutation.isPending ? true : false}
        >
          Register
        </button>
      </form>
    </main>
  );
};

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
          placeholder="Username.."
          registration={register("username")}
          error={errors.username?.message}
        />

        <Input
          type="email"
          placeholder="Email.."
          registration={register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Password.."
          registration={register("password")}
          error={errors.password?.message}
        />

        <Input
          type="password"
          placeholder="Confirm Password.."
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Input
          placeholder="Referral Code.."
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

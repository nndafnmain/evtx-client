import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useLogin } from "../hooks/useLogin";
import { LoginFormData, loginSchema } from "../schemas/login.schema";
import { FormHeader } from "./FormHeader";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };
  return (
    <main className="space-y-3">
      <section>
        <FormHeader
          title="Login"
          subtitle="Don't have account yet?"
          link="Register"
          to="/auth/register"
        />
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 rounded-xl border border-gray-300 bg-white p-3 shadow-xl md:grid-cols-2"
      >
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

        <button type="submit" className="button-full col-span-2 cursor-pointer">
          Login
        </button>
      </form>
    </main>
  );
};

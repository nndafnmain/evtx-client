import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginApiService } from "../api/login-api.service";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  return useMutation({
    mutationFn: loginApiService,
    onSuccess: (data) => {
      setAuth(data.access_token);
      toast.success("Login success");
      setTimeout(() => navigate("/"), 1500);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

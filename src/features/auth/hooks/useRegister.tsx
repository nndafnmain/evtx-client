import { useMutation } from "@tanstack/react-query";
import { registerApiService } from "../api/register-api.service";
import toast from "react-hot-toast";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApiService,
    onSuccess: (data) => {
      console.log("DATA: ", data);
      toast.success("Registration success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEventApi } from "../api/create-event.api";

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: createEventApi,
    onSuccess: (data) => {
      console.log("DATA: ", data);
      toast.success("Event created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

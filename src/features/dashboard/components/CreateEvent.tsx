import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import {
  EventFormValues,
  eventSchema,
} from "../../events/schemas/event.schema";
import { useCreateEvent } from "../hooks/useCreateEvent";

export const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
  });

  console.log(errors);

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const mutation = useCreateEvent();

  const onSubmit = (data: EventFormValues) => {
    console.log("FORM SUBMITTED");

    alert(
      `start date: ${data.startDate.toISOString()} end date ${data.endDate?.toISOString()} and time ${data.time} }`,
    );

    const formattedData = {
      ...data,
      price: Number(data.price),
      totalTicket: Number(data.totalTicket),
      startDate: data.startDate.toISOString() as string,
      endDate: data.endDate ? (data.endDate.toISOString() as string) : null,
    };
    mutation.mutate(formattedData);

    console.log("Submitted Data:", data);
  };
  return (
    <main className="container h-[95%] w-[80%] p-2">
      <section className="rounded-md border border-gray-400">
        <div className="">
          <img src="/event/ed1.jpg" alt="" className="w-full rounded-md" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-2 space-y-2 p-3"
        >
          <Input
            label="Title"
            placeholder="Cole Palmer"
            registration={register("title")}
            error={errors.title?.message}
          />{" "}
          <Input
            label="Description"
            placeholder="Cole Palmer"
            registration={register("description")}
            error={errors.description?.message}
          />
          <Input
            label="Price"
            type="number"
            placeholder="Cole Palmer"
            registration={register("price")}
            error={errors.price?.message}
          />
          <Input
            label="Total Ticket"
            type="number"
            placeholder="Cole Palmer"
            registration={register("totalTicket")}
            error={errors.totalTicket?.message}
          />
          <div className="flex flex-col">
            <label htmlFor="">Type</label>
            <select
              id=""
              {...register("type")}
              defaultValue="PAID"
              className="border border-blue-700 p-3"
            >
              <option value="FREE">FREE</option>
              <option value="PAID">PAID</option>
            </select>
            {errors.type && (
              <p className="text-sm text-red-500">{errors.type.message}</p>
            )}
          </div>
          <Input
            label="Category"
            placeholder="Cole Palmer"
            registration={register("categories")}
            error={errors.categories?.message}
          />
          <Input
            label="Location"
            placeholder="Cole Palmer"
            registration={register("location")}
            error={errors.location?.message}
          />
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setValue("startDate", date as Date)}
              dateFormat="yyyy-MM-dd"
              className="w-full rounded-md border p-2"
            />
            {errors.startDate && (
              <p className="text-sm text-red-500">{errors.startDate.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setValue("endDate", date as Date)}
              dateFormat="yyyy-MM-dd"
              minDate={startDate || new Date()} // Prevent selecting past dates
              className="w-full rounded-md border p-2"
            />
            {errors.endDate && (
              <p className="text-sm text-red-500">{errors.endDate.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              {...register("time")}
              className="w-full rounded-md border p-2"
            />
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time.message}</p>
            )}
          </div>
          <button className="button-full" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

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
  const selectedType = watch("type");

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
            placeholder="Mens Rea - Pandji"
            registration={register("title")}
            error={errors.title?.message}
          />{" "}
          <Input
            label="Price"
            type="number"
            placeholder="Cole Palmer"
            registration={register("price")}
            error={errors.price?.message}
            disabled={selectedType === "FREE"}
          />
          <Input
            label="Discount"
            type="number"
            placeholder="Cole Palmer"
            registration={register("discount")}
            error={errors.discount?.message}
            disabled={selectedType === "FREE"}
          />
          <Input
            label="Total Ticket"
            type="number"
            placeholder="Cole Palmer"
            registration={register("totalTicket")}
            error={errors.totalTicket?.message}
          />
          <div className="flex flex-col space-y-2">
            <label className="text-xs">Type</label>
            <select
              {...register("type")}
              defaultValue="PAID"
              className="input border border-blue-700 p-3"
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
          {/* Full-width Start Date */}
          <div className="col-span-2">
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
          {/* Full-width End Date */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setValue("endDate", date as Date)}
              dateFormat="yyyy-MM-dd"
              minDate={startDate || new Date()}
              className="w-full rounded-md border p-2"
            />
            {errors.endDate && (
              <p className="text-sm text-red-500">{errors.endDate.message}</p>
            )}
          </div>
          {/* Time (remains half width) */}
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
          {/* Full-width Description */}
          <div className="col-span-2">
            <label>Description</label>
            <textarea
              {...register("description")}
              className="w-full rounded-md border border-gray-500 p-3"
            ></textarea>
          </div>
          <button className="button-full col-span-2" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

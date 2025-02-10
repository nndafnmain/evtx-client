import { string, z } from "zod";

export const eventSchema = z.object({
  startDate: z
    .preprocess(
      (arg) => (typeof arg === "string" ? new Date(arg) : arg),
      z.date(),
    )
    .refine((date) => !isNaN(date.getTime()), {
      message: "Invalid start date",
    }),

  endDate: z
    .preprocess(
      (arg) => (typeof arg === "string" ? new Date(arg) : arg),
      z.date(),
    )
    .optional()
    .refine((date) => date === undefined || !isNaN(date.getTime()), {
      message: "Invalid end date",
    }),

  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Time must be in HH:mm format",
  }),
  price: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(0, "Price must be a positive number"),
  ),
  totalTicket: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1, "Total ticket must be at least 1"),
  ),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  type: z.enum(["FREE", "PAID"], {
    message: "It must be FREE or PAID event. Choose one!",
  }),
  categories: z.string(),
});

export type EventFormValues = z.infer<typeof eventSchema>;

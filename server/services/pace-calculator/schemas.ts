import z from "zod";

export enum PaceUnit {
  Miles = "mi",
  Kilometers = "km",
}

export const paceCalculatorSchema = z.object({
  minutes: z.coerce.number().min(0, "Minutes is required"),
  seconds: z.coerce.number().min(0, "Seconds is required").max(59),
  unit: z.nativeEnum(PaceUnit, { required_error: "pace is required" }),
  offsets: z.object({
    interval: z.number().min(0).max(10), // seconds
    count: z.number().min(0).max(5),
  }),
});

export const paceCalculatorApiSchema = paceCalculatorSchema.pick({
  minutes: true,
  seconds: true,
  unit: true,
});

export type PaceCalculatorType = z.infer<typeof paceCalculatorSchema>;
export type PaceCalculatorValidationErrors = z.inferFlattenedErrors<
  typeof paceCalculatorSchema
>["fieldErrors"];

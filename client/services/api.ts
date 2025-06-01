import { paceCalculatorApiSchema } from "@/server/services/pace-calculator/schemas";
import { z } from "zod";
import axios from "axios";
import { type PaceCalculator } from "@/server/services/pace-calculator/services";

export type PacePredictionsApiResponse = {
  fields: z.infer<typeof paceCalculatorApiSchema>;
  results: Awaited<ReturnType<PaceCalculator["calculateFinishTimes"]>>;
};

export const getPacePredictions = async (
  values: z.infer<typeof paceCalculatorApiSchema>
) => {
  try {
    const result = await axios.post("/api/pace/predict", values);
    return result.data as PacePredictionsApiResponse;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get paces");
  }
};

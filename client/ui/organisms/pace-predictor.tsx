"use client";

import {
  paceCalculatorApiSchema,
  PaceUnit,
} from "@/server/services/pace-calculator/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../atoms/form";
import { Input } from "../atoms/input";
import {
  getPacePredictions,
  PacePredictionsApiResponse,
} from "@/client/services/api";
import { distances } from "@/public/locales/en/pace-calculator.json";

export const PacePredictor = ({
  className,
  defaultResults,
}: {
  className?: string;
  defaultResults: PacePredictionsApiResponse;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [apiResponse, setApiResponse] =
    React.useState<PacePredictionsApiResponse | null>(defaultResults);
  const form = useForm<z.infer<typeof paceCalculatorApiSchema>>({
    defaultValues: {
      minutes: 5,
      seconds: 30,
      unit: PaceUnit.Kilometers,
    },
    resolver: zodResolver(paceCalculatorApiSchema),
  });

  const onSubmit = async (values: z.infer<typeof paceCalculatorApiSchema>) => {
    try {
      setLoading(true);
      const result = await getPacePredictions(values);
      setApiResponse(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const isFormDisabled = loading || form.formState.isSubmitting;
  const unit = form.watch("unit");
  const allDistances =
    unit === PaceUnit.Kilometers ? distances.km : distances.miles;

  return (
    <Form {...form}>
      <div className={className}>
        <div className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="text-rose-500 font-black mb-3 block uppercase tracking-wide">
                Your Current Pace
              </label>
              <div className="flex gap-3">
                <div className="flex">
                  <FormField
                    control={form.control}
                    name="minutes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Minutes</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="05"
                            disabled={isFormDisabled}
                            className="!w-16 !h-full !rounded-l-md !border-2 !border-rose-500 !border-r-0 rounded-r-none !px-3 !py-3 !text-center !bg-black !text-white !font-black !text-lg"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span className="inline-flex items-center border-2 border-rose-500 border-l-0 border-r-0 bg-rose-500 px-3 py-3 text-black font-black">
                    :
                  </span>
                  <FormField
                    control={form.control}
                    name="seconds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Seconds</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="30"
                            disabled={isFormDisabled}
                            className="!w-16 !h-full !rounded-r-md !border-2 !border-rose-500 !border-l-0 !px-3 !py-3 !text-center !bg-black !text-white !font-black !text-lg rounded-l-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <span className="inline-flex items-center rounded-md border-2 border-rose-500 bg-rose-500 px-4 py-3 text-black font-black">
                  /km
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 font-black text-lg py-4 h-auto"
            >
              SHOW ME THE TRUTH
            </Button>

            <div className="space-y-3">
              <h4 className="font-black text-rose-500 uppercase tracking-wide">
                YOUR RACE PREDICTIONS
              </h4>
              <div className="space-y-2">
                {allDistances
                  .filter((c) => c.isTrackEvent)
                  .map((c) => {
                    const prediction = apiResponse?.results.find(
                      (r) => r.rawDistance === c.value
                    );

                    return (
                      <div
                        key={c.isTrackEvent + c.label + c.value}
                        className="flex justify-between items-center p-3 bg-black rounded-lg border border-zinc-800"
                      >
                        <span className="font-black text-white">{c.label}</span>
                        <span className="text-rose-500 font-black text-lg">
                          {prediction?.times?.[2]}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
};

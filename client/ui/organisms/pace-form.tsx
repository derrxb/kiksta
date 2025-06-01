"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/client/ui/atoms/form";
import {
  paceCalculatorApiSchema,
  PaceUnit,
} from "@/server/services/pace-calculator/schemas";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import { paces } from "@/public/locales/en/pace-calculator.json";
import { RadioGroup, RadioGroupItem } from "../atoms/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../atoms/button";
import React from "react";

export const PaceForm = ({
  className,
  defaultValues,
}: {
  className?: string;
  defaultValues: z.infer<typeof paceCalculatorApiSchema>;
}) => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof paceCalculatorApiSchema>>({
    defaultValues: {
      minutes: defaultValues.minutes,
      seconds: defaultValues.seconds,
      unit: defaultValues.unit,
    },
    resolver: zodResolver(paceCalculatorApiSchema),
  });

  const router = useRouter();
  const onSubmit = (values: z.infer<typeof paceCalculatorApiSchema>) => {
    setLoading(true);
    router.replace(
      `/pace-calculator?minutes=${values.minutes}&seconds=${values.seconds}&unit=${values.unit}`
    );
    setLoading(false);
  };

  const isFormDisabled = form.formState.isSubmitting || loading;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div className="flex flex-col lg:flex-row gap-2">
          <FormField
            control={form.control}
            name="minutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minutes</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger disabled={isFormDisabled}>
                      <SelectValue placeholder="Select minutes" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {paces.minutes?.map((pace) => (
                        <SelectItem
                          key={pace.label}
                          value={pace.value.toString()}
                        >
                          {pace.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seconds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seconds</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                  disabled={isFormDisabled}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select seconds" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {paces.seconds?.map((pace) => (
                        <SelectItem
                          key={pace.label}
                          value={pace.value.toString()}
                        >
                          {pace.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Pace</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row"
                  disabled={isFormDisabled}
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value={PaceUnit.Kilometers} id="km" />
                    </FormControl>
                    <FormLabel htmlFor="r2" className="font-normal">
                      min/km
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value={PaceUnit.Miles} id="mi" />
                    </FormControl>
                    <FormLabel className="font-normal">min/mi</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full px-4"
          size="lg"
          disabled={isFormDisabled}
        >
          Calculate Paces
        </Button>
      </form>
    </Form>
  );
};

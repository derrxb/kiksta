import { PaceCalculator } from "@/server/services/pace-calculator/services";
import {
  paceCalculatorApiSchema,
  PaceUnit,
} from "@/server/services/pace-calculator/schemas";
import { redirect } from "next/navigation";
import { PaceTable } from "@/client/ui/organisms/pace-table";
import pacesCopy from "@/public/locales/en/pace-calculator.json";
import { PaceForm } from "@/client/ui/organisms/pace-form";
import { FrequentlyAskedQuestions } from "@/client/ui/molecules/frequently-asked-questions";

export const metadata = {
  title: "Running Pace Calculator | Zelo - Running Tools, Perfected",
  description: `Use Zelo's Running Pace Calculator to easily determine your performance across various distances. Enter your minutes and seconds per kilometer or mile to get accurate projections for races of any length. Ideal for runners looking to optimize training and plan race strategies. Built by runners, for runners.`,
};

const DEFAULT_MINUTE = 5;
const DEFAULT_SECOND = 30;
const DEFAULT_UNIT = PaceUnit.Kilometers;

export default async function PaceCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ minutes: number; seconds: number; unit: string }>;
}) {
  const search = await searchParams;
  const fields = await paceCalculatorApiSchema.safeParseAsync({
    minutes: search.minutes ?? DEFAULT_MINUTE,
    seconds: search.seconds ?? DEFAULT_SECOND,
    unit: search.unit ?? DEFAULT_UNIT,
  });

  if (!fields.success) {
    return redirect("/pace-calculator");
  }

  const service = new PaceCalculator()
    .setMinutes(fields.data?.minutes || 0)
    .setSeconds(fields.data?.seconds || 0)
    .setPaceMethod(fields.data?.unit)
    .setOffsets(5, 5)
    .validate();

  const results = await service.calculateFinishTimes();
  const distances =
    fields.data.unit === PaceUnit.Kilometers
      ? pacesCopy.distances.km
      : pacesCopy.distances.miles;

  return (
    <div className="flex flex-col space-y-8 items-center w-full">
      <div className="max-w-7xl w-full mx-auto py-16 grid grid-cols-1 md:grid-cols-8 gap-8 p-4 md:px-0">
        <div className="flex flex-col space-y-4 col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold font-sans">Race Pace Calculator</h2>
          <p>
            Our Running Pace Calculator is just one of the many tools designed
            to help you achieve your goals. Simply enter your pace, and we’ll
            provide you with projected finish times for various race
            distances—from quick 5Ks to full marathons.
          </p>
          <p>
            It’s straightforward, reliable, and tailored to help you fine-tune
            your training and race-day strategy. Dive in and discover how your
            pace measures up across the board!
          </p>

          <PaceForm
            className="flex flex-col space-y-4"
            defaultValues={fields.data}
          />
        </div>

        <div className="col-span-1 md:col-span-5">
          <PaceTable
            distances={distances}
            result={results}
            unit={fields.data.unit}
          />
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto gap-8 p-4 bg-slate-100 rounded-lg">
        <h2 className="text-3xl font-semibold mb-2 font-sans">
          Frequently Asked Questions
        </h2>
        <FrequentlyAskedQuestions />
      </div>
    </div>
  );
}

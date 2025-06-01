import { PaceUnit } from "@/server/services/pace-calculator/schemas";

export const Pace = ({ pace, unit }: { pace: string; unit: PaceUnit }) => {
  return (
    <span>
      {pace} {unit === PaceUnit.Kilometers ? "min/km" : "min/mi"}
    </span>
  );
};

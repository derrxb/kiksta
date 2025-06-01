import { cn } from "@/client/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/client/ui/atoms/table";
import { Pace } from "../atoms/pace";
import { PaceUnit } from "@/server/services/pace-calculator/schemas";

export type PaceTableProps = {
  distances: { label: string; isTrackEvent?: boolean }[];
  unit: PaceUnit;
  result: {
    distance: string;
    paces: string[];
    times: string[];
  }[];
};

export const PaceTable = ({ result, unit, distances }: PaceTableProps) => {
  return (
    <div className="bg-slate-50 shadow-lg rounded-lg p-4 border border-slate-300">
      <Table>
        <TableCaption>
          Your predicted pace times with 2 +-5 seconds intervals.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Distances</TableHead>
            {result?.[0]?.paces?.map((pace, index) => (
              <TableHead
                key={pace}
                className={cn("font-semibold font-sans", {
                  "hidden md:table-cell": index !== 2,
                })}
              >
                <Pace pace={pace} unit={unit} />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.map((pace, index) => (
            <TableRow
              key={pace.distance + index}
              className={cn({
                "bg-slate-200 rounded-md hover:!bg-slate-200":
                  distances?.[index]?.isTrackEvent === true,
              })}
            >
              <TableCell>{distances?.[index]?.label}</TableCell>
              {pace.times?.map((time, timesIndex) => (
                <TableCell
                  key={`${time}-${timesIndex}-${distances?.[index]?.label}`}
                  className={cn("font-normal", {
                    "hidden md:table-cell": timesIndex !== 2,
                  })}
                >
                  {time}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

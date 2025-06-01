import {
  paceCalculatorApiSchema,
  PaceUnit,
} from "@/server/services/pace-calculator/schemas";
import { PaceCalculator } from "@/server/services/pace-calculator/services";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_MINUTE = 5;
const DEFAULT_SECOND = 30;
const DEFAULT_UNIT = PaceUnit.Kilometers;

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const fields = await paceCalculatorApiSchema.safeParseAsync({
    minutes: body.minutes ?? DEFAULT_MINUTE,
    seconds: body.seconds ?? DEFAULT_SECOND,
    unit: body.unit ?? DEFAULT_UNIT,
  });

  if (!fields.success) {
    return NextResponse.json(
      {
        error: "Invalid response",
        reasons: fields.error.formErrors.fieldErrors,
      },
      { status: 400 }
    );
  }

  const service = new PaceCalculator()
    .setMinutes(fields.data?.minutes || 0)
    .setSeconds(fields.data?.seconds || 0)
    .setPaceMethod(fields.data?.unit)
    .setOffsets(5, 5)
    .validate();

  const results = await service.calculateFinishTimes();

  return NextResponse.json({ results, fields }, { status: 200 });
};

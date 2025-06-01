import { format } from "date-fns";
import common from "@/public/locales/en/pace-calculator.json";
import { paceCalculatorSchema, PaceCalculatorType, PaceUnit } from "./schemas";

export class PaceCalculator {
  private paceMinutes: number;
  private paceSeconds: number;
  private unit: PaceUnit;
  private offsets: PaceCalculatorType["offsets"];

  constructor() {
    this.paceMinutes = 0;
    this.paceSeconds = 0;
    this.unit = PaceUnit.Kilometers;
    this.offsets = { interval: 0, count: 0 };
  }

  setMinutes(minutes: number) {
    this.paceMinutes = minutes;
    return this;
  }

  setSeconds(seconds: number) {
    this.paceSeconds = seconds;
    return this;
  }

  setPaceMethod(unit: PaceUnit) {
    this.unit = unit;
    return this;
  }

  setOffsets(interval: number, count: number) {
    this.offsets = { interval, count };
    return this;
  }

  formatTime(seconds: number) {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.round(seconds % 60);

    // Use date-fns to format the time
    const date = new Date(0, 0, 0, hours, minutes, secs);
    return format(date, "HH:mm:ss");
  }

  formatPace(seconds: number) {
    // Calculate hours, minutes, and seconds
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.round(seconds % 60);

    // Use date-fns to format the time
    const date = new Date(0, 0, 0, 0, minutes, secs);
    return format(date, "mm:ss");
  }

  validate() {
    const result = paceCalculatorSchema.safeParse({
      minutes: this.paceMinutes,
      seconds: this.paceSeconds,
      unit: this.unit,
      offsets: this.offsets,
    });

    console.log(result);

    if (!result.success) {
      throw new Error("Invalid values provided to pace calculator");
    }

    return this;
  }

  async calculateFinishTimes() {
    const Distances = common.distances;

    const paceInSeconds = this.paceMinutes * 60 + this.paceSeconds;
    const finishTimes = [];
    const { interval, count } = this.offsets;
    const distances =
      this.unit === PaceUnit.Kilometers ? Distances.km : Distances.miles;

    // Calculate finish times for each predefined distance
    for (const distance of distances) {
      let currentPace = paceInSeconds - interval * ((count + 1) / 2);
      const times = [];
      const paces = [];
      for (let i = 0; i < count; i += 1) {
        const time = (currentPace + interval) * distance.value;
        times.push(this.formatTime(time));
        currentPace += interval;
        paces.push(this.formatPace(currentPace));
      }

      finishTimes.push({
        distance: distance.label,
        paces,
        times,
      });
    }

    return finishTimes;
  }
}

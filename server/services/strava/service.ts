import axios from "axios";
import { AthleteSchema } from "./schema";
import z from "zod";
import { exists, get, set } from "@/lib/cache";

export class StravaService {
  static async getAuthenticatedAthlete(userId: string, token: string) {
    try {
      if (await exists(userId)) {
        return get<z.infer<typeof AthleteSchema>>(userId);
      }

      const result = await axios.get<z.infer<typeof AthleteSchema>>(
        "https://www.strava.com/api/v3/athlete",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await set(userId, result.data);

      return result.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

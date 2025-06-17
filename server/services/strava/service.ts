import axios from "axios";
import { AthleteSchema } from "./schema";
import z from "zod";
import Cache from "file-system-cache";

const cache = Cache({
  basePath: "./cache",
  ns: "strava-cache",
  hash: "sha1",
  ttl: 60,
});

export class StravaService {
  static async getAuthenticatedAthlete(token: string) {
    try {
      if (await cache.get(token)) {
        return cache.get(token);
      }

      const result = await axios.get<z.infer<typeof AthleteSchema>>(
        "https://www.strava.com/api/v3/athlete",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await cache.set(token, result.data);

      return result.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

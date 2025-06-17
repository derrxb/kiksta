import { z } from "zod";

export const BikeSchema = z.object({
  id: z.string(),
  primary: z.boolean(),
  name: z.string(),
  resource_state: z.number(),
  distance: z.number(),
});

export const ShoeSchema = z.object({
  id: z.string(),
  primary: z.boolean(),
  name: z.string(),
  resource_state: z.number(),
  distance: z.number(),
});

export const AthleteSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  resource_state: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  sex: z.enum(["M", "F"]),
  premium: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  badge_type_id: z.number(),
  profile_medium: z.string().url(),
  profile: z.string().url(),
  friend: z.null(),
  follower: z.null(),
  follower_count: z.number(),
  friend_count: z.number(),
  mutual_friend_count: z.number(),
  athlete_type: z.number(),
  date_preference: z.string(),
  measurement_preference: z.string(),
  clubs: z.array(z.unknown()),
  ftp: z.null(),
  weight: z.number(),
  bikes: z.array(BikeSchema),
  shoes: z.array(ShoeSchema),
});

import { auth } from "@/server/init/auth/config";
import { supabase } from "@/server/init/database/config";
import { StravaService } from "@/server/services/strava/service";
import assert from "assert";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return redirect("/auth/login");
  }

  const { data } = await supabase
    .schema("next_auth")
    .from("accounts")
    .select("*")
    .eq("userId", String(session?.user?.id))
    .single()
    .throwOnError();

  assert(data?.userId);
  assert(data?.access_token);

  const athlete = await StravaService.getAuthenticatedAthlete(
    data?.userId,
    data?.access_token
  );

  return (
    <div className="bg-black/50 p-4 h-full w-full">
      {JSON.stringify(athlete, undefined, " ")}
    </div>
  );
}

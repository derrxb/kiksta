import { DataStringifyBlob } from "@/client/ui/atoms/json-stringify";
import { auth } from "@/server/init/auth/config";
import { supabase } from "@/server/init/database/config";
import { StravaService } from "@/server/services/strava/service";
import assert from "assert";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { omit } from "lodash";

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
    <div className="p-4 h-full w-full max-w-7xl mx-auto space-y-4">
      <span className="font-bold">Personal Info</span>
      <DataStringifyBlob data={omit(athlete, ["shoes", "bikes", "clubs"])} />

      <span className="font-bold">Shoes</span>
      <DataStringifyBlob data={athlete?.shoes} />
    </div>
  );
}

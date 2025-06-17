import { auth } from "@/server/init/auth/config";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return redirect("/auth/login");
  }

  console.log(session);

  return (
    <div className="bg-black/50 p-4 h-full w-full">
      {JSON.stringify(session, undefined, " ")}
    </div>
  );
}

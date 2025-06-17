import { signIn } from "@/server/init/auth/config";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("strava", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit">Sign In with Strava</button>
    </form>
  );
}

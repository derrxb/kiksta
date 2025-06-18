import { Button } from "@/client/ui/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/ui/atoms/card";
import { signIn } from "@/server/init/auth/config";

export default function SignIn() {
  return (
    <Card className="max-w-xl my-auto mx-auto min-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Log into your account
        </CardTitle>

        <span className="text-slate-700">
          You need to sign in with either your Strava or Garmin Connect account
          to be able to be verified
        </span>
      </CardHeader>

      <CardContent>
        <form
          action={async () => {
            "use server";
            await signIn("strava", { redirectTo: "/dashboard" });
          }}
        >
          <Button
            variant="strava"
            type="submit"
            className="w-full text-lg font-medium"
            size="lg"
          >
            Sign In with Strava
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

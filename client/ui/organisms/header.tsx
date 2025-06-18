import Link from "next/link";
import { Button } from "../atoms/button";

const RunningHeartbeatLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-600">
    <path
      fill="currentColor"
      d="M2 16h4l2-6 4 12 4-18 4 24 4-12 2 6h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="26" r="2" fill="currentColor" />
    <circle cx="16" cy="28" r="2" fill="currentColor" />
    <circle cx="24" cy="26" r="2" fill="currentColor" />
  </svg>
);

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <RunningHeartbeatLogo />
            <span className="text-2xl font-bold text-gray-900">Kiksta</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex text-gray-600 hover:text-gray-900"
          >
            About
          </Button>
          <Link href="/auth/login">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-gray-600 hover:text-gray-900"
            >
              Login
            </Button>
          </Link>

          <Button className="bg-blue-600 hover:bg-blue-700">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}

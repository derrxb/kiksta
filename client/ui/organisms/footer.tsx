import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "../atoms/input";
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

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <RunningHeartbeatLogo />
              <span className="text-xl font-bold">Kiksta</span>
            </div>
            <p className="text-gray-400 mb-4">
              The most trusted source for running shoe reviews, powered by real
              Strava data from real runners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Browse Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Top Rated Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Compare Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Running Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shoe Finder Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Running Topics (SEO-focused) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Running Topics</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Marathon Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Trail Running Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Running Form Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Injury Prevention
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Race Day Preparation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest running shoe reviews and guides delivered to your
              inbox.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Kiksta. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

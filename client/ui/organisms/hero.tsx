"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { Activity, Users, Shield } from "lucide-react";
import { useState } from "react";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";

type FormData = {
  email: string;
};

const TooltipBadge = ({
  icon,
  text,
  tooltip,
}: {
  icon: React.ReactNode;
  text: string;
  tooltip: string;
  color: string;
}) => (
  <div className="group relative">
    <div className={`flex items-center space-x-2 text-gray-700 cursor-help`}>
      {icon}
      <span className="font-medium">{text}</span>
    </div>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
      {tooltip}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

export function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-8">
            Running Shoe Reviews
            <span className="block text-blue-600">That Actually Work</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Stop wasting money on shoes that don&apos;t fit your running style.
            Get reviews from verified runners who&apos;ve actually put in the
            miles.
          </p>

          <div className="flex flex-row gap-3 sm:gap-6 items-center justify-center mb-12 flex-wrap">
            <TooltipBadge
              icon={<Shield className="h-5 w-5 text-blue-600" />}
              text="Strava Verified"
              tooltip="Only Strava or Garmin Connect verified miles count"
              color="blue"
            />
            <TooltipBadge
              icon={<Activity className="h-5 w-5 text-blue-600" />}
              text="Real Miles"
              tooltip="Minimum 50+ miles required before reviewing any shoe"
              color="blue"
            />
            <TooltipBadge
              icon={<Users className="h-5 w-5 text-blue-600" />}
              text="Real Runners"
              tooltip="Reviews from verified athletes, not bots or fake accounts"
              color="blue"
            />
          </div>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 h-12"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap h-12 px-6"
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </Button>
            </form>
            {isSuccess ? (
              <p className="text-green-600 text-sm mt-3">
                Thanks! You&apos;re on the waitlist.
              </p>
            ) : (
              <p className="text-sm text-gray-500 mt-3">
                Join 2,847 runners already on the waitlist
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Target, TrendingUp, Shield } from "lucide-react";
import { Button } from "../atoms/button";
import { Card, CardContent } from "../atoms/card";

export function TrustSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Finally, Reviews
            <span className="block text-blue-600">You Can Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what happens when you get shoe reviews from people who
            actually run.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600">
              100%
            </div>
            <div className="text-sm text-gray-600">Verified Runners</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600">
              50+
            </div>
            <div className="text-sm text-gray-600">Min Miles Required</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600">
              0
            </div>
            <div className="text-sm text-gray-600">Fake Reviews</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600">
              ∞
            </div>
            <div className="text-sm text-gray-600">Trust Level</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Find Your Perfect Match
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Filter reviews by runners who share your pace, distance, and
                terrain. No more guessing if a shoe will work for you.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Stop Wasting Money
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Know exactly how a shoe performs before you buy. See durability
                data from hundreds of verified miles.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Run with Confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every review is backed by real GPS data from real runs. Trust
                the data, trust your choice.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Full-width CTA Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-8 lg:py-20 lg:px-12 rounded-2xl text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to find shoes that actually work for you?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of runners who are done with fake reviews and ready
            for the real deal.
          </p>
          <Button
            onClick={scrollToTop}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto font-semibold"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}

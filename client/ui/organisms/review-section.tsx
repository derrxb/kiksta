import { Star, MapPin, Clock, ArrowRight, Zap, Check } from "lucide-react";
import { Button } from "../atoms/button";
import { Card, CardContent } from "../atoms/card";

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reviews That Tell
            <span className="block text-blue-600">The Real Story</span>
          </h2>
          <p className="text-xl text-gray-600">
            Every review comes with verified data from actual runs. No fluff,
            just facts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left side - Mike's Review + Additional Card */}
          <div className="space-y-6">
            <Card className="border border-gray-200 shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      MR
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mike R.</h4>
                      <p className="text-sm text-gray-500">
                        Marathon Runner • 847 miles verified
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  Nike Air Zoom Pegasus 40
                </h3>
                <p className="text-gray-700 mb-6">
                  &quot;Incredible daily trainer. Used these for 6 months of
                  marathon training including 3 long runs over 20 miles. Great
                  cushioning holds up even after 400+ miles.&quot;
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">847</div>
                    <div className="text-xs text-gray-600">Miles Run</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">7:42</div>
                    <div className="text-xs text-gray-600">Avg Pace</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">73</div>
                    <div className="text-xs text-gray-600">Total Runs</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Road & Trail</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>6 months ago</span>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View Strava Runs <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Card for Balance */}
            <Card className="border border-gray-200 shadow-sm bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">
                    Why Mike&apos;s Review Matters
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">
                      847 verified Strava miles
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">
                      6 months of real testing
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">
                      Marathon training data
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">
                      Multiple terrain types
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Charts and Data */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Review Breakdown by Pace
              </h3>
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Under 6:00/mile
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        6:00-8:00/mile
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Over 8:00/mile
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">37%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Training Data Insights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      73%
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Long Runs
                    </div>
                    <div className="text-xs text-gray-500">
                      15+ mile sessions
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      4.2★
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Durability
                    </div>
                    <div className="text-xs text-gray-500">
                      After 400+ miles
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Weekly Training Pattern
              </h3>
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Easy Runs
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Tempo Runs
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-6 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Speed Work
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-3 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

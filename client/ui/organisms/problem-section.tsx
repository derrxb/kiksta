import { X, Check } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Most Shoe Reviews
            <span className="block text-red-600">Are Complete Garbage</span>
          </h2>
          <p className="text-xl text-gray-600">
            Here&apos;s the brutal truth about what you&apos;re dealing with on
            other review sites.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Problem Side */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center">
              <X className="h-8 w-8 text-red-600 mr-3" />
              <span>Other Review Sites</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Fake 5-star reviews
                  </div>
                  <div className="text-sm text-gray-600">
                    From bots and paid reviewers who never touched the shoes
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    &quot;Ran once around the block&quot;
                  </div>
                  <div className="text-sm text-gray-600">
                    Reviews from people with zero real-world testing
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    No way to verify
                  </div>
                  <div className="text-sm text-gray-600">
                    Anyone can claim anything with zero proof
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Sponsored garbage
                  </div>
                  <div className="text-sm text-gray-600">
                    Hidden ads disguised as honest reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-8 flex items-center">
              <Check className="h-8 w-8 text-green-600 mr-3" />
              <span>Kiksta Reviews</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Strava-verified miles
                  </div>
                  <div className="text-sm text-gray-600">
                    Every mile is tracked and verified through your GPS data
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    50+ miles minimum
                  </div>
                  <div className="text-sm text-gray-600">
                    You can&apos;t review until you&apos;ve actually used the
                    shoes
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Real runner profiles
                  </div>
                  <div className="text-sm text-gray-600">
                    See pace, distance, and training data for context
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Zero fake reviews
                  </div>
                  <div className="text-sm text-gray-600">
                    Impossible to fake when your data does the talking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Clock,
  ChevronRight,
  ArrowRight,
  Calculator,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";
import { MobileNav } from "@/client/ui/molecules/mobile-nav";
import { Button } from "@/client/ui/atoms/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 flex-1 px-4 md:px-8 lg:px-16">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 text-rose-500">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path
                  d="M2 20h4l1-2h10l1 2h4v-2l-2-4-1-2-1-2-1-2-1-2-1-2h-8l-1 2-1 2-1 2-1 2-1 2-2 4v2z"
                  opacity="0.3"
                />
                <path d="M12 2l6 8h-3l-3-4-3 4H6l6-8z" />
                <path d="M8 18l1-2h6l1 2H8z" />
                <path d="M7 16l1-2h8l1 2H7z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight">ZELO</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              href="#calculator"
              className="text-sm font-bold tracking-wide transition-colors hover:text-rose-500 uppercase"
            >
              Pace Calculator
            </Link>
            <Link
              href="#instagram"
              className="text-sm font-bold tracking-wide transition-colors hover:text-rose-500 uppercase"
            >
              Story Generator
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-rose-600 hover:bg-rose-700 font-bold"
            >
              <Link href="#get-started">START NOW</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 md:px-8 lg:px-16 mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-16 md:py-20 lg:py-32 text-white">
          <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none">
                  <span className="block">PUSH YOUR</span>
                  <span className="block text-rose-500">LIMITS</span>
                  <span className="block text-rose-500">EVERY DAY</span>
                </h1>
                <div className="h-1 w-24 bg-rose-500 mx-auto lg:mx-0"></div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-300 max-w-[600px] mx-auto lg:mx-0">
                Whether you&apos;re chasing a 5K PR or conquering your first
                mile, you showed up when others made excuses. Now let&apos;s
                turn that dedication into data and stories that inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 font-black text-lg px-8 py-4 h-auto"
                >
                  CALCULATE PACE <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-black font-bold text-lg px-8 py-4 h-auto"
                >
                  CREATE STORY <Instagram className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-zinc-800">
                <Image
                  src="/brian-erickson-unsplash-trail-running-compressed.jpg?height=500&width=600"
                  alt="Runner pushing their limits"
                  fill
                  className="object-cover grayscale-[30%] contrast-125"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-black p-4 rounded-lg shadow-xl border-2 border-rose-500">
                <div className="flex items-center gap-2 text-rose-500">
                  <Clock className="h-5 w-5" />
                  <span className="font-black text-xl">4:45</span>
                  <span className="text-sm font-bold text-rose-400">/km</span>
                </div>
                <div className="text-xs text-rose-300 font-medium">
                  Beast mode: ON
                </div>
              </div>
            </div>
          </div>

          <div className="container relative z-10 mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 py-8 border-t border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-rose-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-black text-xl mb-2 text-white">
                  PRECISION PACING
                </h3>
                <p className="text-zinc-400 font-medium">
                  Know exactly what you&apos;re capable of. No guessing games.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-rose-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Instagram className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-black text-xl mb-2 text-white">
                  STORY DOMINATION
                </h3>
                <p className="text-zinc-400 font-medium">
                  Turn your grind into content that makes others want to run.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-rose-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-black text-xl mb-2 text-white">
                  RELENTLESS PROGRESS
                </h3>
                <p className="text-zinc-400 font-medium">
                  Track every gain. Celebrate every breakthrough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 lg:py-24 bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="block">BUILT FOR</span>
                <span className="text-rose-500">ACHIEVERS</span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-[800px] mx-auto font-medium">
                From weekend warriors to elite athletes. Every pace has
                potential. Every goal deserves the right tools.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-black p-8 lg:p-10 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-zinc-800">
                <div className="h-16 w-16 bg-rose-600 rounded-xl flex items-center justify-center mb-8 shadow-lg">
                  <Calculator className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-black mb-4 tracking-tight">
                  PACE CALCULATOR
                </h3>
                <p className="text-zinc-300 mb-6 text-lg font-medium">
                  Input your current pace and get the real deal on what you can
                  achieve. Whether you&apos;re running 5-minute miles or taking
                  it steady, we&apos;ll show you exactly what&apos;s possible.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">
                      Instant, accurate race time predictions
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">
                      Trail & road specific calculations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">No fluff, just results</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="font-black text-black bg-rose-500 hover:bg-rose-600"
                >
                  GET THE TRUTH <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-black p-8 lg:p-10 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-zinc-800">
                <div className="h-16 w-16 bg-rose-600 rounded-xl flex items-center justify-center mb-8 shadow-lg">
                  <Instagram className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-black mb-4 tracking-tight">
                  STORY GENERATOR
                </h3>
                <p className="text-zinc-300 mb-6 text-lg font-medium">
                  Turn every run into social gold. Create Instagram stories that
                  showcase your dedication and inspire others to stop scrolling
                  and start moving.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">
                      Templates that make your runs look epic
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">
                      Show off your stats with style
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-rose-500" />
                    <span className="font-bold">
                      One-tap sharing to flex your grind
                    </span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="font-black text-black bg-rose-500 hover:bg-rose-600"
                >
                  FLEX YOUR RUNS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pace Calculator Section */}
        <section id="calculator" className="py-20 lg:py-32 bg-black text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] opacity-5"></div>
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="md:w-1/2">
                <div className="inline-block bg-rose-600 text-black px-4 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-wide">
                  Pace Calculator
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
                  KNOW YOUR
                  <span className="block text-rose-500">POTENTIAL</span>
                </h2>
                <p className="text-zinc-300 mb-8 text-lg font-medium leading-relaxed">
                  Input your current pace and get straight facts about what you
                  can achieve. No sugar-coating, no false hope. Just data that
                  helps you set real goals and crush them.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-rose-600 p-2 rounded-lg">
                      <Target className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-rose-500">
                        HONEST PREDICTIONS
                      </h4>
                      <p className="text-zinc-400 font-medium">
                        Get race time estimates based on real performance data,
                        not wishful thinking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-rose-600 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-rose-500">
                        ALL DISTANCES
                      </h4>
                      <p className="text-zinc-400 font-medium">
                        From 5K sprints to ultra marathons. Every distance,
                        every challenge covered.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-rose-600 hover:bg-rose-700 font-black text-lg px-8 py-4 h-auto">
                  GET THE FACTS <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="md:w-1/2">
                <div className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-2xl shadow-2xl">
                  <div className="space-y-6">
                    <div>
                      <label className="text-rose-500 font-black mb-3 block uppercase tracking-wide">
                        Your Current Pace
                      </label>
                      <div className="flex gap-3">
                        <div className="flex">
                          <input
                            type="text"
                            value="5"
                            className="w-16 rounded-l-md border-2 border-rose-500 border-r-0 px-3 py-3 text-center bg-black text-white font-black text-lg"
                            readOnly
                          />
                          <span className="inline-flex items-center border-2 border-rose-500 border-l-0 border-r-0 bg-rose-500 px-3 py-3 text-black font-black">
                            :
                          </span>
                          <input
                            type="text"
                            value="15"
                            className="w-16 rounded-r-md border-2 border-rose-500 border-l-0 px-3 py-3 text-center bg-black text-white font-black text-lg"
                            readOnly
                          />
                        </div>
                        <span className="inline-flex items-center rounded-md border-2 border-rose-500 bg-rose-500 px-4 py-3 text-black font-black">
                          /km
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-rose-600 hover:bg-rose-700 font-black text-lg py-4 h-auto">
                      SHOW ME THE TRUTH
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-black text-rose-500 uppercase tracking-wide">
                        YOUR RACE PREDICTIONS
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-zinc-800">
                          <span className="font-black text-white">5K</span>
                          <span className="text-rose-500 font-black text-lg">
                            26:15
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-zinc-800">
                          <span className="font-black text-white">10K</span>
                          <span className="text-rose-500 font-black text-lg">
                            54:30
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-zinc-800">
                          <span className="font-black text-white">
                            Half Marathon
                          </span>
                          <span className="text-rose-500 font-black text-lg">
                            1:55:45
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-zinc-800">
                          <span className="font-black text-white">
                            Marathon
                          </span>
                          <span className="text-rose-500 font-black text-lg">
                            4:02:30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Story Generator Section */}
        <section id="instagram" className="py-20 lg:py-32 bg-zinc-900">
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
              <div className="md:w-1/2">
                <div className="bg-black rounded-2xl shadow-2xl overflow-hidden max-w-[320px] mx-auto border-4 border-zinc-800">
                  {/* Instagram Story Mockup */}
                  <div className="relative">
                    {/* Story header */}
                    <div className="absolute top-4 left-4 right-4 z-10">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-rose-500 p-0.5">
                          <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-xs font-bold">🔥</span>
                          </div>
                        </div>
                        <span className="text-white text-sm font-black drop-shadow-lg">
                          beast_runner
                        </span>
                      </div>
                    </div>

                    {/* Story background */}
                    <div className="h-[520px] bg-black relative">
                      <Image
                        src="/placeholder.svg?height=520&width=320"
                        alt="Epic run achievement"
                        fill
                        className="object-cover opacity-40 grayscale-[30%] contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                      {/* Story content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-8 text-center border-2 border-zinc-800">
                          <h3 className="text-3xl font-black mb-6 tracking-tight">
                            CRUSHED IT! 🚀
                          </h3>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                              <div className="text-xs opacity-80 font-bold uppercase">
                                Distance
                              </div>
                              <div className="text-2xl font-black">10.5K</div>
                            </div>
                            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                              <div className="text-xs opacity-80 font-bold uppercase">
                                Time
                              </div>
                              <div className="text-2xl font-black">52:30</div>
                            </div>
                          </div>

                          <div className="bg-zinc-900 rounded-xl p-4 mb-6 border border-zinc-800">
                            <div className="text-xs opacity-80 font-bold uppercase">
                              Pace
                            </div>
                            <div className="text-3xl font-black text-rose-500">
                              5:00/KM
                            </div>
                          </div>

                          <p className="text-sm font-bold opacity-90">
                            When others quit, I keep going! 💪
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="inline-block bg-rose-600 text-black px-4 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-wide">
                  Story Generator
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
                  FLEX YOUR
                  <span className="block text-rose-500">VICTORIES</span>
                </h2>
                <p className="text-zinc-300 mb-8 text-lg font-medium leading-relaxed">
                  Turn your sweat sessions into social media gold. Create
                  Instagram stories that showcase your dedication and make your
                  followers want to lace up and chase your level.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-rose-600 p-2 rounded-lg">
                      <Instagram className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-rose-500">
                        STORY DOMINATION
                      </h4>
                      <p className="text-zinc-400 font-medium">
                        Templates designed to make your runs look as epic as
                        they felt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-rose-600 p-2 rounded-lg">
                      <Share2 className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-rose-500">
                        INSTANT FLEX
                      </h4>
                      <p className="text-zinc-400 font-medium">
                        Generate and share in seconds. No design skills, just
                        pure bragging rights.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-rose-600 hover:bg-rose-700 font-black text-lg px-8 py-4 h-auto">
                  CREATE EPIC STORIES <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="py-20 lg:py-32 bg-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] opacity-5"></div>
          <div className="container">
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden border-2 border-zinc-800">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] opacity-5"></div>
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                  <span className="block">STOP MAKING</span>
                  <span className="text-rose-500">EXCUSES</span>
                </h2>
                <p className="text-zinc-300 mb-10 text-xl font-medium max-w-2xl mx-auto">
                  Join runners who turn dedication into data and progress into
                  stories. Calculate your potential. Share your grind. Own your
                  results.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-black text-xl px-10 py-5 h-auto bg-rose-600 hover:bg-rose-500 text-black"
                  >
                    START DOMINATING
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-black font-black text-xl px-10 py-5 h-auto"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-12 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 text-rose-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      d="M2 20h4l1-2h10l1 2h4v-2l-2-4-1-2-1-2-1-2-1-2-1-2h-8l-1 2-1 2-1 2-1 2-1 2-2 4v2z"
                      opacity="0.3"
                    />
                    <path d="M12 2l6 8h-3l-3-4-3 4H6l6-8z" />
                    <path d="M8 18l1-2h6l1 2H8z" />
                    <path d="M7 16l1-2h8l1 2H7z" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-tight">ZELO</span>
              </div>
              <p className="text-zinc-500 mb-4 font-medium">
                For runners who refuse to settle.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black mb-3 text-rose-500 uppercase tracking-wide">
                Tools
              </h3>
              <ul className="space-y-2 text-zinc-500 font-medium">
                <li>
                  <Link
                    href="#calculator"
                    className="hover:text-rose-500 transition-colors"
                  >
                    Pace Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="#instagram"
                    className="hover:text-rose-500 transition-colors"
                  >
                    Story Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-rose-500 transition-colors"
                  >
                    Training Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-rose-500 transition-colors"
                  >
                    Running Log
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
            <p className="text-zinc-500 font-medium">
              © {new Date().getFullYear()} ZELO. Built for achievers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

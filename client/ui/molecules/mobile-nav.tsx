"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../atoms/button";
import { Sheet, SheetContent, SheetTrigger } from "../atoms/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-black text-white border-zinc-800"
      >
        <nav className="flex flex-col gap-6 mt-8">
          <Link
            href="#calculator"
            className="text-lg font-black tracking-wide transition-colors hover:text-rose-500 uppercase"
            onClick={() => setOpen(false)}
          >
            Pace Calculator
          </Link>
          <Link
            href="#instagram"
            className="text-lg font-black tracking-wide transition-colors hover:text-rose-500 uppercase"
            onClick={() => setOpen(false)}
          >
            Story Generator
          </Link>
          <Button
            asChild
            className="mt-4 bg-rose-600 hover:bg-rose-700 font-black"
          >
            <Link href="#get-started" onClick={() => setOpen(false)}>
              START NOW
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

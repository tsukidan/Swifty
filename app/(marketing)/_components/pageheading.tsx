"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PageHeading = () => 
{
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md: text-6xl font-bold">Your Ideas, Notes, and Tasks, Organized Effortlessly. Welcome to <span className="underline">Swifty </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Swifty is the connected workspace where <br />
                better, faster work happens.
            </h3>
            <Button>
                Enter Swifty
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}
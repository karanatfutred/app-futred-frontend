"use client";

import { BookOpen, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { currentModule, currentStack } from "../../data/dashboard";

function DashboardHeader() {
  return (
    <div className="bg-white rounded-lg p-6 border shadow-sm text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold">Welcome back, John!</h1>
          <p className="text-sm text-black/80 mt-1">
            You're in Week 2 of your 12-week learning journey
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
            <span className="text-sm font-medium text-black">
              On track with your learning goals
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <Badge className="bg-brand-yellow text-brand-midnight font-medium px-3 py-1 border-0">
            <BookOpen className="h-3.5 w-3.5 mr-1" />
            {currentModule.completedModules} of {currentModule.totalModules}{" "}
            modules completed
          </Badge>
          <Badge className="bg-brand-midnight text-white font-medium px-3 py-1 border-0">
            <Layers className="h-3.5 w-3.5 mr-1" />
            Sprint {currentStack.currentSprintNumber} of{" "}
            {currentStack.totalSprints}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;

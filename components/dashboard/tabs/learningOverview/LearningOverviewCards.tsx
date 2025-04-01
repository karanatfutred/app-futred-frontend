"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currentModule } from "@/data/dashboard";

export function CurrentLearningModuleCard() {
  return (
    <Card className="learning-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="learning-icon-bg p-1.5 rounded-full">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">
                Current Learning Module
              </CardTitle>
              <CardDescription>Your active learning focus</CardDescription>
            </div>
          </div>
          <Badge className="learning-badge">{currentModule.progress}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{currentModule.name}</h3>
          <div className="flex items-center justify-between text-sm mt-2">
            <span>Overall Progress</span>
            <span className="font-medium">{currentModule.progress}%</span>
          </div>
          <Progress
            value={currentModule.progress}
            className="h-2 mt-1 bg-gray-100"
          >
            <div
              className="h-full bg-brand-yellow rounded-full"
              style={{ width: `${currentModule.progress}%` }}
            ></div>
          </Progress>
        </div>

        <div className="bg-brand-yellow/5 p-3 rounded-md">
          <div className="text-sm font-medium">
            Current Unit: {currentModule.currentUnit}
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">Unit Progress</span>
            <span className="font-medium">{currentModule.unitProgress}%</span>
          </div>
          <Progress
            value={currentModule.unitProgress}
            className="h-2 mt-1 bg-gray-100"
          >
            <div
              className="h-full bg-brand-yellow rounded-full"
              style={{ width: `${currentModule.unitProgress}%` }}
            ></div>
          </Progress>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
            <Clock className="h-3.5 w-3.5" />
            <span>Est. completion: May 10, 2025</span>
          </div>
        </div>

        <Button
          className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight"
          asChild
        >
          <Link href="https://example.com/javascript-course">
            Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
export function CurrentIndustrySprintCard() {
  return (
    <Card className="learning-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="learning-icon-bg p-1.5 rounded-full">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">
                Current Learning Module
              </CardTitle>
              <CardDescription>Your active learning focus</CardDescription>
            </div>
          </div>
          <Badge className="learning-badge">{currentModule.progress}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{currentModule.name}</h3>
          <div className="flex items-center justify-between text-sm mt-2">
            <span>Overall Progress</span>
            <span className="font-medium">{currentModule.progress}%</span>
          </div>
          <Progress
            value={currentModule.progress}
            className="h-2 mt-1 bg-gray-100"
          >
            <div
              className="h-full bg-brand-yellow rounded-full"
              style={{ width: `${currentModule.progress}%` }}
            ></div>
          </Progress>
        </div>

        <div className="bg-brand-yellow/5 p-3 rounded-md">
          <div className="text-sm font-medium">
            Current Unit: {currentModule.currentUnit}
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">Unit Progress</span>
            <span className="font-medium">{currentModule.unitProgress}%</span>
          </div>
          <Progress
            value={currentModule.unitProgress}
            className="h-2 mt-1 bg-gray-100"
          >
            <div
              className="h-full bg-brand-yellow rounded-full"
              style={{ width: `${currentModule.unitProgress}%` }}
            ></div>
          </Progress>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
            <Clock className="h-3.5 w-3.5" />
            <span>Est. completion: May 10, 2025</span>
          </div>
        </div>

        <Button
          className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight"
          asChild
        >
          <Link href="https://example.com/javascript-course">
            Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

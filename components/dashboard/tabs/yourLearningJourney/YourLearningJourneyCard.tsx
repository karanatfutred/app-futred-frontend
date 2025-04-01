"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { journeyMilestones } from "@/data/dashboard";

function YourLearningJourneyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Learning Journey</CardTitle>
        <CardDescription>
          Track your progress through the learning path
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex items-start gap-4 relative"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center z-10 mt-0.5
                        ${
                          milestone.status === "completed"
                            ? "bg-brand-yellow text-brand-midnight"
                            : milestone.status === "in-progress"
                            ? "bg-brand-midnight text-white"
                            : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                >
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-medium ${
                        milestone.status === "completed"
                          ? "text-brand-yellow"
                          : milestone.status === "in-progress"
                          ? "text-brand-midnight"
                          : "text-gray-500"
                      }`}
                    >
                      {milestone.title}
                    </h3>
                    {milestone.status === "completed" && (
                      <Badge className="learning-badge">Completed</Badge>
                    )}
                    {milestone.status === "in-progress" && (
                      <Badge className="industry-badge">In Progress</Badge>
                    )}
                    {milestone.status === "upcoming" && (
                      <Badge className="bg-gray-100 text-gray-800">
                        Upcoming
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.date}
                  </p>

                  {milestone.status === "in-progress" && (
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-1.5 bg-gray-100">
                        <div
                          className="h-full bg-brand-midnight rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </Progress>
                      <div className="flex items-center gap-2 text-xs text-brand-midnight mt-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>
                          Next: Complete JavaScript Assignment (Due Today)
                        </span>
                      </div>
                    </div>
                  )}

                  {index < journeyMilestones.length - 1 && (
                    <div className="border-b border-dashed my-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <h3 className="font-medium mb-2">Learning Path Alignment</h3>
          <div className="bg-brand-yellow/5 p-3 rounded-md">
            <div className="flex items-start gap-3">
              <div className="learning-icon-bg p-1.5 rounded-full mt-0.5">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-brand-midnight">
                  Your current learning modules are aligned with Sprint 1
                  objectives in Learning Stack 1.
                </p>
                <p className="text-sm text-brand-midnight/80 mt-1">
                  Completing JavaScript Fundamentals will prepare you for the
                  upcoming Sprint 2 tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default YourLearningJourneyCard;

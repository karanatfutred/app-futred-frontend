import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle,
  Award,
  ChevronRight,
  Users,
} from "lucide-react";

export function ActiveModulesCard() {
  return (
    <Link href="/learning" className="block">
      <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-yellow hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="learning-icon-bg p-1.5 rounded-full">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Active Modules</span>
            </div>
            <div className="text-2xl font-bold">3</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">
                View all modules
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
export function CompletedTasksCard() {
  return (
    <Link href="/progress" className="block">
      <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-midnight hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="industry-icon-bg p-1.5 rounded-full">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Completed Tasks</span>
            </div>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">
                View your progress
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
export function TeamProgressCard() {
  return (
    <Link href="/team-chat" className="block">
      <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-midnight hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="industry-icon-bg p-1.5 rounded-full">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Team Progress</span>
            </div>
            <div className="text-2xl font-bold">78%</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">
                View team activity
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
export function AchievementsCard() {
  return (
    <Link href="/achievements" className="block">
      <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-yellow hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="learning-icon-bg p-1.5 rounded-full">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Achievements</span>
            </div>
            <div className="text-2xl font-bold">5</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">
                View your achievements
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

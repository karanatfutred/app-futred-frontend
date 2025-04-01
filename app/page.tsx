"use client";

import { Calendar, Zap, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  ActiveModulesCard,
  CompletedTasksCard,
  AchievementsCard,
  TeamProgressCard,
} from "@/components/dashboard/tabs/learningOverview/StatsCards";
import ComingUpNextSection from "@/components/dashboard/tabs/learningOverview/ComingUpNextSection";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  CurrentIndustrySprintCard,
  CurrentLearningModuleCard,
} from "@/components/dashboard/tabs/learningOverview/LearningOverviewCards";
import YourLearningJourneyCard from "@/components/dashboard/tabs/yourLearningJourney/YourLearningJourneyCard";
import EventCalendar from "@/components/dashboard/tabs/eventCalendar/EventCalendar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Welcome header with journey context */}
      <DashboardHeader />

      {/* Main dashboard tabs */}
      <Tabs
        defaultValue={activeTab}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">
            <Zap className="h-4 w-4 mr-2" />
            Learning Overview
          </TabsTrigger>
          <TabsTrigger value="journey">
            <Target className="h-4 w-4 mr-2" />
            Learning Journey
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Event Calendar
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="space-y-6">
          {/* Current progress cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Learning Module */}
            <CurrentLearningModuleCard />
            {/* Current Sprint */}
            <CurrentIndustrySprintCard />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ActiveModulesCard />
            <CompletedTasksCard />
            <TeamProgressCard />
            <AchievementsCard />
          </div>
          {/* Next up section */}
          <ComingUpNextSection setActiveTab={setActiveTab} />
        </TabsContent>

        {/* Learning Journey Tab Content */}
        <TabsContent value="journey" className="space-y-6">
          <YourLearningJourneyCard />

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("overview")}>
              Back to Overview
            </Button>
            <Button variant="outline" onClick={() => setActiveTab("calendar")}>
              View Calendar
            </Button>
          </div>
        </TabsContent>

        {/* Calendar Tab Content */}
        <TabsContent value="calendar" className="space-y-6">
          <EventCalendar />

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("overview")}>
              Back to Overview
            </Button>
            <Link href="/learning">
              <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight">
                Go to Learning Modules
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

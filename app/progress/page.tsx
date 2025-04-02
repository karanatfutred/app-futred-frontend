import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Calendar, Target, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import YourLearningJourney from "@/components/progress/tabs/learningJourney/YourLearningJourney";
import LearningAndIndustryStackProgress from "@/components/progress/tabs/overview/LearningAndIndustryStackProgress";
import WeeklyActivityAndUpcomingDeadlines from "@/components/progress/tabs/overview/WeeklyActivityAndUpcomingDeadlines";
import SkillLevels from "@/components/progress/tabs/learning/SkillLevels";
import { LearningAchievements } from "@/components/progress/tabs/learning/LearningAchievements";
import CourseCompletion from "@/components/progress/tabs/learning/CourseCompletion";
import LearningStacks from "@/components/progress/tabs/industryStack/LearningStacks";
import IndustrySkillProgress from "@/components/progress/tabs/industryStack/IndustrySkillProgress";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Your Progress</h1>
          <p className="text-muted-foreground">
            Track your learning journey and skill development
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">Week 2 of 12</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-md">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">On Track</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="industry">Industry Stack</TabsTrigger>
          <TabsTrigger value="journey">Learning Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <LearningAndIndustryStackProgress />
          <WeeklyActivityAndUpcomingDeadlines />
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <SkillLevels />
          <LearningAchievements />
          <CourseCompletion />
        </TabsContent>

        <TabsContent value="industry" className="space-y-6">
          <LearningStacks />
          <IndustrySkillProgress />
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <YourLearningJourney />

          <div className="flex justify-between mt-4">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Download Progress Report
            </Button>
            <Button>
              <Target className="mr-2 h-4 w-4" />
              Set New Learning Goals
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

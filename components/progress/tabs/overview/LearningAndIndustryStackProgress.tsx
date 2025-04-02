import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Layers, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function LearningAndIndustryStackProgress() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-yellow-500" />
            Learning Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Completion</span>
              <span className="font-medium">55%</span>
            </div>
            <Progress value={55} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground">
            4 of 8 modules completed
          </div>
          <Link
            href="/learning"
            className="text-sm text-blue-600 hover:underline"
          >
            View Learning Modules →
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Layers className="h-4 w-4 text-blue-500" />
            Industry Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current Progress</span>
              <span className="font-medium">35%</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground">
            Sprint 1 of 3 in progress
          </div>
          <Link
            href="/industry-stack"
            className="text-sm text-blue-600 hover:underline"
          >
            View Industry Stack →
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Earned</span>
            <Badge variant="outline">2 of 10</Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <Award className="h-4 w-4 text-amber-500" />
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <Award className="h-4 w-4 text-amber-500" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Award className="h-4 w-4 text-gray-400" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Award className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LearningAndIndustryStackProgress;

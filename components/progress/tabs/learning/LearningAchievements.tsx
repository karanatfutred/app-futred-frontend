import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "lucide-react";
import { courses } from "@/data/progress";

export function LearningAchievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2">
          <BarChart className="h-5 w-5 text-yellow-500" />
          Course Completion
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{course.name}</span>
                <span>{course.completed}%</span>
              </div>
              <Progress value={course.completed} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>
                  Units: {course.completedUnits}/{course.totalUnits}
                </span>
                <span>Due: {course.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

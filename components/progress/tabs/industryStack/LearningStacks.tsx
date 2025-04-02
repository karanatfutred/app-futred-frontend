import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { learningStacks } from "@/data/progress";

function LearningStacks() {
  return (
    <>
      {learningStacks.map((stack) => (
        <Card key={stack.id} className="overflow-hidden">
          <CardHeader className="bg-gray-50 pb-2">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-500" />
                {stack.title}
              </div>
              <Badge
                variant="outline"
                className={stack.progress > 0 ? "bg-blue-50 text-blue-700" : ""}
              >
                {stack.progress > 0 ? "In Progress" : "Not Started"}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{stack.description}</p>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span className="font-medium">{stack.progress}%</span>
                </div>
                <Progress value={stack.progress} className="h-2" />
              </div>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  Timeline: {stack.startDate} - {stack.endDate}
                </span>
                <span>Duration: 6 weeks</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Sprint Progress</h4>
                {stack.sprints.map((sprint) => (
                  <div key={sprint.id} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            sprint.status === "In Progress"
                              ? "bg-green-500"
                              : sprint.status === "Completed"
                              ? "bg-blue-500"
                              : "bg-gray-300"
                          }`}
                        />
                        <span>{sprint.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{sprint.progress}%</span>
                        <Badge
                          variant="outline"
                          className={
                            sprint.status === "In Progress"
                              ? "bg-green-50 text-green-700"
                              : sprint.status === "Completed"
                              ? "bg-blue-50 text-blue-700"
                              : ""
                          }
                        >
                          {sprint.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={sprint.progress} className="h-1.5" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Tasks: {sprint.completedTasks}/{sprint.tasks}
                      </span>
                      <span>
                        {sprint.startDate} - {sprint.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {stack.progress > 0 && (
                <Link
                  href={`/industry-stack/stack/${stack.id}`}
                  className="text-sm text-blue-600 hover:underline block mt-2"
                >
                  View Stack Details →
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default LearningStacks;

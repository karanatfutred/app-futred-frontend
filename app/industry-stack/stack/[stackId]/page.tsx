import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  Users,
  FileText,
  Code,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { EnhancedGanttChart } from "@/components/enhanced-gantt-chart";
import { Badge } from "@/components/ui/badge";
import { getStackData } from "@/data/industryStack";

interface LearningStackPageProps {
  params: {
    stackId: string;
  };
}

export default function LearningStackPage({ params }: LearningStackPageProps) {
  const { stackId } = params;
  const stackData = getStackData(stackId);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{stackData.title}</h1>
          <p className="text-muted-foreground mt-1">{stackData.description}</p>
        </div>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 text-sm">
          Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Start Date:</span>
              <span className="font-medium">{stackData.startDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">End Date:</span>
              <span className="font-medium">{stackData.endDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">6 weeks</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {stackData.team.map((member, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">
                    {member
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-500" />
              Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Completion</span>
                <span className="font-medium">{stackData.progress}%</span>
              </div>
              <Progress value={stackData.progress} className="h-2" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-blue-50 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stackData.sprints.length}
                </div>
                <div className="text-xs text-muted-foreground">Sprints</div>
              </div>
              <div className="bg-blue-50 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stackData.sprints.reduce(
                    (acc, sprint) => acc + sprint.tasks,
                    0
                  )}
                </div>
                <div className="text-xs text-muted-foreground">Tasks</div>
              </div>
              <div className="bg-blue-50 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stackData.sprints.reduce(
                    (acc, sprint) => acc + sprint.completedTasks,
                    0
                  )}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {stackData.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700 mt-0.5">
                  {index + 1}
                </div>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-500" />
          Sprint Timeline
        </h2>
        <Card className="p-4">
          <EnhancedGanttChart sprints={stackData.sprints} stackId={stackId} />
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Sprints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackData.sprints.map((sprint, index) => (
            <Card key={sprint.id} className="border-t-4 border-t-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center text-lg">
                  <span>{sprint.title}</span>
                  {sprint.status === "In Progress" ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      In Progress
                    </Badge>
                  ) : sprint.status === "Completed" ? (
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      Completed
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                      Not Started
                    </Badge>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {sprint.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{sprint.startDate}</span>
                  </div>
                  <ArrowRight className="h-3 w-3" />
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{sprint.endDate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{sprint.progress}%</span>
                  </div>
                  <Progress value={sprint.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-muted-foreground">Total Tasks</span>
                    <p className="font-medium">{sprint.tasks}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground">Completed</span>
                    <p className="font-medium">{sprint.completedTasks}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Sprint Goals:</div>
                  <ul className="space-y-1 text-sm pl-1">
                    {sprint.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-medium text-blue-700 mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {sprint.status === "In Progress" && (
                  <Link
                    href={`/industry-stack/stack/${stackId}/sprint/${sprint.id}`}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Go to Sprint Board
                    </Button>
                  </Link>
                )}

                {sprint.status === "Not Started" && (
                  <Button className="w-full" variant="outline" disabled>
                    Locked
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6 pt-6 border-t">
        <Link href="/industry-stack">
          <Button variant="outline">Back to Industry Stack</Button>
        </Link>
        <Link href={`/industry-stack/stack/${stackId}/sprint/sprint1`}>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Go to Current Sprint
          </Button>
        </Link>
      </div>
    </div>
  );
}

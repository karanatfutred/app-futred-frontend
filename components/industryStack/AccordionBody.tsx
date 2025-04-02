"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  Users,
  FileText,
  Layers,
  Code,
  CheckCircle,
  Target,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { EnhancedGanttChart } from "@/components/enhanced-gantt-chart";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AccordionBody({ stack }) {
  return (
    <div className="p-4 space-y-6">
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
              <span className="font-medium">{stack.startDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">End Date:</span>
              <span className="font-medium">{stack.endDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">6 weeks</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">Current Phase:</span>
              <Badge
                className={
                  stack.active
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }
              >
                {stack.active ? "Sprint 1" : "Not Started"}
              </Badge>
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
              {stack.team.map((member, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-midnight/10 flex items-center justify-center text-xs font-medium text-brand-midnight">
                      {member
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span>{member}</span>
                  </div>
                  {stack.teamRoles && (
                    <Badge variant="outline" className="text-xs">
                      {stack.teamRoles[index]}
                    </Badge>
                  )}
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
                <span className="font-medium">{stack.progress}%</span>
              </div>
              <Progress value={stack.progress} className="h-2" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-brand-midnight/10 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stack.sprints.length}
                </div>
                <div className="text-xs text-muted-foreground">Sprints</div>
              </div>
              <div className="bg-brand-midnight/10 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stack.sprints.reduce((acc, sprint) => acc + sprint.tasks, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Tasks</div>
              </div>
              <div className="bg-brand-midnight/10 p-2 rounded-md">
                <div className="text-lg font-medium">
                  {stack.sprints.reduce(
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

      {/* Technology Stack Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Core Technologies</h3>
              {stack.technologies &&
                stack.technologies.map((tech, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                      <span className="text-sm font-medium">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <Progress value={tech.proficiency} className="h-1.5" />
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Industry Alignment</h3>
              <p className="text-sm text-muted-foreground">
                {stack.industryAlignment}
              </p>

              <h3 className="text-sm font-medium mt-4">Career Paths</h3>
              <div className="flex flex-wrap gap-2">
                {stack.careerPaths &&
                  stack.careerPaths.map((path, index) => (
                    <Badge key={index} className="bg-blue-50 text-blue-800">
                      {path}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {stack.id !== "ls1" && stack.objectives && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {stack.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-midnight/10 flex items-center justify-center text-xs font-medium text-brand-midnight mt-0.5">
                    {index + 1}
                  </div>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-500" />
          Sprint Timeline
        </h2>
        <Card className="p-4">
          <EnhancedGanttChart sprints={stack.sprints} stackId={stack.id} />
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Sprints</h2>
        <Tabs defaultValue="sprint1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            {stack.sprints.map((sprint) => (
              <TabsTrigger
                key={sprint.id}
                value={sprint.id}
                disabled={!stack.active && sprint.status !== "In Progress"}
              >
                {sprint.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {stack.sprints.map((sprint) => (
            <TabsContent
              key={sprint.id}
              value={sprint.id}
              className="border rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{sprint.title}</h3>
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
                  </div>
                  <p className="text-muted-foreground mt-1">
                    {sprint.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground my-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{sprint.startDate}</span>
                </div>
                <ArrowRight className="h-4 w-4" />
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{sprint.endDate}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{sprint.progress}%</span>
                </div>
                <Progress value={sprint.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="space-y-1">
                  <span className="text-muted-foreground">Total Tasks</span>
                  <p className="font-medium">{sprint.tasks}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground">Completed</span>
                  <p className="font-medium">{sprint.completedTasks}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Sprint Goals:</div>
                  <ul className="space-y-2">
                    {sprint.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="min-w-5 h-5 rounded-full bg-brand-midnight/10 flex items-center justify-center text-xs font-medium text-brand-midnight mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Deliverables:</div>
                  <ul className="space-y-2">
                    {sprint.keyDeliverables &&
                      sprint.keyDeliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="min-w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium text-green-700 mt-0.5">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {sprint.learningResources && (
                <div className="space-y-2 mb-6 bg-blue-50 p-3 rounded-md">
                  <div className="text-sm font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    Learning Resources:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sprint.learningResources.map((resource, idx) => (
                      <TooltipProvider key={idx}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="outline"
                              className="bg-white cursor-pointer"
                            >
                              {resource}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Click to access resource</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}

              {sprint.status === "In Progress" && stack.active ? (
                <Link
                  href={`/industry-stack/stack/${stack.id}/sprint/${sprint.id}`}
                >
                  <Button className="w-full bg-brand-midnight hover:bg-brand-midnight/90">
                    Go to Sprint Board
                  </Button>
                </Link>
              ) : (
                <Button className="w-full" variant="outline" disabled>
                  {sprint.status === "Completed" ? "Completed" : "Locked"}
                </Button>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {stack.active && (
        <div className="flex justify-end mt-6 pt-6 border-t">
          <Link href={`/industry-stack/stack/${stack.id}/sprint/sprint1`}>
            <Button className="bg-brand-midnight hover:bg-brand-midnight/90">
              Go to Current Sprint
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

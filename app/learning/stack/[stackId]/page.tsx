import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Check, Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { GanttChart } from "@/components/learning/gantt-chart"

interface LearningStackPageProps {
  params: {
    stackId: string
  }
}

export default function LearningStackPage({ params }: LearningStackPageProps) {
  const { stackId } = params

  // Sample data for Learning Stack 1
  const stackData = {
    id: stackId,
    title: `Learning Stack ${stackId.substring(2)}`,
    description: "Frontend Development Fundamentals",
    progress: 35,
    sprints: [
      {
        id: "sprint1",
        title: "Sprint 1",
        status: "In Progress",
        startDate: "May 1, 2025",
        endDate: "May 14, 2025",
        progress: 35,
        tasks: 12,
        completedTasks: 4,
      },
      {
        id: "sprint2",
        title: "Sprint 2",
        status: "Not Started",
        startDate: "May 15, 2025",
        endDate: "May 28, 2025",
        progress: 0,
        tasks: 15,
        completedTasks: 0,
      },
      {
        id: "sprint3",
        title: "Sprint 3",
        status: "Not Started",
        startDate: "May 29, 2025",
        endDate: "June 11, 2025",
        progress: 0,
        tasks: 18,
        completedTasks: 0,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{stackData.title}</h1>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <span>Active</span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">{stackData.description}</p>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm font-medium">Overall Progress</span>
        <Progress value={stackData.progress} className="h-2 flex-1" />
        <span className="text-sm font-medium">{stackData.progress}%</span>
      </div>

      <div className="border rounded-md p-4 bg-white">
        <h2 className="text-lg font-semibold mb-4">Gantt Timeline</h2>
        <GanttChart sprints={stackData.sprints} />
      </div>

      <h2 className="text-lg font-semibold pt-2">Sprints</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stackData.sprints.map((sprint, index) => (
          <Card key={sprint.id}>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center text-base">
                <span>{sprint.title}</span>
                {sprint.status === "In Progress" ? (
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    In Progress
                  </div>
                ) : sprint.status === "Completed" ? (
                  <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Completed
                  </div>
                ) : (
                  <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Not Started
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
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

              <div className="pt-1">
                <div className="text-sm text-muted-foreground">
                  Tasks: {sprint.completedTasks}/{sprint.tasks} completed
                </div>
              </div>

              {sprint.status === "In Progress" && (
                <Link href={`/learning/stack/${stackId}/sprint/${sprint.id}`}>
                  <Button className="w-full mt-2">Go to Sprint Board</Button>
                </Link>
              )}

              {sprint.status === "Not Started" && (
                <Button className="w-full mt-2" variant="outline" disabled>
                  Locked
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between mt-6 pt-6 border-t">
        <Link href="/learning">
          <Button variant="outline">Back to Learning</Button>
        </Link>
        <Link href={`/learning/stack/${stackId}/sprint/sprint1`}>
          <Button>Go to Current Sprint</Button>
        </Link>
      </div>
    </div>
  )
}


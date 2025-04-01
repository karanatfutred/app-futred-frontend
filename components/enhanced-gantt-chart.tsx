import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowRight, CheckCircle, Clock, AlertCircle, Users } from "lucide-react"

interface Sprint {
  id: string
  title: string
  status: string
  startDate: string
  endDate: string
  progress: number
  tasks?: number
  completedTasks?: number
  description?: string
  team?: string[]
  goals?: string[]
  keyDeliverables?: string[]
  learningResources?: string[]
}

interface EnhancedGanttChartProps {
  sprints: Sprint[]
  stackId?: string
}

export function EnhancedGanttChart({ sprints, stackId = "ls1" }: EnhancedGanttChartProps) {
  // Sample dates for visualizing the Gantt chart
  const totalDays = 42 // 6 weeks
  const startDate = new Date("2025-05-01")

  // Generate all dates for the timeline
  const allDates = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    return date
  })

  // Generate week labels
  const weekLabels = Array.from({ length: 6 }, (_, i) => {
    const weekStart = new Date(startDate)
    weekStart.setDate(weekStart.getDate() + i * 7)
    return {
      date: weekStart,
      label: `Week ${i + 1}`,
      subLabel: weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    }
  })

  // Generate month labels
  const monthLabels: { month: string; position: number }[] = []
  let currentMonth = -1

  allDates.forEach((date, index) => {
    const month = date.getMonth()
    if (month !== currentMonth) {
      currentMonth = month
      monthLabels.push({
        month: date.toLocaleDateString("en-US", { month: "long" }),
        position: (index / totalDays) * 100,
      })
    }
  })

  // Calculate positions for the sprints
  const sprintsWithPosition = sprints.map((sprint, index) => {
    // Each sprint is 2 weeks (14 days) for this example
    const startDay = index * 14
    const duration = 14

    return {
      ...sprint,
      startPosition: (startDay / totalDays) * 100,
      width: (duration / totalDays) * 100,
    }
  })

  // Calculate today's position (for example, 15% into the timeline)
  const todayPosition = 15

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-green-100 border-green-400 text-green-800"
      case "Completed":
        return "bg-blue-100 border-blue-400 text-blue-800"
      default:
        return "bg-gray-100 border-gray-400 text-gray-800"
    }
  }

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="h-3 w-3 text-green-600" />
      case "Completed":
        return <CheckCircle className="h-3 w-3 text-blue-600" />
      default:
        return <AlertCircle className="h-3 w-3 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Month and week labels */}
      <div className="relative h-6 border-b">
        {monthLabels.map((month, i) => (
          <div
            key={i}
            className="absolute top-0 text-sm font-medium text-gray-700"
            style={{ left: `${month.position}%` }}
          >
            {month.month}
          </div>
        ))}
      </div>

      {/* Week labels and grid */}
      <div className="relative">
        <div className="grid grid-cols-6 gap-0">
          {weekLabels.map((week, i) => (
            <div key={i} className="text-center">
              <div className="text-sm font-medium text-gray-700">{week.label}</div>
              <div className="text-xs text-muted-foreground">{week.subLabel}</div>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="h-[180px] relative border-t border-b grid grid-cols-6 mt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-gray-200">
              {i === 0 && <div className="absolute left-0 top-0 h-full border-l border-gray-200" />}
            </div>
          ))}

          {/* Today marker */}
          <div className="absolute top-0 h-full w-0.5 bg-red-500 z-10" style={{ left: `${todayPosition}%` }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-red-500 whitespace-nowrap">
              Today
            </div>
          </div>

          {/* Sprint bars */}
          <TooltipProvider>
            {sprintsWithPosition.map((sprint) => (
              <Tooltip key={sprint.id}>
                <TooltipTrigger asChild>
                  <div
                    className="absolute h-[160px] top-2 rounded-md cursor-pointer"
                    style={{
                      left: `${sprint.startPosition}%`,
                      width: `${sprint.width}%`,
                    }}
                  >
                    <div className={cn("h-full rounded-md flex flex-col p-3 border", getStatusColor(sprint.status))}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {getStatusIcon(sprint.status)}
                          <span className="font-medium text-sm">{sprint.title}</span>
                        </div>
                        <Badge
                          className={cn(
                            "text-xs",
                            sprint.status === "In Progress"
                              ? "bg-green-200 text-green-800"
                              : sprint.status === "Completed"
                                ? "bg-blue-200 text-blue-800"
                                : "bg-gray-200 text-gray-800",
                          )}
                        >
                          {sprint.status}
                        </Badge>
                      </div>

                      <div className="text-xs mb-2">{sprint.description || `Focus on ${sprint.title} objectives`}</div>

                      {sprint.progress !== undefined && (
                        <>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span>Progress:</span>
                            <span className="font-medium">{sprint.progress}%</span>
                          </div>

                          <div className="w-full bg-white rounded-full h-1.5 mb-2">
                            <div
                              className={cn(
                                "h-full rounded-full",
                                sprint.status === "In Progress"
                                  ? "bg-green-500"
                                  : sprint.status === "Completed"
                                    ? "bg-blue-500"
                                    : "bg-gray-400",
                              )}
                              style={{ width: `${sprint.progress}%` }}
                            ></div>
                          </div>
                        </>
                      )}

                      <div className="flex items-center justify-between text-xs mb-2">
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

                      {sprint.tasks !== undefined && sprint.completedTasks !== undefined && (
                        <div className="flex items-center justify-between text-xs">
                          <span>
                            Tasks: {sprint.completedTasks}/{sprint.tasks}
                          </span>
                          {sprint.status === "In Progress" && stackId && (
                            <Link href={`/industry-stack/stack/${stackId}/sprint/${sprint.id}`}>
                              <Button size="sm" variant="secondary" className="h-6 text-xs">
                                View Board
                              </Button>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="p-0 overflow-hidden max-w-xs">
                  <div className="p-3 space-y-2">
                    <div className="font-medium">{sprint.title}</div>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Status:</span>
                        <span
                          className={cn(
                            sprint.status === "In Progress"
                              ? "text-green-600"
                              : sprint.status === "Completed"
                                ? "text-blue-600"
                                : "text-gray-600",
                          )}
                        >
                          {sprint.status}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Period:</span>
                        <span>
                          {sprint.startDate} - {sprint.endDate}
                        </span>
                      </div>
                      {sprint.tasks !== undefined && sprint.completedTasks !== undefined && (
                        <div className="flex justify-between gap-4">
                          <span className="text-muted-foreground">Tasks:</span>
                          <span>
                            {sprint.completedTasks} of {sprint.tasks} completed
                          </span>
                        </div>
                      )}
                      {sprint.goals && sprint.goals.length > 0 && (
                        <div className="pt-1">
                          <span className="text-muted-foreground">Goals:</span>
                          <ul className="list-disc pl-4 pt-1 space-y-0.5">
                            {sprint.goals.slice(0, 3).map((goal, idx) => (
                              <li key={idx} className="text-xs">
                                {goal}
                              </li>
                            ))}
                            {sprint.goals.length > 3 && (
                              <li className="text-xs text-blue-600">+ {sprint.goals.length - 3} more</li>
                            )}
                          </ul>
                        </div>
                      )}
                      {sprint.keyDeliverables && sprint.keyDeliverables.length > 0 && (
                        <div className="pt-1">
                          <span className="text-muted-foreground">Deliverables:</span>
                          <ul className="list-disc pl-4 pt-1 space-y-0.5">
                            {sprint.keyDeliverables.slice(0, 2).map((deliverable, idx) => (
                              <li key={idx} className="text-xs">
                                {deliverable}
                              </li>
                            ))}
                            {sprint.keyDeliverables.length > 2 && (
                              <li className="text-xs text-blue-600">+ {sprint.keyDeliverables.length - 2} more</li>
                            )}
                          </ul>
                        </div>
                      )}
                      {sprint.team && sprint.team.length > 0 && (
                        <div className="pt-1 flex items-center gap-1">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{sprint.team.length} team members assigned</span>
                        </div>
                      )}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-sm pt-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-green-100 border border-green-400"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-blue-100 border border-blue-400"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-gray-100 border border-gray-400"></div>
          <span>Not Started</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-0.5 h-3 bg-red-500"></div>
          <span>Today</span>
        </div>
      </div>
    </div>
  )
}


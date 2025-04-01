import { Button } from "@/components/ui/button"
import Link from "next/link"
import { KanbanBoard } from "@/components/kanban-board"

interface SprintPageProps {
  params: {
    stackId: string
    sprintId: string
  }
}

export default function SprintPage({ params }: SprintPageProps) {
  const { stackId, sprintId } = params

  // Sample data for Sprint
  const sprintData = {
    id: sprintId,
    title: `Sprint ${sprintId.substring(6)}`,
    stackId: stackId,
    stackTitle: `Learning Stack ${stackId.substring(2)}`,
    description: "Master HTML, CSS and JavaScript fundamentals",
    startDate: "May 1, 2025",
    endDate: "May 14, 2025",
    progress: 35,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground mb-1">
            <Link href={`/industry-stack/stack/${stackId}`} className="hover:underline">
              {sprintData.stackTitle}
            </Link>
            {" / "}
            <span>{sprintData.title}</span>
          </div>
          <h1 className="text-2xl font-bold">{sprintData.title} Board</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="text-muted-foreground">Progress: </span>
            <span className="font-medium">{sprintData.progress}%</span>
          </div>
          <Button>Complete Task</Button>
        </div>
      </div>

      <p className="text-muted-foreground">{sprintData.description}</p>

      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-muted-foreground">Start Date: </span>
          <span className="font-medium">{sprintData.startDate}</span>
        </div>
        <div>
          <span className="text-muted-foreground">End Date: </span>
          <span className="font-medium">{sprintData.endDate}</span>
        </div>
      </div>

      <KanbanBoard />

      <div className="mt-6 pt-6 border-t">
        <Link href={`/industry-stack/stack/${stackId}`}>
          <Button variant="outline">Back to {sprintData.stackTitle}</Button>
        </Link>
      </div>
    </div>
  )
}


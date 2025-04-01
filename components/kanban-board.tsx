"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, Clock, CheckCircle, ExternalLink, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

type TaskStatus = "todo" | "in-progress" | "review" | "done"

interface SubTask {
  id: string
  title: string
  completed: boolean
  learningLink?: string
  learningTitle?: string
}

interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: "low" | "medium" | "high"
  dueDate?: string
  tags: string[]
  subtasks?: SubTask[]
}

interface TaskCardProps {
  task: Task
  getPriorityColor: (priority: Task["priority"]) => string
  onClick: () => void
}

function TaskCard({ task, getPriorityColor, onClick }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
    data: {
      task,
    },
  })

  if (isDragging) {
    return <div ref={setNodeRef} className="h-[120px] border-2 border-dashed border-gray-200 rounded-md opacity-40" />
  }

  return (
    <Card
      ref={setNodeRef}
      className="bg-white shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
      {...attributes}
      {...listeners}
      onClick={(e) => {
        // Prevent opening modal when clicking dropdown
        if (!(e.target as HTMLElement).closest("[data-dropdown]")) {
          onClick()
        }
      }}
    >
      <CardHeader className="p-3 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6" data-dropdown="true">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Move</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <p className="text-xs text-gray-500 mb-2">{task.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-1 py-0 h-5">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs">
          <Badge className={cn("font-normal", getPriorityColor(task.priority))}>{task.priority}</Badge>
          {task.dueDate && <span className="text-gray-500">Due: {task.dueDate}</span>}
        </div>

        {task.subtasks && task.subtasks.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Subtasks</span>
              <span>
                {task.subtasks.filter((st) => st.completed).length}/{task.subtasks.length}
              </span>
            </div>
            <Progress
              value={(task.subtasks.filter((st) => st.completed).length / task.subtasks.length) * 100}
              className="h-1 mt-1"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function DraggableOverlay({
  task,
  getPriorityColor,
}: { task: Task; getPriorityColor: (priority: Task["priority"]) => string }) {
  return (
    <Card className="bg-white shadow-md w-[calc(100%-1rem)] max-w-[250px] opacity-90 cursor-grabbing">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <p className="text-xs text-gray-500 mb-2">{task.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-1 py-0 h-5">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs">
          <Badge className={cn("font-normal", getPriorityColor(task.priority))}>{task.priority}</Badge>
          {task.dueDate && <span className="text-gray-500">Due: {task.dueDate}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

function TaskDetailModal({
  task,
  isOpen,
  onClose,
  onSubtaskToggle,
}: {
  task: Task | null
  isOpen: boolean
  onClose: () => void
  onSubtaskToggle: (taskId: string, subtaskId: string, completed: boolean) => void
}) {
  if (!task) return null

  const completedSubtasks = task.subtasks?.filter((st) => st.completed).length || 0
  const totalSubtasks = task.subtasks?.length || 0
  const progress = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">{task.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {task.status === "todo" && <Badge className="bg-gray-100 text-gray-800">To Do</Badge>}
            {task.status === "in-progress" && <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>}
            {task.status === "review" && <Badge className="bg-yellow-100 text-yellow-800">In Review</Badge>}
            {task.status === "done" && <Badge className="bg-green-100 text-green-800">Done</Badge>}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Description</h3>
            <p className="text-sm text-gray-700">{task.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Priority</h3>
              <Badge
                className={cn(
                  "font-normal",
                  task.priority === "high"
                    ? "bg-red-100 text-red-800"
                    : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800",
                )}
              >
                {task.priority}
              </Badge>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Due Date</h3>
              <p className="text-sm">{task.dueDate || "Not set"}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-1">
              {task.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {task.subtasks && task.subtasks.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">
                  Subtasks ({completedSubtasks}/{totalSubtasks})
                </h3>
                <span className="text-sm text-gray-500">{progress.toFixed(0)}% complete</span>
              </div>
              <Progress value={progress} className="h-2 mb-4" />

              <div className="space-y-3 border rounded-md p-4">
                {task.subtasks.map((subtask) => (
                  <div key={subtask.id} className="flex items-start gap-2">
                    <Checkbox
                      id={subtask.id}
                      checked={subtask.completed}
                      onCheckedChange={(checked) => {
                        // Ensure we're passing a boolean value
                        const isChecked = checked === true
                        onSubtaskToggle(task.id, subtask.id, isChecked)
                      }}
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor={subtask.id}
                        className={cn(
                          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                          subtask.completed && "line-through text-gray-500",
                        )}
                      >
                        {subtask.title}
                      </label>

                      {subtask.learningLink && (
                        <div className="flex items-center gap-1 mt-1">
                          <Link
                            href={subtask.learningLink}
                            className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {subtask.learningTitle || "View learning content"}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Edit Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function KanbanBoard() {
  // Sample tasks data with subtasks
  const initialTasks: Task[] = [
    {
      id: "task-1",
      title: "Learn HTML Basics",
      description: "Study the fundamental HTML tags and structure",
      status: "done",
      priority: "high",
      dueDate: "Apr 28, 2025",
      tags: ["html", "basics"],
      subtasks: [
        { id: "subtask-1-1", title: "HTML Document Structure", completed: true },
        { id: "subtask-1-2", title: "Semantic HTML Elements", completed: true },
        {
          id: "subtask-1-3",
          title: "Forms and Input Elements",
          completed: true,
          learningLink: "/learning",
          learningTitle: "HTML Forms Tutorial",
        },
      ],
    },
    {
      id: "task-2",
      title: "CSS Styling",
      description: "Learn about CSS selectors and properties",
      status: "done",
      priority: "high",
      dueDate: "Apr 30, 2025",
      tags: ["css", "styling"],
      subtasks: [
        { id: "subtask-2-1", title: "CSS Selectors", completed: true },
        {
          id: "subtask-2-2",
          title: "Box Model",
          completed: true,
          learningLink: "/learning",
          learningTitle: "CSS Box Model Tutorial",
        },
        { id: "subtask-2-3", title: "Flexbox Layout", completed: false },
      ],
    },
    {
      id: "task-3",
      title: "JavaScript Fundamentals",
      description: "Study variables, functions, and control flow",
      status: "in-progress",
      priority: "high",
      dueDate: "May 5, 2025",
      tags: ["javascript", "programming"],
      subtasks: [
        { id: "subtask-3-1", title: "Variables and Data Types", completed: true },
        {
          id: "subtask-3-2",
          title: "Functions and Scope",
          completed: true,
          learningLink: "/learning",
          learningTitle: "JavaScript Functions",
        },
        { id: "subtask-3-3", title: "Control Flow", completed: false },
        {
          id: "subtask-3-4",
          title: "DOM Manipulation",
          completed: false,
          learningLink: "/learning",
          learningTitle: "DOM Manipulation Tutorial",
        },
      ],
    },
    {
      id: "task-4",
      title: "Responsive Design",
      description: "Learn how to make websites responsive on different devices",
      status: "in-progress",
      priority: "medium",
      dueDate: "May 8, 2025",
      tags: ["css", "responsive"],
      subtasks: [
        { id: "subtask-4-1", title: "Media Queries", completed: true },
        { id: "subtask-4-2", title: "Viewport Units", completed: false },
        {
          id: "subtask-4-3",
          title: "Mobile-First Approach",
          completed: false,
          learningLink: "/learning",
          learningTitle: "Mobile-First Design",
        },
      ],
    },
    {
      id: "task-5",
      title: "JavaScript DOM Manipulation",
      description: "Learn how to manipulate the Document Object Model",
      status: "todo",
      priority: "medium",
      dueDate: "May 10, 2025",
      tags: ["javascript", "dom"],
      subtasks: [
        { id: "subtask-5-1", title: "Selecting Elements", completed: false },
        { id: "subtask-5-2", title: "Modifying Content", completed: false },
        {
          id: "subtask-5-3",
          title: "Event Handling",
          completed: false,
          learningLink: "/learning",
          learningTitle: "JavaScript Events",
        },
      ],
    },
    {
      id: "task-6",
      title: "Build a Portfolio Website",
      description: "Create a simple portfolio website using HTML, CSS and JS",
      status: "todo",
      priority: "high",
      dueDate: "May 12, 2025",
      tags: ["project", "portfolio"],
      subtasks: [
        { id: "subtask-6-1", title: "Design Layout", completed: false },
        { id: "subtask-6-2", title: "Implement HTML Structure", completed: false },
        { id: "subtask-6-3", title: "Add CSS Styling", completed: false },
        { id: "subtask-6-4", title: "Add JavaScript Functionality", completed: false },
        { id: "subtask-6-5", title: "Make Responsive", completed: false },
      ],
    },
    {
      id: "task-7",
      title: "Review Code",
      description: "Review your portfolio website code with mentor",
      status: "todo",
      priority: "low",
      dueDate: "May 14, 2025",
      tags: ["review", "feedback"],
    },
  ]

  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const columns: { id: TaskStatus; title: string; icon: any }[] = [
    { id: "todo", title: "To Do", icon: Clock },
    { id: "in-progress", title: "In Progress", icon: Clock },
    { id: "review", title: "In Review", icon: Clock },
    { id: "done", title: "Done", icon: CheckCircle },
  ]

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status)
  }

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-500 bg-red-50"
      case "medium":
        return "text-yellow-500 bg-yellow-50"
      case "low":
        return "text-blue-500 bg-blue-50"
    }
  }

  // Configure DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, // Reduced from 5px to 3px for easier activation
      },
    }),
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    setActiveId(active.id as string)

    const draggedTask = tasks.find((task) => task.id === active.id)
    if (draggedTask) {
      setActiveTask(draggedTask)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    setActiveId(null)
    setActiveTask(null)

    if (!over) return

    // If dropping on a column
    if (over.id.toString().includes("column-")) {
      const newStatus = over.id.toString().split("-")[1] as TaskStatus
      const taskId = active.id as string

      setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
    }
  }

  const handleOpenTaskModal = (task: Task) => {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  const handleCloseTaskModal = () => {
    setIsModalOpen(false)
  }

  const handleSubtaskToggle = (taskId: string, subtaskId: string, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks?.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed } : subtask,
              ),
            }
          : task,
      ),
    )
  }

  const columnRefs = useRef<Record<TaskStatus, HTMLElement | null>>({
    todo: null,
    "in-progress": null,
    review: null,
    done: null,
  })

  return (
    <>
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-300px)] min-h-[500px]">
          {columns.map((column) => {
            return (
              <div key={column.id} className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2 px-2">
                  <div className="flex items-center gap-2">
                    <column.icon className="h-4 w-4 text-gray-500" />
                    <h3 className="font-medium">{column.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {getTasksByStatus(column.id).length}
                    </Badge>
                  </div>
                  <Button size="icon" variant="ghost" className="h-6 w-6">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Column
                  id={column.id}
                  tasks={getTasksByStatus(column.id)}
                  getPriorityColor={getPriorityColor}
                  handleOpenTaskModal={handleOpenTaskModal}
                  columnRefs={columnRefs}
                />
              </div>
            )
          })}
        </div>

        <DragOverlay>
          {activeTask ? <DraggableOverlay task={activeTask} getPriorityColor={getPriorityColor} /> : null}
        </DragOverlay>
      </DndContext>

      <TaskDetailModal
        task={selectedTask}
        isOpen={isModalOpen}
        onClose={handleCloseTaskModal}
        onSubtaskToggle={handleSubtaskToggle}
      />
    </>
  )
}

interface ColumnProps {
  id: TaskStatus
  tasks: Task[]
  getPriorityColor: (priority: Task["priority"]) => string
  handleOpenTaskModal: (task: Task) => void
  columnRefs: React.MutableRefObject<Record<TaskStatus, HTMLElement | null>>
}

function Column({ id, tasks, getPriorityColor, handleOpenTaskModal, columnRefs }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `column-${id}`,
    data: {
      type: "column",
      status: id,
    },
  })

  return (
    <div
      ref={(node) => {
        setNodeRef(node)
        columnRefs.current[id] = node
      }}
      className={cn(
        "bg-gray-50 rounded-md p-2 flex-1 overflow-auto min-h-[200px]",
        isOver && "ring-2 ring-blue-400 bg-blue-50/50",
      )}
    >
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            getPriorityColor={getPriorityColor}
            onClick={() => handleOpenTaskModal(task)}
          />
        ))}

        {tasks.length === 0 && (
          <div className="h-32 border border-dashed rounded-md flex items-center justify-center text-sm text-gray-400">
            Drop tasks here
          </div>
        )}
      </div>
    </div>
  )
}


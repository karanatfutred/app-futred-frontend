"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  BookOpen,
  CheckCircle,
  Calendar,
  ArrowRight,
  Layers,
  Award,
  ChevronRight,
  Clock,
  Star,
  Zap,
  Target,
  Users,
  Bell,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  // Current learning module data
  const currentModule = {
    id: "frontend-fundamentals",
    name: "Frontend Fundamentals",
    progress: 55,
    currentUnit: "JavaScript Fundamentals",
    unitProgress: 65,
    totalModules: 8,
    completedModules: 4,
    nextMilestone: "Complete JavaScript Assignment",
    nextMilestoneDue: "Today",
  }

  // Current industry stack data
  const currentStack = {
    id: "ls1",
    name: "Learning Stack 1: Frontend Development",
    progress: 35,
    currentSprint: {
      id: "sprint1",
      name: "Sprint 1: HTML & CSS Fundamentals",
      progress: 35,
      startDate: "May 1, 2025",
      endDate: "May 14, 2025",
      daysRemaining: 8,
      totalTasks: 12,
      completedTasks: 4,
      remainingTasks: 8,
    },
    totalSprints: 3,
    currentSprintNumber: 1,
  }

  // Calendar events data
  const calendarEvents = [
    {
      id: 1,
      title: "JavaScript Assignment Due",
      date: "May 5, 2025",
      time: "11:59 PM",
      type: "assignment",
      module: "JavaScript Fundamentals",
    },
    {
      id: 2,
      title: "Team Sprint Review",
      date: "May 7, 2025",
      time: "2:00 PM",
      type: "meeting",
      module: "Sprint 1",
    },
    {
      id: 3,
      title: "CSS Workshop",
      date: "May 10, 2025",
      time: "10:00 AM",
      type: "workshop",
      module: "HTML & CSS Fundamentals",
    },
    {
      id: 4,
      title: "Sprint 1 Submission",
      date: "May 14, 2025",
      time: "5:00 PM",
      type: "deadline",
      module: "Sprint 1",
    },
  ]

  // Learning journey milestones
  const journeyMilestones = [
    {
      id: 1,
      title: "HTML Basics",
      status: "completed",
      date: "April 20, 2025",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      status: "completed",
      date: "April 27, 2025",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      id: 3,
      title: "JavaScript Basics",
      status: "in-progress",
      date: "Current focus",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: 4,
      title: "Responsive Design",
      status: "upcoming",
      date: "Starts May 15, 2025",
      icon: <Target className="h-4 w-4" />,
    },
    {
      id: 5,
      title: "Frontend Frameworks",
      status: "upcoming",
      date: "Starts May 29, 2025",
      icon: <Target className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Enhanced welcome header with journey context */}
      <div className="bg-white rounded-lg p-6 border shadow-sm text-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">Welcome back, John!</h1>
            <p className="text-sm text-black/80 mt-1">You're in Week 2 of your 12-week learning journey</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
              <span className="text-sm font-medium text-black">On track with your learning goals</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Badge className="bg-brand-yellow text-brand-midnight font-medium px-3 py-1 border-0">
              <BookOpen className="h-3.5 w-3.5 mr-1" />
              {currentModule.completedModules} of {currentModule.totalModules} modules completed
            </Badge>
            <Badge className="bg-brand-midnight text-white font-medium px-3 py-1 border-0">
              <Layers className="h-3.5 w-3.5 mr-1" />
              Sprint {currentStack.currentSprintNumber} of {currentStack.totalSprints}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main dashboard tabs */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">
            <Zap className="h-4 w-4 mr-2" />
            Learning Overview
          </TabsTrigger>
          <TabsTrigger value="journey">
            <Target className="h-4 w-4 mr-2" />
            Learning Journey
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Event Calendar
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="space-y-6">
          {/* Current progress cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Learning Module */}
            <Card className="learning-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="learning-icon-bg p-1.5 rounded-full">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Current Learning Module</CardTitle>
                      <CardDescription>Your active learning focus</CardDescription>
                    </div>
                  </div>
                  <Badge className="learning-badge">{currentModule.progress}%</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{currentModule.name}</h3>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span>Overall Progress</span>
                    <span className="font-medium">{currentModule.progress}%</span>
                  </div>
                  <Progress value={currentModule.progress} className="h-2 mt-1 bg-gray-100">
                    <div
                      className="h-full bg-brand-yellow rounded-full"
                      style={{ width: `${currentModule.progress}%` }}
                    ></div>
                  </Progress>
                </div>

                <div className="bg-brand-yellow/5 p-3 rounded-md">
                  <div className="text-sm font-medium">Current Unit: {currentModule.currentUnit}</div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">Unit Progress</span>
                    <span className="font-medium">{currentModule.unitProgress}%</span>
                  </div>
                  <Progress value={currentModule.unitProgress} className="h-2 mt-1 bg-gray-100">
                    <div
                      className="h-full bg-brand-yellow rounded-full"
                      style={{ width: `${currentModule.unitProgress}%` }}
                    ></div>
                  </Progress>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Est. completion: May 10, 2025</span>
                  </div>
                </div>

                <Button className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight" asChild>
                  <Link href="https://example.com/javascript-course">
                    Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Current Sprint */}
            <Card className="industry-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="industry-icon-bg p-1.5 rounded-full">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Current Industry Sprint</CardTitle>
                      <CardDescription>Your active project work</CardDescription>
                    </div>
                  </div>
                  <Badge className="industry-badge">In Progress</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{currentStack.currentSprint.name}</h3>
                  <p className="text-sm text-muted-foreground">Part of {currentStack.name}</p>
                </div>

                <div className="flex items-center justify-between text-sm bg-brand-midnight/5 text-brand-midnight p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {currentStack.currentSprint.startDate} - {currentStack.currentSprint.endDate}
                    </span>
                  </div>
                  <span className="font-medium">{currentStack.currentSprint.daysRemaining} days left</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Sprint Progress</span>
                    <span className="font-medium">{currentStack.currentSprint.progress}%</span>
                  </div>
                  <Progress value={currentStack.currentSprint.progress} className="h-2 mt-1 bg-gray-100">
                    <div
                      className="h-full bg-brand-midnight rounded-full"
                      style={{ width: `${currentStack.currentSprint.progress}%` }}
                    ></div>
                  </Progress>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-2 rounded-md text-center">
                    <div className="text-lg font-semibold">{currentStack.currentSprint.totalTasks}</div>
                    <div className="text-xs text-muted-foreground">Total Tasks</div>
                  </div>
                  <div className="bg-brand-midnight/10 p-2 rounded-md text-center">
                    <div className="text-lg font-semibold text-brand-midnight">
                      {currentStack.currentSprint.completedTasks}
                    </div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="bg-brand-midnight/5 p-2 rounded-md text-center">
                    <div className="text-lg font-semibold text-brand-midnight">
                      {currentStack.currentSprint.remainingTasks}
                    </div>
                    <div className="text-xs text-muted-foreground">Remaining</div>
                  </div>
                </div>

                <Button className="w-full bg-brand-midnight hover:bg-brand-midnight/90 text-white" asChild>
                  <Link href="/industry-stack/stack/ls1/sprint/sprint1">
                    Go to Sprint Board <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/learning" className="block">
              <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-yellow hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="learning-icon-bg p-1.5 rounded-full">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Active Modules</span>
                    </div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">View all modules</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/progress" className="block">
              <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-midnight hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="industry-icon-bg p-1.5 rounded-full">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Completed Tasks</span>
                    </div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">View your progress</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/team-chat" className="block">
              <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-midnight hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="industry-icon-bg p-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Team Progress</span>
                    </div>
                    <div className="text-2xl font-bold">78%</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">View team activity</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/achievements" className="block">
              <Card className="border rounded-lg overflow-hidden h-full hover:border-brand-yellow hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="learning-icon-bg p-1.5 rounded-full">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Achievements</span>
                    </div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">View your achievements</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Next up section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Bell className="h-4 w-4 mr-2 text-brand-midnight" />
                Coming Up Next
              </CardTitle>
              <CardDescription>Your upcoming deadlines and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {calendarEvents.slice(0, 2).map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 border rounded-md bg-white">
                    <div
                      className={`rounded-full p-2 flex-shrink-0 ${
                        event.type === "assignment" || event.type === "workshop"
                          ? "learning-icon-bg"
                          : "industry-icon-bg"
                      }`}
                    >
                      {event.type === "assignment" ? (
                        <BookOpen className="h-4 w-4" />
                      ) : event.type === "meeting" ? (
                        <Users className="h-4 w-4" />
                      ) : event.type === "workshop" ? (
                        <Star className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <Badge
                          className={`${
                            event.type === "assignment" || event.type === "workshop"
                              ? "learning-badge"
                              : "industry-badge"
                          }`}
                        >
                          {event.date}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.module}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center mt-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("calendar")}>
                    View All Events <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Learning Journey Tab Content */}
        <TabsContent value="journey" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Journey</CardTitle>
              <CardDescription>Track your progress through the learning path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-6">
                  {journeyMilestones.map((milestone, index) => (
                    <div key={milestone.id} className="flex items-start gap-4 relative">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center z-10 mt-0.5
                        ${
                          milestone.status === "completed"
                            ? "bg-brand-yellow text-brand-midnight"
                            : milestone.status === "in-progress"
                              ? "bg-brand-midnight text-white"
                              : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-medium ${
                              milestone.status === "completed"
                                ? "text-brand-yellow"
                                : milestone.status === "in-progress"
                                  ? "text-brand-midnight"
                                  : "text-gray-500"
                            }`}
                          >
                            {milestone.title}
                          </h3>
                          {milestone.status === "completed" && <Badge className="learning-badge">Completed</Badge>}
                          {milestone.status === "in-progress" && <Badge className="industry-badge">In Progress</Badge>}
                          {milestone.status === "upcoming" && (
                            <Badge className="bg-gray-100 text-gray-800">Upcoming</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.date}</p>

                        {milestone.status === "in-progress" && (
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>65%</span>
                            </div>
                            <Progress value={65} className="h-1.5 bg-gray-100">
                              <div className="h-full bg-brand-midnight rounded-full" style={{ width: "65%" }}></div>
                            </Progress>
                            <div className="flex items-center gap-2 text-xs text-brand-midnight mt-1">
                              <CheckCircle className="h-3.5 w-3.5" />
                              <span>Next: Complete JavaScript Assignment (Due Today)</span>
                            </div>
                          </div>
                        )}

                        {index < journeyMilestones.length - 1 && <div className="border-b border-dashed my-4"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <h3 className="font-medium mb-2">Learning Path Alignment</h3>
                <div className="bg-brand-yellow/5 p-3 rounded-md">
                  <div className="flex items-start gap-3">
                    <div className="learning-icon-bg p-1.5 rounded-full mt-0.5">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-midnight">
                        Your current learning modules are aligned with Sprint 1 objectives in Learning Stack 1.
                      </p>
                      <p className="text-sm text-brand-midnight/80 mt-1">
                        Completing JavaScript Fundamentals will prepare you for the upcoming Sprint 2 tasks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("overview")}>
              Back to Overview
            </Button>
            <Button variant="outline" onClick={() => setActiveTab("calendar")}>
              View Calendar
            </Button>
          </div>
        </TabsContent>

        {/* Calendar Tab Content */}
        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events & Deadlines</CardTitle>
              <CardDescription>Your schedule for the next two weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Today section */}
                <div>
                  <h3 className="font-medium text-sm flex items-center mb-2">
                    <div className="industry-icon-bg p-1 rounded-full mr-2">
                      <Clock className="h-3.5 w-3.5" />
                    </div>
                    Today
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-md bg-white">
                      <div className="learning-icon-bg rounded-full p-2 flex-shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">JavaScript Assignment Due</h4>
                          <Badge className="industry-badge">11:59 PM</Badge>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">Part of JavaScript Fundamentals</span>
                          <Link href="#" className="text-xs text-brand-yellow hover:underline">
                            View Assignment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* This Week section */}
                <div>
                  <h3 className="font-medium text-sm flex items-center mb-2">
                    <div className="industry-icon-bg p-1 rounded-full mr-2">
                      <Calendar className="h-3.5 w-3.5" />
                    </div>
                    This Week
                  </h3>
                  <div className="space-y-3">
                    {calendarEvents.slice(1, 3).map((event) => (
                      <div key={event.id} className="flex items-center gap-3 p-3 border rounded-md bg-white">
                        <div
                          className={`rounded-full p-2 flex-shrink-0 ${
                            event.type === "assignment" || event.type === "workshop"
                              ? "learning-icon-bg"
                              : "industry-icon-bg"
                          }`}
                        >
                          {event.type === "assignment" ? (
                            <BookOpen className="h-4 w-4" />
                          ) : event.type === "meeting" ? (
                            <Users className="h-4 w-4" />
                          ) : event.type === "workshop" ? (
                            <Star className="h-4 w-4" />
                          ) : (
                            <Clock className="h-4 w-4" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <Badge
                              className={`${
                                event.type === "assignment" || event.type === "workshop"
                                  ? "learning-badge"
                                  : "industry-badge"
                              }`}
                            >
                              {event.date}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{event.time}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{event.module}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Week section */}
                <div>
                  <h3 className="font-medium text-sm flex items-center mb-2">
                    <div className="industry-icon-bg p-1 rounded-full mr-2">
                      <Calendar className="h-3.5 w-3.5" />
                    </div>
                    Next Week
                  </h3>
                  <div className="space-y-3">
                    {calendarEvents.slice(3).map((event) => (
                      <div key={event.id} className="flex items-center gap-3 p-3 border rounded-md bg-white">
                        <div
                          className={`rounded-full p-2 flex-shrink-0 ${
                            event.type === "assignment" || event.type === "workshop"
                              ? "learning-icon-bg"
                              : "industry-icon-bg"
                          }`}
                        >
                          {event.type === "assignment" ? (
                            <BookOpen className="h-4 w-4" />
                          ) : event.type === "meeting" ? (
                            <Users className="h-4 w-4" />
                          ) : event.type === "workshop" ? (
                            <Star className="h-4 w-4" />
                          ) : (
                            <Clock className="h-4 w-4" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <Badge
                              className={`${
                                event.type === "assignment" || event.type === "workshop"
                                  ? "learning-badge"
                                  : "industry-badge"
                              }`}
                            >
                              {event.date}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{event.time}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{event.module}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Calendar Legend</h3>
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="learning-icon-bg p-1 rounded-full">
                      <BookOpen className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs">Assignments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="industry-icon-bg p-1 rounded-full">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs">Meetings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="learning-icon-bg p-1 rounded-full">
                      <Star className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs">Workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="industry-icon-bg p-1 rounded-full">
                      <Clock className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs">Deadlines</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("overview")}>
              Back to Overview
            </Button>
            <Link href="/learning">
              <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight">
                Go to Learning Modules
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  TrendingUp,
  BookOpen,
  Layers,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  FileText,
} from "lucide-react"
import { ProgressChart } from "@/components/progress-chart"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgressPage() {
  const skills = [
    { name: "HTML & CSS", level: 85, lastImproved: "2 days ago", trend: "+5%" },
    { name: "JavaScript", level: 70, lastImproved: "1 week ago", trend: "+3%" },
    { name: "React", level: 65, lastImproved: "3 days ago", trend: "+7%" },
    { name: "Node.js", level: 50, lastImproved: "2 weeks ago", trend: "+2%" },
    { name: "TypeScript", level: 60, lastImproved: "5 days ago", trend: "+4%" },
    { name: "UI/UX Design", level: 75, lastImproved: "1 day ago", trend: "+6%" },
  ]

  const courses = [
    { name: "Frontend Development Basics", completed: 75, totalUnits: 8, completedUnits: 6, dueDate: "May 15, 2025" },
    { name: "JavaScript Advanced Concepts", completed: 30, totalUnits: 10, completedUnits: 3, dueDate: "May 30, 2025" },
    { name: "React Fundamentals", completed: 90, totalUnits: 6, completedUnits: 5, dueDate: "Completed" },
    {
      name: "TypeScript for React Developers",
      completed: 45,
      totalUnits: 7,
      completedUnits: 3,
      dueDate: "June 10, 2025",
    },
  ]

  const learningStacks = [
    {
      id: "ls1",
      title: "Learning Stack 1",
      description: "Frontend Development Fundamentals",
      progress: 35,
      startDate: "May 1, 2025",
      endDate: "June 11, 2025",
      sprints: [
        {
          id: "sprint1",
          title: "Sprint 1",
          progress: 35,
          status: "In Progress",
          tasks: 12,
          completedTasks: 4,
          startDate: "May 1, 2025",
          endDate: "May 14, 2025",
        },
        {
          id: "sprint2",
          title: "Sprint 2",
          progress: 0,
          status: "Not Started",
          tasks: 15,
          completedTasks: 0,
          startDate: "May 15, 2025",
          endDate: "May 28, 2025",
        },
        {
          id: "sprint3",
          title: "Sprint 3",
          progress: 0,
          status: "Not Started",
          tasks: 18,
          completedTasks: 0,
          startDate: "May 29, 2025",
          endDate: "June 11, 2025",
        },
      ],
    },
    {
      id: "ls2",
      title: "Learning Stack 2",
      description: "Backend Development Essentials",
      progress: 0,
      startDate: "June 15, 2025",
      endDate: "July 26, 2025",
      sprints: [
        {
          id: "sprint1",
          title: "Sprint 1",
          progress: 0,
          status: "Not Started",
          tasks: 10,
          completedTasks: 0,
          startDate: "June 15, 2025",
          endDate: "June 28, 2025",
        },
        {
          id: "sprint2",
          title: "Sprint 2",
          progress: 0,
          status: "Not Started",
          tasks: 12,
          completedTasks: 0,
          startDate: "June 29, 2025",
          endDate: "July 12, 2025",
        },
        {
          id: "sprint3",
          title: "Sprint 3",
          progress: 0,
          status: "Not Started",
          tasks: 15,
          completedTasks: 0,
          startDate: "July 13, 2025",
          endDate: "July 26, 2025",
        },
      ],
    },
  ]

  const achievements = [
    { title: "HTML Master", description: "Completed all HTML modules", date: "Apr 15, 2025", icon: Award },
    { title: "CSS Wizard", description: "Built 5 responsive layouts", date: "Apr 22, 2025", icon: Award },
    {
      title: "First Sprint",
      description: "Completed your first sprint",
      date: "May 5, 2025",
      icon: CheckCircle,
      upcoming: true,
    },
  ]

  const weeklyActivity = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.0 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 4.0 },
    { day: "Fri", hours: 2.0 },
    { day: "Sat", hours: 0.5 },
    { day: "Sun", hours: 0 },
  ]

  const upcomingDeadlines = [
    { title: "Complete JavaScript Assignment", date: "May 5, 2025", type: "Task", priority: "High" },
    { title: "Sprint 1 Review", date: "May 14, 2025", type: "Meeting", priority: "Medium" },
    { title: "Frontend Project Submission", date: "May 20, 2025", type: "Deadline", priority: "High" },
  ]

  // Learning journey milestones
  const journeyMilestones = [
    {
      id: 1,
      title: "HTML Basics",
      status: "completed",
      date: "April 20, 2025",
      icon: <CheckCircle className="h-4 w-4" />,
      description: "Mastered HTML document structure, semantic elements, and forms",
      skills: ["HTML5", "Semantic Markup", "Forms"],
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      status: "completed",
      date: "April 27, 2025",
      icon: <CheckCircle className="h-4 w-4" />,
      description: "Learned CSS selectors, box model, and responsive design principles",
      skills: ["CSS3", "Flexbox", "Media Queries"],
    },
    {
      id: 3,
      title: "JavaScript Basics",
      status: "in-progress",
      date: "Current focus",
      icon: <Clock className="h-4 w-4" />,
      description: "Learning JavaScript syntax, functions, and DOM manipulation",
      skills: ["JavaScript", "DOM", "Events"],
      progress: 65,
    },
    {
      id: 4,
      title: "Responsive Design",
      status: "upcoming",
      date: "Starts May 15, 2025",
      icon: <Target className="h-4 w-4" />,
      description: "Will focus on mobile-first design and responsive frameworks",
      skills: ["Mobile-First", "Bootstrap", "Tailwind"],
    },
    {
      id: 5,
      title: "Frontend Frameworks",
      status: "upcoming",
      date: "Starts May 29, 2025",
      icon: <Target className="h-4 w-4" />,
      description: "Will introduce React and other modern frontend frameworks",
      skills: ["React", "State Management", "Components"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Your Progress</h1>
          <p className="text-muted-foreground">Track your learning journey and skill development</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">Week 2 of 12</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-md">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">On Track</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="industry">Industry Stack</TabsTrigger>
          <TabsTrigger value="journey">Learning Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
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
                <div className="text-sm text-muted-foreground">4 of 8 modules completed</div>
                <Link href="/learning" className="text-sm text-blue-600 hover:underline">
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
                <div className="text-sm text-muted-foreground">Sprint 1 of 3 in progress</div>
                <Link href="/industry-stack" className="text-sm text-blue-600 hover:underline">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Weekly Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ProgressChart data={weeklyActivity} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            deadline.type === "Task"
                              ? "bg-blue-500"
                              : deadline.type === "Meeting"
                                ? "bg-purple-500"
                                : "bg-red-500"
                          }`}
                        />
                        <span>{deadline.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{deadline.type}</Badge>
                        <Badge
                          className={
                            deadline.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {deadline.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{deadline.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <TrendingUp className="h-5 w-5 text-yellow-500" />
                Skill Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">{skill.trend}</Badge>
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Last improved: {skill.lastImproved}</span>
                      <span>Target: 90%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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

          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Learning Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 py-2 border-b last:border-0">
                    <div
                      className={`w-10 h-10 rounded-full ${achievement.upcoming ? "bg-gray-100" : "bg-amber-100"} flex items-center justify-center flex-shrink-0`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 ${achievement.upcoming ? "text-gray-400" : "text-amber-500"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{achievement.title}</h4>
                        {achievement.upcoming ? (
                          <Badge variant="outline" className="text-gray-500">
                            Upcoming
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Earned</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-6">
          {learningStacks.map((stack) => (
            <Card key={stack.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-blue-500" />
                    {stack.title}
                  </div>
                  <Badge variant="outline" className={stack.progress > 0 ? "bg-blue-50 text-blue-700" : ""}>
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

          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Industry Skills Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Frontend Skills</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>HTML/CSS</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>JavaScript</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>React</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Backend Skills</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Node.js</span>
                        <span>50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Express</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Databases</span>
                        <span>40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                Your Learning Journey
              </CardTitle>
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
                        <p className="text-sm mt-2">{milestone.description}</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {milestone.skills &&
                            milestone.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="bg-gray-50">
                                {skill}
                              </Badge>
                            ))}
                        </div>

                        {milestone.status === "in-progress" && (
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>{milestone.progress}%</span>
                            </div>
                            <Progress value={milestone.progress} className="h-1.5 bg-gray-100">
                              <div
                                className="h-full bg-brand-midnight rounded-full"
                                style={{ width: `${milestone.progress}%` }}
                              ></div>
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

          <div className="flex justify-between mt-4">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Download Progress Report
            </Button>
            <Button>
              <Target className="mr-2 h-4 w-4" />
              Set New Learning Goals
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


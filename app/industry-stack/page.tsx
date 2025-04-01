"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  ArrowRight,
  Users,
  FileText,
  Layers,
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Server,
  Globe,
  CheckCircle,
  AlertCircle,
  Target,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { EnhancedGanttChart } from "@/components/enhanced-gantt-chart"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function IndustryStackPage() {
  const [expandedStacks, setExpandedStacks] = useState<Record<string, boolean>>({
    ls1: true,
    ls2: false,
    ls3: false,
  })

  const toggleStack = (stackId: string) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [stackId]: !prev[stackId],
    }))
  }

  // Sample data for all Learning Stacks with enhanced details
  const stacks = [
    {
      id: "ls1",
      title: "Industry Stack 1",
      description: "Frontend Development Fundamentals",
      progress: 35,
      startDate: "May 1, 2025",
      endDate: "June 11, 2025",
      team: ["John Doe", "Jane Smith", "Alex Johnson", "Maria Garcia"],
      teamRoles: ["Frontend Lead", "UI/UX Designer", "Junior Developer", "QA Specialist"],
      technologies: [
        { name: "HTML5", icon: <Globe className="h-4 w-4" />, proficiency: 85 },
        { name: "CSS3", icon: <Code className="h-4 w-4" />, proficiency: 80 },
        { name: "JavaScript", icon: <Code className="h-4 w-4" />, proficiency: 70 },
        { name: "React", icon: <Code className="h-4 w-4" />, proficiency: 65 },
        { name: "Responsive Design", icon: <Globe className="h-4 w-4" />, proficiency: 75 },
      ],
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
          description: "Focus on HTML and CSS fundamentals",
          goals: ["Learn HTML structure", "Master CSS selectors", "Understand the box model"],
          keyDeliverables: ["Basic webpage structure", "Styled components", "Responsive layout"],
          learningResources: ["MDN Web Docs", "CSS Tricks", "Frontend Masters Courses"],
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
          description: "JavaScript basics and DOM manipulation",
          goals: ["Learn JavaScript syntax", "Understand DOM manipulation", "Implement event handlers"],
          keyDeliverables: ["Interactive components", "Form validation", "Dynamic content"],
          learningResources: ["JavaScript.info", "Eloquent JavaScript", "DOM Manipulation Tutorials"],
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
          description: "Building a complete frontend project",
          goals: ["Create a responsive layout", "Implement interactive features", "Deploy the project"],
          keyDeliverables: ["Complete frontend application", "Responsive design", "Interactive UI"],
          learningResources: ["React Documentation", "Frontend Deployment Guides", "UI/UX Best Practices"],
        },
      ],
      active: true,
      industryAlignment:
        "This stack aligns with modern frontend development practices used by companies like Airbnb, Shopify, and Vercel.",
      careerPaths: ["Frontend Developer", "UI Developer", "Web Designer", "UX Engineer"],
    },
    {
      id: "ls2",
      title: "Industry Stack 2",
      description: "Backend Development Essentials",
      progress: 0,
      startDate: "June 15, 2025",
      endDate: "July 26, 2025",
      team: ["John Doe", "Jane Smith", "Alex Johnson", "Robert Wilson"],
      teamRoles: ["Backend Lead", "Database Specialist", "API Developer", "DevOps Engineer"],
      technologies: [
        { name: "Node.js", icon: <Server className="h-4 w-4" />, proficiency: 0 },
        { name: "Express", icon: <Server className="h-4 w-4" />, proficiency: 0 },
        { name: "SQL", icon: <Database className="h-4 w-4" />, proficiency: 0 },
        { name: "MongoDB", icon: <Database className="h-4 w-4" />, proficiency: 0 },
        { name: "RESTful APIs", icon: <Globe className="h-4 w-4" />, proficiency: 0 },
      ],
      objectives: [
        "Learn server-side programming fundamentals",
        "Master database design and implementation",
        "Build RESTful APIs",
        "Implement authentication and authorization",
      ],
      sprints: [
        {
          id: "sprint1",
          title: "Sprint 1",
          status: "Not Started",
          startDate: "June 15, 2025",
          endDate: "June 28, 2025",
          progress: 0,
          tasks: 10,
          completedTasks: 0,
          description: "Server-side programming basics",
          goals: ["Learn Node.js basics", "Understand Express framework", "Create simple server"],
          keyDeliverables: ["Basic server setup", "Route handling", "Middleware implementation"],
          learningResources: ["Node.js Documentation", "Express Guides", "Backend Architecture Tutorials"],
        },
        {
          id: "sprint2",
          title: "Sprint 2",
          status: "Not Started",
          startDate: "June 29, 2025",
          endDate: "July 12, 2025",
          progress: 0,
          tasks: 12,
          completedTasks: 0,
          description: "Database integration",
          goals: ["Learn SQL basics", "Connect to databases", "Perform CRUD operations"],
          keyDeliverables: ["Database schema", "CRUD operations", "Data validation"],
          learningResources: ["SQL Tutorials", "MongoDB University", "Database Design Principles"],
        },
        {
          id: "sprint3",
          title: "Sprint 3",
          status: "Not Started",
          startDate: "July 13, 2025",
          endDate: "July 26, 2025",
          progress: 0,
          tasks: 15,
          completedTasks: 0,
          description: "Building a complete backend project",
          goals: ["Create RESTful API", "Implement authentication", "Deploy the project"],
          keyDeliverables: ["Complete API", "Authentication system", "Deployed backend"],
          learningResources: ["API Design Best Practices", "JWT Authentication Guides", "Backend Deployment Tutorials"],
        },
      ],
      active: false,
      industryAlignment: "This stack covers backend technologies used by companies like Stripe, PayPal, and MongoDB.",
      careerPaths: ["Backend Developer", "API Developer", "Database Administrator", "Full Stack Developer"],
    },
    {
      id: "ls3",
      title: "Industry Stack 3",
      description: "DevOps and Deployment",
      progress: 0,
      startDate: "August 1, 2025",
      endDate: "September 12, 2025",
      team: ["John Doe", "Jane Smith", "Alex Johnson", "Sarah Williams"],
      teamRoles: ["DevOps Lead", "Cloud Specialist", "Security Engineer", "Infrastructure Architect"],
      technologies: [
        { name: "Docker", icon: <Server className="h-4 w-4" />, proficiency: 0 },
        { name: "Kubernetes", icon: <Server className="h-4 w-4" />, proficiency: 0 },
        { name: "CI/CD", icon: <Code className="h-4 w-4" />, proficiency: 0 },
        { name: "AWS/Azure", icon: <Globe className="h-4 w-4" />, proficiency: 0 },
        { name: "Monitoring", icon: <AlertCircle className="h-4 w-4" />, proficiency: 0 },
      ],
      objectives: [
        "Learn containerization with Docker",
        "Master CI/CD pipelines",
        "Understand cloud deployment",
        "Implement monitoring and logging",
      ],
      sprints: [
        {
          id: "sprint1",
          title: "Sprint 1",
          status: "Not Started",
          startDate: "August 1, 2025",
          endDate: "August 14, 2025",
          progress: 0,
          tasks: 8,
          completedTasks: 0,
          description: "Containerization basics",
          goals: ["Learn Docker basics", "Create Dockerfiles", "Manage containers"],
          keyDeliverables: ["Containerized application", "Docker Compose setup", "Container orchestration"],
          learningResources: ["Docker Documentation", "Container Best Practices", "Docker in Production"],
        },
        {
          id: "sprint2",
          title: "Sprint 2",
          status: "Not Started",
          startDate: "August 15, 2025",
          endDate: "August 28, 2025",
          progress: 0,
          tasks: 10,
          completedTasks: 0,
          description: "CI/CD implementation",
          goals: ["Set up CI/CD pipelines", "Automate testing", "Automate deployment"],
          keyDeliverables: ["CI/CD pipeline", "Automated tests", "Deployment automation"],
          learningResources: ["GitHub Actions Guides", "Jenkins Tutorials", "CI/CD Best Practices"],
        },
        {
          id: "sprint3",
          title: "Sprint 3",
          status: "Not Started",
          startDate: "August 29, 2025",
          endDate: "September 12, 2025",
          progress: 0,
          tasks: 12,
          completedTasks: 0,
          description: "Cloud deployment and monitoring",
          goals: ["Deploy to cloud providers", "Set up monitoring", "Implement logging"],
          keyDeliverables: ["Cloud deployment", "Monitoring dashboard", "Logging system"],
          learningResources: ["AWS/Azure Documentation", "Prometheus Guides", "ELK Stack Tutorials"],
        },
      ],
      active: false,
      industryAlignment:
        "This stack covers DevOps practices used by companies like Netflix, Spotify, and Airbnb for continuous deployment and infrastructure management.",
      careerPaths: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Infrastructure Engineer"],
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Industry Stack</h1>
        <p className="text-muted-foreground">
          Explore the technologies and learning stacks used in modern web development
        </p>
      </div>

      {/* Industry Overview Card */}
      <Card className="border-l-4 border-l-brand-midnight">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-midnight" />
            Industry-Aligned Learning Path
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our industry stacks are designed to mirror real-world development environments and workflows. Each stack
            focuses on specific technologies and methodologies currently used in the industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-md p-4 bg-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Frontend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                HTML, CSS, JavaScript, React, and responsive design principles.
              </p>
              <Badge className="mt-2 bg-blue-100 text-blue-800">Stack 1</Badge>
            </div>

            <div className="border rounded-md p-4 bg-purple-50">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-5 w-5 text-purple-600" />
                <h3 className="font-medium">Backend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">Node.js, Express, databases, and API development.</p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">Stack 2</Badge>
            </div>

            <div className="border rounded-md p-4 bg-green-50">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">DevOps & Deployment</h3>
              </div>
              <p className="text-sm text-muted-foreground">Docker, CI/CD, cloud services, and monitoring.</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Stack 3</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {stacks.map((stack) => (
        <Collapsible
          key={stack.id}
          open={expandedStacks[stack.id]}
          onOpenChange={() => toggleStack(stack.id)}
          className="border rounded-lg overflow-hidden bg-white"
        >
          <div className="border-b">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">{stack.title}</h2>
                <p className="text-muted-foreground ml-2">{stack.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  className={
                    stack.active
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }
                >
                  {stack.active ? "Active" : "Locked"}
                </Badge>
                <CollapsibleTrigger className="rounded-md h-8 w-8 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                  {expandedStacks[stack.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </CollapsibleTrigger>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 mt-2">
                <Progress value={stack.progress} className="h-2 flex-1" />
                <span className="text-sm font-medium">{stack.progress}%</span>
              </div>
            </div>
          </div>

          <CollapsibleContent>
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
                      <Badge className={stack.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
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
                        <div className="text-lg font-medium">{stack.sprints.length}</div>
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
                          {stack.sprints.reduce((acc, sprint) => acc + sprint.completedTasks, 0)}
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
                              <span className="text-sm font-medium">{tech.proficiency}%</span>
                            </div>
                            <Progress value={tech.proficiency} className="h-1.5" />
                          </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Industry Alignment</h3>
                      <p className="text-sm text-muted-foreground">{stack.industryAlignment}</p>

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
                    <TabsContent key={sprint.id} value={sprint.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">{sprint.title}</h3>
                            {sprint.status === "In Progress" ? (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Progress</Badge>
                            ) : sprint.status === "Completed" ? (
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
                            ) : (
                              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Not Started</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-1">{sprint.description}</p>
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
                                    <Badge variant="outline" className="bg-white cursor-pointer">
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
                        <Link href={`/industry-stack/stack/${stack.id}/sprint/${sprint.id}`}>
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
                    <Button className="bg-brand-midnight hover:bg-brand-midnight/90">Go to Current Sprint</Button>
                  </Link>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}


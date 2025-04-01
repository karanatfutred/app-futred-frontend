import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Clock,
  Calendar,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  FileText,
  Download,
  Star,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { BarChart } from "lucide-react"

export default function LearningPage() {
  const diplomaTitle = "BSB50120 Diploma of Business"

  const courses = [
    {
      id: 1,
      title: "Unit 1: Foundations of Critical Thinking and Business Problem Solving",
      description: "Learn critical thinking frameworks and problem-solving methodologies for business contexts",
      estimatedHours: 16,
      externalLink: "https://example.com/course/unit1",
      progress: 100,
      status: "Completed",
      completionDate: "April 10, 2025",
      materials: ["Lecture Notes", "Case Studies", "Assessment Guide"],
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Unit 2: Principles of Budgeting and Financial Management",
      description: "Master the fundamentals of business budgeting and financial planning",
      estimatedHours: 20,
      externalLink: "https://example.com/course/unit2",
      progress: 100,
      status: "Completed",
      completionDate: "April 20, 2025",
      materials: ["Financial Templates", "Budget Examples", "Financial Analysis Tools"],
      instructor: "Prof. Michael Chen",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Unit 3: Introduction to Sustainable Business Policies and Practices",
      description: "Explore sustainable business strategies and environmental policy development",
      estimatedHours: 25,
      externalLink: "https://example.com/course/unit3",
      progress: 75,
      status: "In Progress",
      dueDate: "May 15, 2025",
      materials: ["Sustainability Guidelines", "Case Studies", "Policy Templates"],
      instructor: "Dr. Emma Rodriguez",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Unit 4: Fundamentals of Business Resource Management",
      description: "Learn effective resource allocation and management in business contexts",
      estimatedHours: 31,
      externalLink: "https://example.com/course/unit4",
      progress: 45,
      status: "In Progress",
      dueDate: "May 30, 2025",
      materials: ["Resource Planning Tools", "Allocation Strategies", "Management Frameworks"],
      instructor: "Prof. James Wilson",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Unit 5: Principles of Effective Meetings and Team Dynamics",
      description: "Master techniques for productive meetings and team collaboration",
      estimatedHours: 37,
      externalLink: "https://example.com/course/unit5",
      progress: 10,
      status: "Just Started",
      dueDate: "June 15, 2025",
      materials: ["Meeting Templates", "Team Building Exercises", "Collaboration Tools"],
      instructor: "Dr. Lisa Thompson",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Unit 6: Basics of Human Resource: Recruitment and Talent Management",
      description: "Learn effective recruitment strategies and talent development approaches",
      estimatedHours: 45,
      externalLink: "https://example.com/course/unit6",
      progress: 0,
      status: "Not Started",
      dueDate: "July 1, 2025",
      materials: ["Recruitment Guides", "Interview Templates", "Talent Development Plans"],
      instructor: "Prof. Robert Garcia",
      rating: 4.8,
    },
    {
      id: 7,
      title: "Unit 7: Fundamentals of Operational Planning and Management",
      description: "Master operational planning techniques and management strategies",
      estimatedHours: 51,
      externalLink: "https://example.com/course/unit7",
      progress: 0,
      status: "Not Started",
      dueDate: "July 15, 2025",
      materials: ["Operational Plans", "Management Frameworks", "Case Studies"],
      instructor: "Dr. Thomas Brown",
      rating: 4.6,
    },
    {
      id: 8,
      title: "Unit 8: Introduction to Business Risk Management",
      description: "Learn to identify, assess, and mitigate business risks effectively",
      estimatedHours: 57,
      externalLink: "https://example.com/course/unit8",
      progress: 0,
      status: "Not Started",
      dueDate: "August 1, 2025",
      materials: ["Risk Assessment Tools", "Mitigation Strategies", "Case Studies"],
      instructor: "Prof. Jennifer Lee",
      rating: 4.7,
    },
    {
      id: 9,
      title: "Unit 9: Organizational Behavior: Leadership, Communication, & Team Dynamics",
      description: "Understand organizational behavior principles and leadership techniques",
      estimatedHours: 62,
      externalLink: "https://example.com/course/unit9",
      progress: 0,
      status: "Not Started",
      dueDate: "August 15, 2025",
      materials: ["Leadership Models", "Communication Frameworks", "Team Building Exercises"],
      instructor: "Dr. David Martinez",
      rating: 4.9,
    },
    {
      id: 10,
      title: "Unit 10: Manage people performance",
      description: "Learn strategies for effective people management and performance optimization",
      estimatedHours: 71,
      externalLink: "https://example.com/course/unit10",
      progress: 0,
      status: "Not Started",
      dueDate: "September 1, 2025",
      materials: ["Performance Management Tools", "Feedback Templates", "Development Plans"],
      instructor: "Prof. Sophia Kim",
      rating: 4.8,
    },
  ]

  // Calculate overall progress
  const totalUnits = courses.length
  const completedUnits = courses.filter((course) => course.status === "Completed").length
  const inProgressUnits = courses.filter(
    (course) => course.status === "In Progress" || course.status === "Just Started",
  ).length
  const notStartedUnits = courses.filter((course) => course.status === "Not Started").length

  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / totalUnits

  // Group courses by status
  const currentCourses = courses.filter((course) => course.status === "In Progress" || course.status === "Just Started")
  const upcomingCourses = courses.filter((course) => course.status === "Not Started").slice(0, 2)
  const completedCourses = courses.filter((course) => course.status === "Completed")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{diplomaTitle}</h1>
          <p className="text-muted-foreground">Access your business diploma course units</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-3 py-1.5 rounded-md">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{totalUnits} Course Units</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-md">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">{completedUnits} Completed</span>
          </div>
        </div>
      </div>

      <Card className="border-l-4 border-l-brand-yellow">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-yellow" />
            BSB50120 Diploma of Business
          </CardTitle>
          <CardDescription>Your progress through the business diploma program</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="font-medium">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{completedUnits}</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{inProgressUnits}</div>
                <div className="text-xs text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{notStartedUnits}</div>
                <div className="text-xs text-muted-foreground">Upcoming</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ExternalLink className="h-4 w-4" />
            <span>All course units are delivered through our external learning platform</span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="current">Current Units</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Units</TabsTrigger>
          <TabsTrigger value="completed">Completed Units</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      {course.title}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{course.status}</Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-0 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Est. {course.estimatedHours} hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Due: {course.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {course.materials.map((material, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-50">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">• {course.instructor}</span>
                  </div>
                  <Button asChild>
                    <a href={course.externalLink} target="_blank" rel="noopener noreferrer">
                      Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-l-4 border-l-gray-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="h-5 w-5 text-gray-500" />
                      {course.title}
                    </CardTitle>
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-0 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Est. {course.estimatedHours} hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Starts: {course.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {course.materials.map((material, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-50">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">• {course.instructor}</span>
                  </div>
                  <Button variant="outline" disabled>
                    Available {course.dueDate}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline">View All Upcoming Units ({notStartedUnits})</Button>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      {course.title}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-0 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.estimatedHours} hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Completed: {course.completionDate}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">• {course.instructor}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Certificate
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Materials
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8 pt-6 border-t">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Course Catalog
        </Button>
        <Link href="/progress">
          <Button>
            <BarChart className="mr-2 h-4 w-4" />
            View Learning Progress
          </Button>
        </Link>
      </div>
    </div>
  )
}


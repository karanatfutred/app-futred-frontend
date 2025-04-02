import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { BarChart } from "lucide-react";
import { courses } from "@/data/learning";

export default function LearningPage() {
  const diplomaTitle = "BSB50120 Diploma of Business";

  // Calculate overall progress
  const totalUnits = courses.length;
  const completedUnits = courses.filter(
    (course) => course.status === "Completed"
  ).length;
  const inProgressUnits = courses.filter(
    (course) =>
      course.status === "In Progress" || course.status === "Just Started"
  ).length;
  const notStartedUnits = courses.filter(
    (course) => course.status === "Not Started"
  ).length;

  const overallProgress =
    courses.reduce((acc, course) => acc + course.progress, 0) / totalUnits;

  // Group courses by status
  const currentCourses = courses.filter(
    (course) =>
      course.status === "In Progress" || course.status === "Just Started"
  );
  const upcomingCourses = courses
    .filter((course) => course.status === "Not Started")
    .slice(0, 2);
  const completedCourses = courses.filter(
    (course) => course.status === "Completed"
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{diplomaTitle}</h1>
          <p className="text-muted-foreground">
            Access your business diploma course units
          </p>
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
          <CardDescription>
            Your progress through the business diploma program
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="font-medium">
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {completedUnits}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {inProgressUnits}
                </div>
                <div className="text-xs text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {notStartedUnits}
                </div>
                <div className="text-xs text-muted-foreground">Upcoming</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ExternalLink className="h-4 w-4" />
            <span>
              All course units are delivered through our external learning
              platform
            </span>
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
              <Card
                key={course.id}
                className="overflow-hidden border-l-4 border-l-blue-500"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      {course.title}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      {course.status}
                    </Badge>
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
                    <span className="text-xs text-muted-foreground">
                      • {course.instructor}
                    </span>
                  </div>
                  <Button asChild>
                    <a
                      href={course.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
              <Card
                key={course.id}
                className="overflow-hidden border-l-4 border-l-gray-300"
              >
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
                    <span className="text-xs text-muted-foreground">
                      • {course.instructor}
                    </span>
                  </div>
                  <Button variant="outline" disabled>
                    Available {course.dueDate}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline">
              View All Upcoming Units ({notStartedUnits})
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden border-l-4 border-l-green-500"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      {course.title}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
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
                    <span className="text-xs text-muted-foreground">
                      • {course.instructor}
                    </span>
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
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Clock, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ModuleDetails() {
  const competencies = [
    {
      id: 1,
      title: "HTML & CSS Basics",
      description: "Learn the fundamentals of HTML and CSS for web development",
      progress: 80,
      estimatedHours: 12,
      difficulty: "Beginner",
      lastActivity: "2 days ago",
      externalLink: "https://example.com/html-css-course",
      rating: 4.8,
      ratings: 24,
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Master the core concepts of JavaScript programming",
      progress: 65,
      estimatedHours: 18,
      difficulty: "Intermediate",
      lastActivity: "Yesterday",
      externalLink: "https://example.com/javascript-course",
      rating: 4.7,
      ratings: 36,
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Create websites that work on any device and screen size",
      progress: 45,
      estimatedHours: 10,
      difficulty: "Intermediate",
      lastActivity: "3 days ago",
      externalLink: "https://example.com/responsive-design-course",
      rating: 4.5,
      ratings: 18,
    },
    {
      id: 4,
      title: "Web Accessibility",
      description: "Make your websites accessible to everyone",
      progress: 30,
      estimatedHours: 8,
      difficulty: "Intermediate",
      lastActivity: "1 week ago",
      externalLink: "https://example.com/accessibility-course",
      rating: 4.9,
      ratings: 15,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />)
      } else if (i - 0.5 <= rating) {
        stars.push(<Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />)
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
      }
    }
    return stars
  }

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Frontend Fundamentals</h2>
        <p className="text-muted-foreground">Master the essential skills needed for modern frontend development</p>
        <div className="flex items-center gap-2 mt-2">
          <Progress value={55} className="h-2 w-64" />
          <span className="text-sm font-medium">55% Complete</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competencies.map((competency) => (
          <Card key={competency.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  {competency.title}
                </div>
                <Badge className={getDifficultyColor(competency.difficulty)}>{competency.difficulty}</Badge>
              </CardTitle>
              <CardDescription>{competency.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">{competency.progress}%</span>
                  </div>
                  <Progress value={competency.progress} className="h-2" />
                </div>

                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Est. {competency.estimatedHours} hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Last activity: {competency.lastActivity}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  {renderStars(competency.rating)}
                  <span className="ml-1">({competency.ratings})</span>
                </div>
              </div>
              <Button asChild>
                <Link href={competency.externalLink} target="_blank" rel="noopener noreferrer">
                  Continue <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


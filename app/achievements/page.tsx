"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Code, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AchievementsPage() {
  // Sample achievement data
  const achievementStats = {
    totalPoints: 1250,
    rank: "Explorer",
    nextRank: "Innovator",
    pointsToNextRank: 750,
    totalAchievements: 5,
    totalAvailable: 24,
  }

  const earnedAchievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first learning module",
      icon: <BookOpen className="h-5 w-5 text-brand-yellow" />,
      earnedDate: "April 15, 2025",
      points: 100,
      isNew: true,
      category: "Learning",
    },
    {
      id: 2,
      title: "Team Player",
      description: "Participate in your first team discussion",
      icon: <Users className="h-5 w-5 text-brand-skyblue" />,
      earnedDate: "April 18, 2025",
      points: 150,
      isNew: false,
      category: "Collaboration",
    },
    {
      id: 3,
      title: "Code Ninja",
      description: "Submit 5 coding assignments with perfect scores",
      icon: <Code className="h-5 w-5 text-brand-skyblue" />,
      earnedDate: "April 22, 2025",
      points: 300,
      isNew: false,
      category: "Technical",
    },
  ]

  const inProgressAchievements = [
    {
      id: 6,
      title: "Feedback Master",
      description: "Provide constructive feedback to 5 team members",
      icon: <Users className="h-5 w-5 text-brand-skyblue" />,
      progress: 60,
      currentValue: 3,
      targetValue: 5,
      points: 250,
      category: "Collaboration",
    },
    {
      id: 7,
      title: "Perfect Attendance",
      description: "Attend 10 consecutive team meetings",
      icon: <CheckCircle className="h-5 w-5 text-brand-skyblue" />,
      progress: 40,
      currentValue: 4,
      targetValue: 10,
      points: 350,
      category: "Participation",
    },
  ]

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Achievement Overview */}
      <Card className="border-l-4 border-l-brand-yellow">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-brand-yellow" />
            Achievement Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-2xl font-bold">{achievementStats.totalPoints} Points</div>
              <div className="text-sm text-muted-foreground">Current Rank: {achievementStats.rank}</div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-brand-yellow text-brand-midnight">
                {achievementStats.totalAchievements}/{achievementStats.totalAvailable} Achievements
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress to {achievementStats.nextRank}</span>
              <span>
                {achievementStats.totalPoints}/{achievementStats.totalPoints + achievementStats.pointsToNextRank} points
              </span>
            </div>
            <Progress
              value={
                (achievementStats.totalPoints / (achievementStats.totalPoints + achievementStats.pointsToNextRank)) *
                100
              }
              className="h-2"
            >
              <div
                className="h-full bg-brand-yellow rounded-full"
                style={{
                  width: `${(achievementStats.totalPoints / (achievementStats.totalPoints + achievementStats.pointsToNextRank)) * 100}%`,
                }}
              ></div>
            </Progress>
            <div className="text-xs text-muted-foreground">
              Earn {achievementStats.pointsToNextRank} more points to reach {achievementStats.nextRank} rank
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Categories */}
      <Tabs defaultValue="earned" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="earned">Earned</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="all">All Categories</TabsTrigger>
        </TabsList>

        {/* Earned Achievements Tab */}
        <TabsContent value="earned" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-yellow/10 rounded-full p-2 flex-shrink-0 mt-1">{achievement.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{achievement.title}</h3>
                        {achievement.isNew && <Badge className="bg-brand-yellow/10 text-brand-yellow">New</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {achievement.category}
                        </Badge>
                        <div className="text-sm font-medium text-brand-yellow">+{achievement.points} pts</div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">Earned on {achievement.earnedDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline">View All Earned Achievements</Button>
          </div>
        </TabsContent>

        {/* In Progress Achievements Tab */}
        <TabsContent value="in-progress" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inProgressAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-skyblue/10 rounded-full p-2 flex-shrink-0 mt-1">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{achievement.title}</h3>
                        <Badge className="bg-brand-skyblue/10 text-brand-skyblue">
                          {achievement.currentValue}/{achievement.targetValue}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>

                      <div className="mt-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-1.5">
                          <div
                            className="h-full bg-brand-skyblue rounded-full"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </Progress>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {achievement.category}
                        </Badge>
                        <div className="text-sm font-medium text-brand-skyblue">+{achievement.points} pts</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* All Categories Tab */}
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center p-6 hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-yellow/10 rounded-full p-3">
                  <BookOpen className="h-8 w-8 text-brand-yellow" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Learning</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete learning modules and demonstrate your understanding
              </p>
              <Badge className="bg-brand-yellow/10 text-brand-yellow">2 of 8 Earned</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-skyblue/10 rounded-full p-3">
                  <Code className="h-8 w-8 text-brand-skyblue" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Technical</h3>
              <p className="text-sm text-muted-foreground mb-4">Demonstrate technical skills and coding proficiency</p>
              <Badge className="bg-brand-skyblue/10 text-brand-skyblue">1 of 6 Earned</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-skyblue/10 rounded-full p-3">
                  <Users className="h-8 w-8 text-brand-skyblue" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground mb-4">Work effectively with your team and peers</p>
              <Badge className="bg-brand-skyblue/10 text-brand-skyblue">2 of 10 Earned</Badge>
            </Card>
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline">Explore All Categories</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Next Steps */}
      <div className="flex justify-between items-center pt-4 border-t">
        <div className="text-sm text-muted-foreground">
          You're making great progress! Keep going to unlock more achievements.
        </div>
        <Link href="/learning">
          <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-midnight">
            Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}


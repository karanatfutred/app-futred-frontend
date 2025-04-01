import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, Users, BarChart } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Active Modules</span>
                <BookOpen className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-xs text-muted-foreground mt-1">+2 from last week</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Completed Tasks</span>
                <CheckCircle className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-xs text-muted-foreground mt-1">+5 from last week</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Team Progress</span>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">78%</div>
              <div className="text-xs text-muted-foreground mt-1">+12% from last month</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Learning Stats</span>
                <BarChart className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold">85%</div>
              <div className="text-xs text-muted-foreground mt-1">+3% from last week</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Learning Activities</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Frontend Development Basics</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">UI/UX Design Principles</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">JavaScript Advanced Concepts</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Complete React Assignment</span>
                </div>
                <span className="text-sm text-muted-foreground">Today</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Team Meeting</span>
                </div>
                <span className="text-sm text-muted-foreground">Tomorrow</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Project Submission</span>
                </div>
                <span className="text-sm text-muted-foreground">In 3 days</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Code Review</span>
                </div>
                <span className="text-sm text-muted-foreground">Next week</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";
import { ProgressChart } from "@/components/progress-chart";
import { Badge } from "@/components/ui/badge";
import { weeklyActivity, upcomingDeadlines } from "@/data/progress";

function WeeklyActivityAndUpcomingDeadlines() {
  return (
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
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
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
                      deadline.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {deadline.priority}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {deadline.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WeeklyActivityAndUpcomingDeadlines;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/data/progress";

function CourseCompletion() {
  return (
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
            <div
              key={index}
              className="flex items-start gap-3 py-2 border-b last:border-0"
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  achievement.upcoming ? "bg-gray-100" : "bg-amber-100"
                } flex items-center justify-center flex-shrink-0`}
              >
                <achievement.icon
                  className={`h-5 w-5 ${
                    achievement.upcoming ? "text-gray-400" : "text-amber-500"
                  }`}
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
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Earned
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {achievement.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCompletion;

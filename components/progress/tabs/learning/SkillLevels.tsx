import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/progress";

function SkillLevels() {
  return (
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
                  <Badge className="bg-green-100 text-green-800">
                    {skill.trend}
                  </Badge>
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
  );
}

export default SkillLevels;

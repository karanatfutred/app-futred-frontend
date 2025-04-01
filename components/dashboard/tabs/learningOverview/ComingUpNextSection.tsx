import React, { Dispatch, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, ChevronRight, Clock, Star, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { calendarEvents } from "@/data/dashboard";

interface ComingUpNextSectionProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
}

function ComingUpNextSection({ setActiveTab }: ComingUpNextSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center">
          <Bell className="h-4 w-4 mr-2 text-brand-midnight" />
          Coming Up Next
        </CardTitle>
        <CardDescription>Your upcoming deadlines and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {calendarEvents.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-3 p-3 border rounded-md bg-white"
            >
              <div
                className={`rounded-full p-2 flex-shrink-0 ${
                  event.type === "assignment" || event.type === "workshop"
                    ? "learning-icon-bg"
                    : "industry-icon-bg"
                }`}
              >
                {event.type === "assignment" ? (
                  <BookOpen className="h-4 w-4" />
                ) : event.type === "meeting" ? (
                  <Users className="h-4 w-4" />
                ) : event.type === "workshop" ? (
                  <Star className="h-4 w-4" />
                ) : (
                  <Clock className="h-4 w-4" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <Badge
                    className={`${
                      event.type === "assignment" || event.type === "workshop"
                        ? "learning-badge"
                        : "industry-badge"
                    }`}
                  >
                    {event.date}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {event.time}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {event.module}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("calendar")}
            >
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ComingUpNextSection;

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { calendarEvents } from "@/data/dashboard";

function EventCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events & Deadlines</CardTitle>
        <CardDescription>Your schedule for the next two weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Today section */}
          <div>
            <h3 className="font-medium text-sm flex items-center mb-2">
              <div className="industry-icon-bg p-1 rounded-full mr-2">
                <Clock className="h-3.5 w-3.5" />
              </div>
              Today
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-md bg-white">
                <div className="learning-icon-bg rounded-full p-2 flex-shrink-0">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">
                      JavaScript Assignment Due
                    </h4>
                    <Badge className="industry-badge">11:59 PM</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">
                      Part of JavaScript Fundamentals
                    </span>
                    <Link
                      href="#"
                      className="text-xs text-brand-yellow hover:underline"
                    >
                      View Assignment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* This Week section */}
          <div>
            <h3 className="font-medium text-sm flex items-center mb-2">
              <div className="industry-icon-bg p-1 rounded-full mr-2">
                <Calendar className="h-3.5 w-3.5" />
              </div>
              This Week
            </h3>
            <div className="space-y-3">
              {calendarEvents.slice(1, 3).map((event) => (
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
                          event.type === "assignment" ||
                          event.type === "workshop"
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
            </div>
          </div>

          {/* Next Week section */}
          <div>
            <h3 className="font-medium text-sm flex items-center mb-2">
              <div className="industry-icon-bg p-1 rounded-full mr-2">
                <Calendar className="h-3.5 w-3.5" />
              </div>
              Next Week
            </h3>
            <div className="space-y-3">
              {calendarEvents.slice(3).map((event) => (
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
                          event.type === "assignment" ||
                          event.type === "workshop"
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
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Calendar Legend</h3>
            <Button variant="outline" size="sm">
              Add to Calendar
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            <div className="flex items-center gap-2">
              <div className="learning-icon-bg p-1 rounded-full">
                <BookOpen className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs">Assignments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="industry-icon-bg p-1 rounded-full">
                <Users className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs">Meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="learning-icon-bg p-1 rounded-full">
                <Star className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs">Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="industry-icon-bg p-1 rounded-full">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs">Deadlines</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EventCalendar;

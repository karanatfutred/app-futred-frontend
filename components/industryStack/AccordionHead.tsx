"use client";

import { Progress } from "@/components/ui/progress";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CollapsibleTrigger } from "@/components/ui/collapsible";

export function AccordionHead({ stack, expandedStacks }) {
  return (
    <div className="border-b">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-500" />
          <h2 className="text-xl font-bold">{stack.title}</h2>
          <p className="text-muted-foreground ml-2">{stack.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            className={
              stack.active
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }
          >
            {stack.active ? "Active" : "Locked"}
          </Badge>
          <CollapsibleTrigger className="rounded-md h-8 w-8 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            {expandedStacks[stack.id] ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mt-2">
          <Progress value={stack.progress} className="h-2 flex-1" />
          <span className="text-sm font-medium">{stack.progress}%</span>
        </div>
      </div>
    </div>
  );
}

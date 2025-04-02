"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Globe, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";
import { stacks } from "@/data/industryStack";
import { AccordionHead } from "@/components/industryStack/AccordionHead";
import { AccordionBody } from "@/components/industryStack/AccordionBody";

export default function IndustryStackPage() {
  const [expandedStacks, setExpandedStacks] = useState<Record<string, boolean>>(
    {
      ls1: true,
      ls2: false,
      ls3: false,
    }
  );

  const toggleStack = (stackId: string) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [stackId]: !prev[stackId],
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Industry Stack</h1>
        <p className="text-muted-foreground">
          Explore the technologies and learning stacks used in modern web
          development
        </p>
      </div>

      {/* Industry Overview Card */}
      <Card className="border-l-4 border-l-brand-midnight">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-midnight" />
            Industry-Aligned Learning Path
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our industry stacks are designed to mirror real-world development
            environments and workflows. Each stack focuses on specific
            technologies and methodologies currently used in the industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-md p-4 bg-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Frontend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                HTML, CSS, JavaScript, React, and responsive design principles.
              </p>
              <Badge className="mt-2 bg-blue-100 text-blue-800">Stack 1</Badge>
            </div>

            <div className="border rounded-md p-4 bg-purple-50">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-5 w-5 text-purple-600" />
                <h3 className="font-medium">Backend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Node.js, Express, databases, and API development.
              </p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">
                Stack 2
              </Badge>
            </div>

            <div className="border rounded-md p-4 bg-green-50">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">DevOps & Deployment</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Docker, CI/CD, cloud services, and monitoring.
              </p>
              <Badge className="mt-2 bg-green-100 text-green-800">
                Stack 3
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {stacks.map((stack) => (
        <Collapsible
          key={stack.id}
          open={expandedStacks[stack.id]}
          onOpenChange={() => toggleStack(stack.id)}
          className="border rounded-lg overflow-hidden bg-white"
        >
          <AccordionHead stack={stack} expandedStacks={expandedStacks} />

          <CollapsibleContent>
            <AccordionBody stack={stack} />
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

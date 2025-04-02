"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart,
  BookOpen,
  Grid,
  Layers,
  Lock,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  Calendar,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import futredLogo from "@/assets/images/futred-logo.png";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("dashboard");
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const [activeSprint, setActiveSprint] = useState<string | null>(null);
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const primaryNavItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Grid,
      path: "/",
      color: "text-white",
    },
    {
      id: "industry-stack",
      label: "Industry Stack",
      icon: Layers,
      path: "/industry-stack",
      color: "text-white",
    },
    {
      id: "learning",
      label: "Learning",
      icon: BookOpen,
      path: "/learning",
      color: "text-brand-yellow",
    },
    {
      id: "progress",
      label: "Progress",
      icon: BarChart,
      path: "/progress",
      color: "text-white",
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: Award,
      path: "/achievements",
      color: "text-brand-yellow",
    },
    {
      id: "team-chat",
      label: "Team Chat",
      icon: MessageSquare,
      path: "/team-chat",
      color: "text-white",
    },
  ];

  const learningStacks = [
    {
      id: "ls1",
      title: "Learning Stack 1",
      active: true,
      sprints: [
        { id: "sprint1", title: "Sprint 1", active: true },
        { id: "sprint2", title: "Sprint 2", active: false },
        { id: "sprint3", title: "Sprint 3", active: false },
      ],
    },
    {
      id: "ls2",
      title: "Learning Stack 2",
      active: false,
      sprints: [],
    },
    {
      id: "ls3",
      title: "Learning Stack 3",
      active: false,
      sprints: [],
    },
  ];

  const learningModules = [
    {
      id: 1,
      title: "BSB50120 Diploma of Business",
      active: true,
      units: [
        {
          id: 1,
          title:
            "Foundations of Critical Thinking and Business Problem Solving",
          active: true,
          externalLink: "https://example.com/course/unit1",
        },
        {
          id: 2,
          title: "Principles of Budgeting and Financial Management",
          active: true,
          externalLink: "https://example.com/course/unit2",
        },
        {
          id: 3,
          title: "Introduction to Sustainable Business Policies and Practices",
          active: true,
          externalLink: "https://example.com/course/unit3",
        },
        {
          id: 4,
          title: "Fundamentals of Business Resource Management",
          active: true,
          externalLink: "https://example.com/course/unit4",
        },
        {
          id: 5,
          title: "Principles of Effective Meetings and Team Dynamics",
          active: true,
          externalLink: "https://example.com/course/unit5",
        },
        {
          id: 6,
          title: "Basics of Human Resource: Recruitment and Talent Management",
          active: true,
          externalLink: "https://example.com/course/unit6",
        },
        {
          id: 7,
          title: "Fundamentals of Operational Planning and Management",
          active: true,
          externalLink: "https://example.com/course/unit7",
        },
        {
          id: 8,
          title: "Introduction to Business Risk Management",
          active: true,
          externalLink: "https://example.com/course/unit8",
        },
        {
          id: 9,
          title:
            "Organizational Behavior: Leadership, Communication, & Team Dynamics",
          active: true,
          externalLink: "https://example.com/course/unit9",
        },
        {
          id: 10,
          title: "Manage people performance",
          active: true,
          externalLink: "https://example.com/course/unit10",
        },
      ],
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      active: false,
    },
    {
      id: 3,
      title: "React Development",
      active: false,
    },
    {
      id: 4,
      title: "Backend Integration",
      active: false,
    },
  ];

  // Set active item based on pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("dashboard");
      setSecondarySidebarOpen(false);
      setActiveStack(null);
      setActiveSprint(null);
    } else if (pathname.startsWith("/learning")) {
      setActiveItem("learning");
      setSecondarySidebarOpen(true);
    } else if (pathname.startsWith("/industry-stack")) {
      setActiveItem("industry-stack");
      setSecondarySidebarOpen(true);

      // Check for stack in the URL
      const stackMatch = pathname.match(/\/industry-stack\/stack\/([^/]+)/);
      if (stackMatch) {
        setActiveStack(stackMatch[1]);

        // Check for sprint in the URL
        const sprintMatch = pathname.match(
          /\/industry-stack\/stack\/[^/]+\/sprint\/([^/]+)/
        );
        if (sprintMatch) {
          setActiveSprint(sprintMatch[1]);
        } else {
          setActiveSprint(null);
        }
      } else {
        setActiveStack(null);
        setActiveSprint(null);
      }
    } else if (pathname.startsWith("/achievements")) {
      setActiveItem("achievements");
      setSecondarySidebarOpen(false);
    } else {
      const item = primaryNavItems.find((item) =>
        pathname.startsWith(item.path)
      );
      if (item) {
        setActiveItem(item.id);
        setSecondarySidebarOpen(
          item.id === "learning" || item.id === "industry-stack"
        );
        if (item.id !== "learning" && item.id !== "industry-stack") {
          setActiveStack(null);
          setActiveSprint(null);
        }
      }
    }
  }, [pathname]);

  const handlePrimaryNavClick = (item: (typeof primaryNavItems)[0]) => {
    setActiveItem(item.id);

    if (item.id === "learning") {
      setSecondarySidebarOpen(true);
      router.push("/learning");
    } else if (item.id === "industry-stack") {
      setSecondarySidebarOpen(true);
      router.push("/industry-stack");
    } else {
      setSecondarySidebarOpen(false);
      router.push(item.path);
    }
  };

  const handleStackClick = (stack: (typeof learningStacks)[0]) => {
    if (!stack.active) return;

    setActiveStack(stack.id);
    router.push(`/industry-stack/stack/${stack.id}`);
  };

  const handleSprintClick = (
    stackId: string,
    sprint: { id: string; title: string; active: boolean }
  ) => {
    if (!sprint.active) return;

    setActiveSprint(sprint.id);
    router.push(`/industry-stack/stack/${stackId}/sprint/${sprint.id}`);
  };

  const handleModuleSelect = (moduleId: number) => {
    const module = learningModules.find((m) => m.id === moduleId);
    if (!module?.active) return;

    setExpandedModule(moduleId === expandedModule ? null : moduleId);

    if (moduleId === 1) {
      router.push("/learning");
    }
  };

  const handleUnitSelect = (externalLink: string) => {
    // Open external link in new tab
    window.open(externalLink, "_blank");
  };

  // Determine which secondary sidebar to show
  const renderSecondarySidebar = () => {
    if (!secondarySidebarOpen) return null;

    if (activeItem === "learning") {
      return (
        <div className="w-64 h-full border-r bg-white flex flex-col">
          <div className="p-4 border-b h-[61px] flex items-center bg-brand-yellow text-brand-midnight">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-midnight" />
              <span className="font-semibold">Learning Modules</span>
            </div>
          </div>

          <div className="flex-1 py-4 overflow-auto">
            <div className="space-y-1 px-2">
              {learningModules.map((module) => (
                <Collapsible
                  key={module.id}
                  open={module.id === expandedModule}
                  onOpenChange={() => handleModuleSelect(module.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 font-normal h-10",
                        module.id === 1 &&
                          pathname === "/learning" &&
                          "bg-brand-yellow/10 text-brand-midnight",
                        !module.active && "opacity-50"
                      )}
                      disabled={!module.active}
                      onClick={() => {
                        if (module.id === 1) {
                          router.push("/learning");
                        }
                      }}
                    >
                      {module.active ? (
                        <BookOpen className="h-5 w-5 text-brand-yellow" />
                      ) : (
                        <Lock className="h-5 w-5 text-gray-400" />
                      )}
                      <span className="truncate">{module.title}</span>
                      {module.active &&
                        module.id === 1 &&
                        (expandedModule === module.id ? (
                          <ChevronDown className="ml-auto h-4 w-4" />
                        ) : (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        ))}
                    </Button>
                  </CollapsibleTrigger>
                  {module.id === 1 && (
                    <CollapsibleContent>
                      {/* No units displayed, just empty space or a message */}
                      <div className="py-2 px-4 text-sm text-muted-foreground">
                        Access all units on the learning page
                      </div>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (activeItem === "industry-stack") {
      return (
        <div className="w-64 h-full border-r bg-white flex flex-col">
          <div className="p-4 border-b h-[61px] flex items-center bg-white text-brand-midnight">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-midnight" />
              <span className="font-semibold">Industry Stacks</span>
            </div>
          </div>

          <div className="flex-1 py-4 overflow-auto">
            <div className="px-2 space-y-1">
              {learningStacks.map((stack) => (
                <Collapsible
                  key={stack.id}
                  open={activeStack === stack.id}
                  onOpenChange={(open) => {
                    if (open && stack.active) {
                      handleStackClick(stack);
                    }
                  }}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 font-normal h-10",
                        activeStack === stack.id &&
                          "bg-brand-midnight/10 text-brand-midnight",
                        !stack.active && "opacity-50"
                      )}
                      disabled={!stack.active}
                    >
                      <Calendar
                        className={cn(
                          "h-5 w-5",
                          stack.active ? "text-brand-midnight" : "text-gray-400"
                        )}
                      />
                      <span>{stack.title}</span>
                      {stack.active &&
                        (activeStack === stack.id ? (
                          <ChevronDown className="ml-auto h-4 w-4" />
                        ) : (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        ))}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-1 mt-1 pl-2">
                      {stack.sprints.map((sprint) => (
                        <li key={sprint.id}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-start gap-2 font-normal h-8 text-sm",
                              activeSprint === sprint.id &&
                                "bg-brand-midnight/10 text-brand-midnight",
                              !sprint.active && "text-gray-400"
                            )}
                            disabled={!sprint.active}
                            onClick={() => handleSprintClick(stack.id, sprint)}
                          >
                            {sprint.active ? (
                              <div className="w-2 h-2 rounded-full bg-brand-midnight" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-gray-300" />
                            )}
                            <span>{sprint.title}</span>
                            {sprint.active && (
                              <ChevronRight className="ml-auto h-4 w-4" />
                            )}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex h-full">
      {/* Primary Sidebar */}
      <div
        className={cn(
          "h-full border-r transition-all duration-300 flex flex-col bg-brand-midnight text-white",
          secondarySidebarOpen ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-center h-[61px]">
          {!secondarySidebarOpen && (
            <div className="flex items-center gap-2">
              <Image
                src={futredLogo}
                alt="Futred"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          )}
          {secondarySidebarOpen && (
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-brand-yellow"></div>
            </div>
          )}
        </div>

        <div className="flex-1 py-4 overflow-auto">
          <ul className="space-y-1 px-2">
            {primaryNavItems.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 font-normal h-10 text-white hover:bg-white/10",
                    activeItem === item.id && "bg-white/10",
                    secondarySidebarOpen && "justify-center px-2"
                  )}
                  onClick={() => handlePrimaryNavClick(item)}
                >
                  <item.icon className={cn("h-5 w-5", item.color)} />
                  {!secondarySidebarOpen && <span>{item.label}</span>}
                  {!secondarySidebarOpen &&
                    (item.id === "learning" ||
                      item.id === "industry-stack") && (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Secondary Sidebar - Learning Modules or Learning Stacks */}
      {renderSecondarySidebar()}
    </div>
  );
}

import {
  BookOpen,
  CheckCircle,
  Calendar,
  ArrowRight,
  Layers,
  Award,
  ChevronRight,
  Clock,
  Star,
  Zap,
  Target,
  Users,
  Bell,
} from "lucide-react";
// Current learning module data
export const currentModule = {
  id: "frontend-fundamentals",
  name: "Frontend Fundamentals",
  progress: 55,
  currentUnit: "JavaScript Fundamentals",
  unitProgress: 65,
  totalModules: 8,
  completedModules: 4,
  nextMilestone: "Complete JavaScript Assignment",
  nextMilestoneDue: "Today",
};

// Current industry stack data
export const currentStack = {
  id: "ls1",
  name: "Learning Stack 1: Frontend Development",
  progress: 35,
  currentSprint: {
    id: "sprint1",
    name: "Sprint 1: HTML & CSS Fundamentals",
    progress: 35,
    startDate: "May 1, 2025",
    endDate: "May 14, 2025",
    daysRemaining: 8,
    totalTasks: 12,
    completedTasks: 4,
    remainingTasks: 8,
  },
  totalSprints: 3,
  currentSprintNumber: 1,
};

// Calendar events data
export const calendarEvents = [
  {
    id: 1,
    title: "JavaScript Assignment Due",
    date: "May 5, 2025",
    time: "11:59 PM",
    type: "assignment",
    module: "JavaScript Fundamentals",
  },
  {
    id: 2,
    title: "Team Sprint Review",
    date: "May 7, 2025",
    time: "2:00 PM",
    type: "meeting",
    module: "Sprint 1",
  },
  {
    id: 3,
    title: "CSS Workshop",
    date: "May 10, 2025",
    time: "10:00 AM",
    type: "workshop",
    module: "HTML & CSS Fundamentals",
  },
  {
    id: 4,
    title: "Sprint 1 Submission",
    date: "May 14, 2025",
    time: "5:00 PM",
    type: "deadline",
    module: "Sprint 1",
  },
];

// Learning journey milestones
export const journeyMilestones = [
  {
    id: 1,
    title: "HTML Basics",
    status: "completed",
    date: "April 20, 2025",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    status: "completed",
    date: "April 27, 2025",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "JavaScript Basics",
    status: "in-progress",
    date: "Current focus",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Responsive Design",
    status: "upcoming",
    date: "Starts May 15, 2025",
    icon: <Target className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "Frontend Frameworks",
    status: "upcoming",
    date: "Starts May 29, 2025",
    icon: <Target className="h-4 w-4" />,
  },
];

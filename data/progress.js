import { Award, CheckCircle, Clock, Target } from "lucide-react";
export const skills = [
  { name: "HTML & CSS", level: 85, lastImproved: "2 days ago", trend: "+5%" },
  { name: "JavaScript", level: 70, lastImproved: "1 week ago", trend: "+3%" },
  { name: "React", level: 65, lastImproved: "3 days ago", trend: "+7%" },
  { name: "Node.js", level: 50, lastImproved: "2 weeks ago", trend: "+2%" },
  { name: "TypeScript", level: 60, lastImproved: "5 days ago", trend: "+4%" },
  { name: "UI/UX Design", level: 75, lastImproved: "1 day ago", trend: "+6%" },
];

export const courses = [
  {
    name: "Frontend Development Basics",
    completed: 75,
    totalUnits: 8,
    completedUnits: 6,
    dueDate: "May 15, 2025",
  },
  {
    name: "JavaScript Advanced Concepts",
    completed: 30,
    totalUnits: 10,
    completedUnits: 3,
    dueDate: "May 30, 2025",
  },
  {
    name: "React Fundamentals",
    completed: 90,
    totalUnits: 6,
    completedUnits: 5,
    dueDate: "Completed",
  },
  {
    name: "TypeScript for React Developers",
    completed: 45,
    totalUnits: 7,
    completedUnits: 3,
    dueDate: "June 10, 2025",
  },
];

export const learningStacks = [
  {
    id: "ls1",
    title: "Learning Stack 1",
    description: "Frontend Development Fundamentals",
    progress: 35,
    startDate: "May 1, 2025",
    endDate: "June 11, 2025",
    sprints: [
      {
        id: "sprint1",
        title: "Sprint 1",
        progress: 35,
        status: "In Progress",
        tasks: 12,
        completedTasks: 4,
        startDate: "May 1, 2025",
        endDate: "May 14, 2025",
      },
      {
        id: "sprint2",
        title: "Sprint 2",
        progress: 0,
        status: "Not Started",
        tasks: 15,
        completedTasks: 0,
        startDate: "May 15, 2025",
        endDate: "May 28, 2025",
      },
      {
        id: "sprint3",
        title: "Sprint 3",
        progress: 0,
        status: "Not Started",
        tasks: 18,
        completedTasks: 0,
        startDate: "May 29, 2025",
        endDate: "June 11, 2025",
      },
    ],
  },
  {
    id: "ls2",
    title: "Learning Stack 2",
    description: "Backend Development Essentials",
    progress: 0,
    startDate: "June 15, 2025",
    endDate: "July 26, 2025",
    sprints: [
      {
        id: "sprint1",
        title: "Sprint 1",
        progress: 0,
        status: "Not Started",
        tasks: 10,
        completedTasks: 0,
        startDate: "June 15, 2025",
        endDate: "June 28, 2025",
      },
      {
        id: "sprint2",
        title: "Sprint 2",
        progress: 0,
        status: "Not Started",
        tasks: 12,
        completedTasks: 0,
        startDate: "June 29, 2025",
        endDate: "July 12, 2025",
      },
      {
        id: "sprint3",
        title: "Sprint 3",
        progress: 0,
        status: "Not Started",
        tasks: 15,
        completedTasks: 0,
        startDate: "July 13, 2025",
        endDate: "July 26, 2025",
      },
    ],
  },
];

export const achievements = [
  {
    title: "HTML Master",
    description: "Completed all HTML modules",
    date: "Apr 15, 2025",
    icon: Award,
  },
  {
    title: "CSS Wizard",
    description: "Built 5 responsive layouts",
    date: "Apr 22, 2025",
    icon: Award,
  },
  {
    title: "First Sprint",
    description: "Completed your first sprint",
    date: "May 5, 2025",
    icon: CheckCircle,
    upcoming: true,
  },
];

export const weeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.0 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.0 },
  { day: "Sat", hours: 0.5 },
  { day: "Sun", hours: 0 },
];

export const upcomingDeadlines = [
  {
    title: "Complete JavaScript Assignment",
    date: "May 5, 2025",
    type: "Task",
    priority: "High",
  },
  {
    title: "Sprint 1 Review",
    date: "May 14, 2025",
    type: "Meeting",
    priority: "Medium",
  },
  {
    title: "Frontend Project Submission",
    date: "May 20, 2025",
    type: "Deadline",
    priority: "High",
  },
];

export const journeyMilestones = [
  {
    id: 1,
    title: "HTML Basics",
    status: "completed",
    date: "April 20, 2025",
    icon: <CheckCircle className="h-4 w-4" />,
    description:
      "Mastered HTML document structure, semantic elements, and forms",
    skills: ["HTML5", "Semantic Markup", "Forms"],
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    status: "completed",
    date: "April 27, 2025",
    icon: <CheckCircle className="h-4 w-4" />,
    description:
      "Learned CSS selectors, box model, and responsive design principles",
    skills: ["CSS3", "Flexbox", "Media Queries"],
  },
  {
    id: 3,
    title: "JavaScript Basics",
    status: "in-progress",
    date: "Current focus",
    icon: <Clock className="h-4 w-4" />,
    description: "Learning JavaScript syntax, functions, and DOM manipulation",
    skills: ["JavaScript", "DOM", "Events"],
    progress: 65,
  },
  {
    id: 4,
    title: "Responsive Design",
    status: "upcoming",
    date: "Starts May 15, 2025",
    icon: <Target className="h-4 w-4" />,
    description: "Will focus on mobile-first design and responsive frameworks",
    skills: ["Mobile-First", "Bootstrap", "Tailwind"],
  },
  {
    id: 5,
    title: "Frontend Frameworks",
    status: "upcoming",
    date: "Starts May 29, 2025",
    icon: <Target className="h-4 w-4" />,
    description: "Will introduce React and other modern frontend frameworks",
    skills: ["React", "State Management", "Components"],
  },
];

import { BookOpen, Code, Users, CheckCircle } from "lucide-react";

export const achievementStats = {
  totalPoints: 1250,
  rank: "Explorer",
  nextRank: "Innovator",
  pointsToNextRank: 750,
  totalAchievements: 5,
  totalAvailable: 24,
};

export const earnedAchievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first learning module",
    icon: <BookOpen className="h-5 w-5 text-brand-yellow" />,
    earnedDate: "April 15, 2025",
    points: 100,
    isNew: true,
    category: "Learning",
  },
  {
    id: 2,
    title: "Team Player",
    description: "Participate in your first team discussion",
    icon: <Users className="h-5 w-5 text-brand-skyblue" />,
    earnedDate: "April 18, 2025",
    points: 150,
    isNew: false,
    category: "Collaboration",
  },
  {
    id: 3,
    title: "Code Ninja",
    description: "Submit 5 coding assignments with perfect scores",
    icon: <Code className="h-5 w-5 text-brand-skyblue" />,
    earnedDate: "April 22, 2025",
    points: 300,
    isNew: false,
    category: "Technical",
  },
];

export const inProgressAchievements = [
  {
    id: 6,
    title: "Feedback Master",
    description: "Provide constructive feedback to 5 team members",
    icon: <Users className="h-5 w-5 text-brand-skyblue" />,
    progress: 60,
    currentValue: 3,
    targetValue: 5,
    points: 250,
    category: "Collaboration",
  },
  {
    id: 7,
    title: "Perfect Attendance",
    description: "Attend 10 consecutive team meetings",
    icon: <CheckCircle className="h-5 w-5 text-brand-skyblue" />,
    progress: 40,
    currentValue: 4,
    targetValue: 10,
    points: 350,
    category: "Participation",
  },
];

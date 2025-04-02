export const channels = [
  { id: "general", name: "General", unread: 0, type: "channel" },
  {
    id: "project-discussion",
    name: "Project Discussion",
    unread: 3,
    type: "channel",
  },
  { id: "random", name: "Random", unread: 0, type: "channel" },
  { id: "help", name: "Help & Support", unread: 1, type: "channel" },
];

export const directMessages = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    status: "online",
    unread: 2,
    avatar: "SJ",
  },
  {
    id: "mike",
    name: "Mike Thompson",
    status: "away",
    unread: 0,
    avatar: "MT",
  },
  { id: "alex", name: "Alex Chen", status: "offline", unread: 0, avatar: "AC" },
  {
    id: "jessica",
    name: "Jessica Lee",
    status: "online",
    unread: 0,
    avatar: "JL",
  },
];

export const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    avatar: "SJ",
    content: "Has everyone reviewed the latest project requirements?",
    time: "10:30 AM",
    reactions: [
      { emoji: "👍", count: 2 },
      { emoji: "❤️", count: 1 },
    ],
    replies: 2,
  },
  {
    id: 2,
    sender: "Mike Thompson",
    avatar: "MT",
    content:
      "Yes, I've gone through them. I have a few questions about the API integration.",
    time: "10:32 AM",
    reactions: [],
    replies: 0,
  },
  {
    id: 3,
    sender: "You",
    avatar: "JD",
    content: "I'm still reviewing them. Will finish by lunch time.",
    time: "10:35 AM",
    isCurrentUser: true,
    reactions: [{ emoji: "👍", count: 1 }],
    replies: 0,
  },
  {
    id: 4,
    sender: "Alex Chen",
    avatar: "AC",
    content:
      "I've created a document with some initial thoughts. Will share it soon.",
    time: "10:40 AM",
    reactions: [],
    replies: 0,
    files: [{ name: "Project_Notes.docx", size: "245 KB", type: "document" }],
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    avatar: "SJ",
    content:
      "Great! Let's discuss this in our meeting tomorrow. I've also attached the design mockups for reference.",
    time: "10:45 AM",
    reactions: [],
    replies: 0,
    files: [{ name: "Design_Mockups.png", size: "1.2 MB", type: "image" }],
  },
];

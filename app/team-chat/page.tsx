"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Paperclip,
  Smile,
  MoreHorizontal,
  Search,
  Users,
  MessageSquare,
  Hash,
  Bell,
  BellOff,
  ThumbsUp,
  Video,
  Phone,
  Image,
  File,
  Mic,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { channels, directMessages, messages } from "@/data/teamChat";

export default function TeamChatPage() {
  const [activeChat, setActiveChat] = useState("project-discussion");
  const [messageText, setMessageText] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, you would add the message to the messages array
      // and possibly send it to a backend
      setMessageText("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image className="h-4 w-4" />;
      case "document":
        return <File className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 border-r bg-gray-50 flex flex-col">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="pl-8 bg-white"
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <Tabs defaultValue="channels" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="channels"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-700 rounded-none py-2"
                >
                  <Hash className="h-4 w-4 mr-1" />
                  Channels
                </TabsTrigger>
                <TabsTrigger
                  value="direct"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-700 rounded-none py-2"
                >
                  <Users className="h-4 w-4 mr-1" />
                  Direct
                </TabsTrigger>
              </TabsList>

              <TabsContent value="channels" className="m-0 pt-2">
                <div className="space-y-1 px-1">
                  {channels.map((channel) => (
                    <button
                      key={channel.id}
                      className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm ${
                        activeChat === channel.id
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveChat(channel.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-gray-500" />
                        <span>{channel.name}</span>
                      </div>
                      {channel.unread > 0 && (
                        <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                          {channel.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="direct" className="m-0 pt-2">
                <div className="space-y-1 px-1">
                  {directMessages.map((dm) => (
                    <button
                      key={dm.id}
                      className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm ${
                        activeChat === dm.id
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveChat(dm.id)}
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>{dm.avatar}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white ${getStatusColor(
                              dm.status
                            )}`}
                          ></div>
                        </div>
                        <span>{dm.name}</span>
                      </div>
                      {dm.unread > 0 && (
                        <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                          {dm.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b px-4 py-2 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-gray-500" />
              <h2 className="font-semibold">Project Discussion</h2>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Start call</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Start video call</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notification settings</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Users className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Show members</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Search in conversation</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4 bg-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.isCurrentUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback>{message.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.isCurrentUser
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between gap-4 mb-1">
                        <span
                          className={`font-medium ${
                            message.isCurrentUser
                              ? "text-blue-50"
                              : "text-gray-700"
                          }`}
                        >
                          {message.sender}
                        </span>
                        <span
                          className={`text-xs ${
                            message.isCurrentUser
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.time}
                        </span>
                      </div>
                      <p className="mt-1">{message.content}</p>

                      {message.files && message.files.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {message.files.map((file, index) => (
                            <div
                              key={index}
                              className={`flex items-center gap-2 p-2 rounded ${
                                message.isCurrentUser
                                  ? "bg-blue-600"
                                  : "bg-gray-200"
                              }`}
                            >
                              {getFileIcon(file.type)}
                              <div className="flex-1 min-w-0">
                                <div className="truncate text-sm font-medium">
                                  {file.name}
                                </div>
                                <div className="text-xs opacity-80">
                                  {file.size}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={
                                  message.isCurrentUser
                                    ? "text-white hover:bg-blue-700"
                                    : "hover:bg-gray-300"
                                }
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Reactions and Replies */}
                    <div className="flex items-center gap-1 mt-1 ml-2">
                      {message.reactions.length > 0 && (
                        <div
                          className={`flex items-center gap-0.5 text-xs rounded-full px-2 py-0.5 ${
                            message.isCurrentUser
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {message.reactions.map((reaction, index) => (
                            <span key={index}>
                              {reaction.emoji} {reaction.count}
                            </span>
                          ))}
                        </div>
                      )}

                      {message.replies > 0 && (
                        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {message.replies}{" "}
                          {message.replies === 1 ? "reply" : "replies"}
                        </button>
                      )}

                      <div className="flex-1"></div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-gray-600"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <ThumbsUp className="h-4 w-4" /> React
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" /> Reply
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <BellOff className="h-4 w-4" /> Mute thread
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-3 bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-gray-50 rounded-md p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <Smile className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                >
                  <Send className="h-4 w-4 mr-1" />
                  Send
                </Button>
              </div>

              <div className="flex items-center gap-2 px-2 text-xs text-gray-500">
                <span>Press Enter to send, Shift+Enter for new line</span>
                <div className="flex-1"></div>
                <button className="hover:text-gray-700">Formatting</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

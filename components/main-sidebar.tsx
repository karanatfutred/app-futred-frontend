"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { BarChart, BookOpen, Grid, Layers, MessageSquare } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export function MainSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { setOpen, open, setOpenMobile } = useSidebar()

  const menuItems = [
    {
      icon: Grid,
      label: "Dashboard",
      path: "/",
      color: "text-blue-500",
    },
    {
      icon: Layers,
      label: "Industry Stack",
      path: "/industry-stack",
      color: "text-blue-500",
    },
    {
      icon: BookOpen,
      label: "Learning",
      path: "/learning",
      color: "text-yellow-500",
    },
    {
      icon: BarChart,
      label: "Progress",
      path: "/progress",
      color: "text-blue-500",
    },
    {
      icon: MessageSquare,
      label: "Team Chat",
      path: "/team-chat",
      color: "text-blue-500",
    },
  ]

  // Handle navigation and sidebar state
  const handleNavigation = (path: string) => {
    router.push(path)

    // If navigating to a path that should open the secondary sidebar
    if (path === "/learning") {
      // Close this sidebar and open the secondary one
      setOpen(false)
    } else {
      // For other paths, ensure the secondary sidebar is closed
      setOpenMobile(false)
    }
  }

  // Close main sidebar when on learning path
  useEffect(() => {
    if (pathname.startsWith("/learning") && open) {
      setOpen(false)
    }
  }, [pathname, open, setOpen])

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-yellow-500 flex items-center justify-center text-white font-bold">
            L
          </div>
          <span className="font-bold text-lg">LearnDash</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                isActive={item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)}
                onClick={() => handleNavigation(item.path)}
                className="justify-start"
              >
                <item.icon className={item.color} />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


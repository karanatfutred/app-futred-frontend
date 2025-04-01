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
import { BookOpen, Lock } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export function SecondarySidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { open, setOpen, setOpenMobile } = useSidebar()

  const modules = [
    {
      id: 1,
      title: "Frontend Fundamentals",
      active: true,
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
  ]

  // Open this sidebar when on learning path
  useEffect(() => {
    if (pathname.startsWith("/learning") && !open) {
      setOpen(true)
    } else if (!pathname.startsWith("/learning") && open) {
      setOpen(false)
    }
  }, [pathname, open, setOpen])

  // Handle module selection
  const handleModuleSelect = (moduleId: number) => {
    if (moduleId === 1) {
      router.push("/learning")
      setOpenMobile(false)
    }
  }

  // Only show this sidebar on learning paths
  if (!pathname.startsWith("/learning")) {
    return null
  }

  return (
    <Sidebar side="left" className="border-r">
      <SidebarHeader className="flex items-center h-14 px-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">Learning Modules</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {modules.map((module) => (
            <SidebarMenuItem key={module.id}>
              <SidebarMenuButton
                isActive={module.id === 1 && pathname === "/learning"}
                onClick={() => handleModuleSelect(module.id)}
                className={`justify-start ${!module.active && "opacity-50"}`}
                disabled={!module.active}
              >
                {module.active ? <BookOpen className="text-yellow-500" /> : <Lock className="text-gray-400" />}
                <span>{module.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


"use client"

import { Bell, Menu, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border py-3 px-4 flex items-center justify-between bg-brand-midnight text-white">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-auto">
            <Image src="/images/futred-logo.png" alt="Futred" width={120} height={40} className="h-full w-auto" />
          </div>
        </Link>
      </div>

      <div className="relative max-w-md flex-1 mx-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-full md:w-[300px] lg:w-[400px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-brand-yellow rounded-full"></span>
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback className="bg-brand-yellow text-brand-midnight font-medium">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}


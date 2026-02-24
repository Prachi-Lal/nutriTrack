"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, CalendarDays, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MobileSidebar } from "./mobile-sidebar"

export function DashboardHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
          <div>
            <h2
              className="text-lg font-semibold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Good Morning, Alex
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="size-3.5" />
              <time dateTime={new Date().toISOString().split("T")[0]}>
                {today}
              </time>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground" aria-label="Search">
            <Search className="size-[18px]" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="relative text-muted-foreground" aria-label="Notifications">
            <Bell className="size-[18px]" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          </Button>
          <div className="ml-2 flex items-center gap-2.5">
            <Avatar className="size-9 ring-2 ring-border">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="Alex Thompson" />
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">AT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  UtensilsCrossed,
  Droplets,
  Moon,
  TrendingUp,
  Lightbulb,
  User,
  Leaf,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Log Meal", icon: UtensilsCrossed, active: false },
  { label: "Water Intake", icon: Droplets, active: false },
  { label: "Sleep Tracker", icon: Moon, active: false },
  { label: "Trends & Analytics", icon: TrendingUp, active: false },
  { label: "Recommendations", icon: Lightbulb, active: false },
  { label: "Profile", icon: User, active: false },
]

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center size-8 rounded-xl bg-primary">
              <Leaf className="size-4 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>NutriTrack</span>
          </div>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close menu">
            <X className="size-5" />
          </Button>
        </div>
        <nav className="px-3 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={onClose}
                  aria-current={item.active ? "page" : undefined}
                >
                  <item.icon className="size-[18px]" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

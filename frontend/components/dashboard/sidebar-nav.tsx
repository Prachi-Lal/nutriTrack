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
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Log Meal", icon: UtensilsCrossed, active: false },
  { label: "Water Intake", icon: Droplets, active: false },
  { label: "Sleep Tracker", icon: Moon, active: false },
  { label: "Trends & Analytics", icon: TrendingUp, active: false },
  { label: "Recommendations", icon: Lightbulb, active: false },
  { label: "Profile", icon: User, active: false },
]

export function SidebarNav() {
  return (
    <aside className="hidden lg:flex lg:w-64 flex-col border-r border-border bg-card h-screen sticky top-0">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-border">
        <div className="flex items-center justify-center size-9 rounded-xl bg-primary">
          <Leaf className="size-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            NutriTrack
          </h1>
          <p className="text-[11px] text-muted-foreground leading-none">
            Intelligence & Health
          </p>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4">
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
                aria-current={item.active ? "page" : undefined}
              >
                <item.icon className="size-[18px]" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 py-4 border-t border-border">
        <div className="rounded-xl bg-accent/60 p-4">
          <p className="text-xs font-semibold text-foreground mb-1">
            Upgrade to Pro
          </p>
          <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
            Unlock AI-powered meal plans and advanced analytics.
          </p>
          <button className="w-full rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  )
}

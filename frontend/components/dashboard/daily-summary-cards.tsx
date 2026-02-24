import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Drumstick, Droplets, Moon } from "lucide-react"

const summaryData = [
  {
    label: "Calories",
    icon: Flame,
    current: 1650,
    target: 2200,
    unit: "kcal",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    progressColor: "[&_[data-slot=progress-indicator]]:bg-chart-1",
  },
  {
    label: "Protein",
    icon: Drumstick,
    current: 85,
    target: 120,
    unit: "g",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    progressColor: "[&_[data-slot=progress-indicator]]:bg-chart-2",
  },
  {
    label: "Water Intake",
    icon: Droplets,
    current: 6,
    target: 8,
    unit: "glasses",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    progressColor: "[&_[data-slot=progress-indicator]]:bg-chart-5",
  },
  {
    label: "Sleep",
    icon: Moon,
    current: 7,
    target: 8,
    unit: "hours",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    progressColor: "[&_[data-slot=progress-indicator]]:bg-chart-4",
  },
]

export function DailySummaryCards() {
  return (
    <section aria-label="Daily Summary">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryData.map((item) => {
          const percent = Math.round((item.current / item.target) * 100)
          return (
            <Card key={item.label} className="py-5 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="px-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`flex items-center justify-center size-9 rounded-lg ${item.bgColor}`}>
                      <item.icon className={`size-[18px] ${item.color}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {percent}%
                  </span>
                </div>
                <div className="mb-2.5">
                  <span className="text-2xl font-semibold text-foreground tracking-tight">
                    {item.current}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    / {item.target} {item.unit}
                  </span>
                </div>
                <Progress
                  value={percent}
                  className={`h-2 bg-muted ${item.progressColor}`}
                  aria-label={`${item.label}: ${percent}% of target`}
                />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

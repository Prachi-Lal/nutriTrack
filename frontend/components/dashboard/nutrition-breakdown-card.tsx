import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const macros = [
  {
    name: "Protein",
    current: 85,
    target: 120,
    unit: "g",
    color: "[&_[data-slot=progress-indicator]]:bg-chart-2",
    dotColor: "bg-chart-2",
  },
  {
    name: "Carbs",
    current: 210,
    target: 280,
    unit: "g",
    color: "[&_[data-slot=progress-indicator]]:bg-chart-3",
    dotColor: "bg-chart-3",
  },
  {
    name: "Fats",
    current: 52,
    target: 70,
    unit: "g",
    color: "[&_[data-slot=progress-indicator]]:bg-chart-1",
    dotColor: "bg-chart-1",
  },
]

export function NutritionBreakdownCard() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle
          className="text-base"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Nutrition Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          {macros.map((macro) => {
            const percent = Math.round((macro.current / macro.target) * 100)
            const remaining = macro.target - macro.current
            return (
              <div key={macro.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`size-2.5 rounded-full ${macro.dotColor}`} />
                    <span className="text-sm font-medium text-foreground">
                      {macro.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      {macro.current}{macro.unit}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      / {macro.target}{macro.unit}
                    </span>
                  </div>
                </div>
                <Progress
                  value={percent}
                  className={`h-2.5 bg-muted rounded-full ${macro.color}`}
                  aria-label={`${macro.name}: ${percent}% of target`}
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  {remaining}{macro.unit} remaining for today
                </p>
              </div>
            )
          })}
        </div>
        <div className="mt-6 rounded-xl bg-accent/50 p-4">
          <p className="text-xs font-semibold text-foreground mb-1">Daily Calorie Split</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-chart-2" />
              Protein 34%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-chart-3" />
              Carbs 51%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-chart-1" />
              Fats 15%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

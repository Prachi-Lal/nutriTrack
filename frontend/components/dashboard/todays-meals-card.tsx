import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Coffee, Sun, Sunset, Cookie } from "lucide-react"

const meals = [
  {
    name: "Breakfast",
    icon: Coffee,
    time: "8:30 AM",
    items: "Oatmeal, banana, almonds",
    calories: 420,
    protein: 18,
  },
  {
    name: "Lunch",
    icon: Sun,
    time: "1:00 PM",
    items: "Grilled chicken salad, rice",
    calories: 650,
    protein: 42,
  },
  {
    name: "Dinner",
    icon: Sunset,
    time: "7:30 PM",
    items: "Paneer tikka, roti, dal",
    calories: 480,
    protein: 22,
  },
  {
    name: "Snacks",
    icon: Cookie,
    time: "4:00 PM",
    items: "Protein bar, green tea",
    calories: 100,
    protein: 3,
  },
]

export function TodaysMealsCard() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle
          className="text-base"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {"Today's Meals"}
        </CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
            <Plus className="size-3.5" />
            Add Meal
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {meals.map((meal, index) => (
            <div
              key={meal.name}
              className={`flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-accent/50 ${
                index < meals.length - 1 ? "" : ""
              }`}
            >
              <div className="flex items-center justify-center size-10 rounded-lg bg-accent shrink-0">
                <meal.icon className="size-[18px] text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {meal.name}
                  </h4>
                  <span className="text-[11px] text-muted-foreground">
                    {meal.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {meal.items}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold text-foreground">
                  {meal.calories} kcal
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {meal.protein}g protein
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

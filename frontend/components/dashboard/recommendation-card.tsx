import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ArrowRight } from "lucide-react"

export function RecommendationCard() {
  return (
    <Card className="border-primary/20 bg-primary/[0.03] shadow-sm">
      <CardContent className="px-5 py-5">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 shrink-0">
            <Lightbulb className="size-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <h3
                className="text-sm font-semibold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Smart Recommendation
              </h3>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">
                AI Insight
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              You are 35g short on protein today. Consider adding paneer, tofu,
              eggs, or chicken to your next meal to hit your daily target.
            </p>
            <Button size="sm" className="gap-1.5">
              View Meal Suggestions
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

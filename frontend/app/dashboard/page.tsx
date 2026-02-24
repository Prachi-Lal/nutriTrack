import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DailySummaryCards } from "@/components/dashboard/daily-summary-cards"
import { NutritionBreakdownCard } from "@/components/dashboard/nutrition-breakdown-card"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"
import { TodaysMealsCard } from "@/components/dashboard/todays-meals-card"
import { TrendsPreviewCard } from "@/components/dashboard/trends-preview-card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      <div className="flex flex-1 flex-col min-w-0">
        <DashboardHeader />
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-6xl flex flex-col gap-6">
            {/* Section 1: Daily Summary Cards */}
            <DailySummaryCards />

            {/* Section 2 + 3: Nutrition Breakdown + Recommendation */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <NutritionBreakdownCard />
              <div className="flex flex-col gap-6">
                <RecommendationCard />
                <TodaysMealsCard />
              </div>
            </div>

            {/* Section 5: Trends Preview */}
            <TrendsPreviewCard />
          </div>
        </main>
      </div>
    </div>
  )
}

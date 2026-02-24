"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const caloriesData = [
  { day: "Mon", value: 2100 },
  { day: "Tue", value: 1850 },
  { day: "Wed", value: 2300 },
  { day: "Thu", value: 1950 },
  { day: "Fri", value: 2200 },
  { day: "Sat", value: 1700 },
  { day: "Sun", value: 1650 },
]

const proteinData = [
  { day: "Mon", value: 110 },
  { day: "Tue", value: 95 },
  { day: "Wed", value: 125 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 105 },
  { day: "Sat", value: 78 },
  { day: "Sun", value: 85 },
]

const sleepData = [
  { day: "Mon", value: 7.5 },
  { day: "Tue", value: 6.8 },
  { day: "Wed", value: 8.0 },
  { day: "Thu", value: 7.2 },
  { day: "Fri", value: 6.5 },
  { day: "Sat", value: 8.5 },
  { day: "Sun", value: 7.0 },
]

function MiniTooltip({ active, payload, label, unit }: { active?: boolean; payload?: Array<{ value: number }>; label?: string; unit: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-xs font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">
          {payload[0].value} {unit}
        </p>
      </div>
    )
  }
  return null
}

export function TrendsPreviewCard() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle
          className="text-base"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          7-Day Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Calories Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-muted-foreground">Calories</p>
              <p className="text-xs text-muted-foreground">Avg: 1,964 kcal</p>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={caloriesData}>
                  <defs>
                    <linearGradient id="caloriesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.55 0.2 260)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="oklch(0.55 0.2 260)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.005 260)" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "oklch(0.5 0.02 260)" }}
                  />
                  <Tooltip content={<MiniTooltip unit="kcal" />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="oklch(0.55 0.2 260)"
                    strokeWidth={2}
                    fill="url(#caloriesGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Protein Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-muted-foreground">Protein</p>
              <p className="text-xs text-muted-foreground">Avg: 98g</p>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={proteinData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.005 260)" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "oklch(0.5 0.02 260)" }}
                  />
                  <Tooltip content={<MiniTooltip unit="g" />} />
                  <Bar
                    dataKey="value"
                    fill="oklch(0.65 0.15 170)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Sleep Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-muted-foreground">Sleep</p>
              <p className="text-xs text-muted-foreground">Avg: 7.4 hrs</p>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sleepData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.005 260)" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "oklch(0.5 0.02 260)" }}
                  />
                  <YAxis
                    domain={[5, 10]}
                    hide
                  />
                  <Tooltip content={<MiniTooltip unit="hrs" />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="oklch(0.6 0.18 300)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "oklch(0.6 0.18 300)", stroke: "oklch(0.6 0.18 300)" }}
                    activeDot={{ r: 5, stroke: "oklch(1 0 0)", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

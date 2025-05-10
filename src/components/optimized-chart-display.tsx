'use client'

import { memo, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { Card } from './ui/card'
import { chartPath, performanceData } from '@/data/chart-data'

interface ChartDisplayProps {
  readonly title?: string
  readonly className?: string
}

// Memoized chart component to prevent unnecessary re-renders
function ChartDisplayComponent({ title = performanceData.title, className }: ChartDisplayProps) {
  // Pre-compute the grid cells to avoid recreating the array on each render
  const gridCells = useMemo(() => Array.from({ length: 16 }), [])

  // Pre-compute month labels
  const monthLabels = useMemo(() => performanceData.points.map(point => point.month), [])

  return (
    <Card className={cn('p-4 h-full', className)}>
      <h2 className="text-base font-semibold mb-4">{title}</h2>

      <div className="relative h-[calc(100%-2.5rem)] w-full">
        {/* Background grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
          {gridCells.map((_, i) => (
            <div key={i} className="border-t border-l border-muted/20"></div>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground py-2">
          <div>100%</div>
          <div>75%</div>
          <div>50%</div>
          <div>25%</div>
          <div>0%</div>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-8 right-4 flex justify-between text-xs text-muted-foreground">
          {monthLabels.map((month, index) => (
            <div key={index}>{month}</div>
          ))}
        </div>

        {/* Chart area */}
        <div className="absolute left-8 right-4 top-2 bottom-6">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Gradient definition - using explicit purple color with opacity */}
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.541 0.281 293.009)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="oklch(0.541 0.281 293.009)" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Shaded area - using purple gradient */}
            <path d={chartPath.area} fill="url(#chartGradient)" className="opacity-80" />

            {/* Line - using explicit color */}
            <path
              d={chartPath.line}
              fill="none"
              stroke="oklch(0.541 0.281 293.009)"
              strokeWidth="2"
            />

            {/* Data points */}
            <circle cx="0" cy="80" r="3" fill="oklch(0.541 0.281 293.009)" />
            <circle cx="30" cy="60" r="3" fill="oklch(0.541 0.281 293.009)" />
            <circle cx="60" cy="40" r="3" fill="oklch(0.541 0.281 293.009)" />
            <circle cx="90" cy="20" r="3" fill="oklch(0.541 0.281 293.009)" />
          </svg>
        </div>
      </div>
    </Card>
  )
}

// Export memoized component to prevent unnecessary re-renders
export const OptimizedChartDisplay = memo(ChartDisplayComponent)

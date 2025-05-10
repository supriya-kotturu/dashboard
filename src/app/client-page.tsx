'use client'

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

// Dynamically import components that aren't needed for initial render
export const DynamicChartDisplay = dynamic(
  () => import('@/components/chart-display').then(mod => ({ default: mod.ChartDisplay })),
  {
    loading: () => <Skeleton className="w-full h-[300px]" />,
    ssr: false
  }
)
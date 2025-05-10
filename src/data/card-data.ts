import {
  ArrowUpCircle,
  BarChart3,
  Database,
  LineChart,
  LucideIcon,
  PieChart,
  TrendingUp,
} from 'lucide-react'

export interface CardData {
  title: string
  tag: string
  stats: string
  trend: 'up' | 'down'
  percentage: string
  icon: LucideIcon
}

export const cardData: CardData[] = [
  {
    title: 'Total Revenue',
    tag: 'finance',
    stats: '45,231',
    trend: 'up',
    percentage: '23',
    icon: TrendingUp,
  },
  {
    title: 'New Customers',
    tag: 'users',
    stats: '1,234',
    trend: 'up',
    percentage: '12',
    icon: ArrowUpCircle,
  },
  {
    title: 'Active Sessions',
    tag: 'analytics',
    stats: '5,678',
    trend: 'down',
    percentage: '8',
    icon: LineChart,
  },
  {
    title: 'Conversion Rate',
    tag: 'marketing',
    stats: '3.2%',
    trend: 'up',
    percentage: '4',
    icon: PieChart,
  },
  {
    title: 'Average Order',
    tag: 'sales',
    stats: '$89.43',
    trend: 'down',
    percentage: '5',
    icon: BarChart3,
  },
  {
    title: 'Database Queries',
    tag: 'system',
    stats: '12,589',
    trend: 'down',
    percentage: '12',
    icon: Database,
  },
  {
    title: 'API Calls',
    tag: 'api',
    stats: '8,742',
    trend: 'up',
    percentage: '15',
    icon: Database,
  },
  {
    title: 'Error Rate',
    tag: 'errors',
    stats: '0.8%',
    trend: 'down',
    percentage: '30',
    icon: Database,
  },
  {
    title: 'Page Views',
    tag: 'analytics',
    stats: '24,891',
    trend: 'up',
    percentage: '18',
    icon: LineChart,
  },
  {
    title: 'Load Time',
    tag: 'performance',
    stats: '1.2s',
    trend: 'down',
    percentage: '10',
    icon: BarChart3,
  },
]

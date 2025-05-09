import { cn } from '@/lib/utils'
import { Card } from './ui/card'
import { ArrowDownCircle, ArrowUpCircle, Database, LucideIcon } from 'lucide-react'

type StaticCardProps = React.ComponentProps<typeof Card> & {
  icon?: LucideIcon
  title?: string
  tag?: string
  stats?: string
  trend?: 'up' | 'down'
  percentage?: string
  description?: string
}

export function StaticCard(props: StaticCardProps) {
  const {
    icon: Icon,
    title,
    tag,
    stats,
    trend = 'down',
    percentage = '12',
    description,
    className,
  } = props

  return (
    <Card className={cn('w-full h-[120px] pt-0 flex flex-col', className)}>
      {/* Tag header with 40% opacity */}
      <div className="py-1 px-2 bg-primary/40 rounded-tl-lg flex items-center rounded-br-lg w-3/5 text-xs self-start">
        <div className="flex items-center gap-1">
          {Icon ? <Icon size={12} /> : <Database size={12} />}
          <span className="text-[10px]">{tag || 'data metrics'}</span>
        </div>
      </div>

      {/* Card content with flex-grow to fill space */}
      <div className="flex flex-col flex-grow justify-between p-4 pt-2">
        {/* Title - smaller font */}
        <div className="text-xs font-medium text-foreground/70">{title || 'Metric Title'}</div>

        {/* Stats - 2x larger font */}
        <div className="flex items-end text-foreground">
          <span className="text-3xl font-bold mr-1">{stats || '12,458'}</span>{' '}
          {trend === 'up' ? (
            <ArrowUpCircle size={16} className="mr-1 text-green-500" />
          ) : (
            <ArrowDownCircle size={16} className="mr-1 text-red-500" />
          )}{' '}
          <span className="text-xs">{percentage}%</span>
        </div>
      </div>
    </Card>
  )
}

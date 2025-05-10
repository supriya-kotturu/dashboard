'use client'

import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/theme/theme-toggle'

const sidebarFooterActionsVariants = cva('flex flex-col gap-2', {
  variants: {
    size: {
      default: '',
      sm: 'gap-1',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const toggleContainerVariants = cva('flex', {
  variants: {
    padding: {
      default: 'px-2 group-data-[collapsible=icon]:px-0',
      none: '',
      sm: 'px-1 group-data-[collapsible=icon]:px-0',
      lg: 'px-3 group-data-[collapsible=icon]:px-0',
    },
  },
  defaultVariants: {
    padding: 'default',
  },
})

interface SidebarFooterActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'sm' | 'lg'
  padding?: 'default' | 'none' | 'sm' | 'lg'
  iconSize?: 'xs' | 'sm'
}

export function SidebarFooterActions({
  className,
  size,
  padding,
  iconSize = 'xs',
  ...props
}: SidebarFooterActionsProps) {
  return (
    <div className={cn(sidebarFooterActionsVariants({ size }), className)} {...props}>
      <div className={cn(toggleContainerVariants({ padding }))}>
        <ModeToggle iconSize={iconSize} />
      </div>
    </div>
  )
}

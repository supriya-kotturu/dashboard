'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle({
  className,
  iconSize = 'sm',
  ...props
}: React.ComponentProps<typeof DropdownMenu> & {
  className?: string
  iconSize?: 'sm' | 'xs'
}) {
  const { setTheme } = useTheme()
  const { isMobile } = useSidebar?.() || { isMobile: false }
  const iconClassName = iconSize === 'xs' ? 'h-[0.75rem] w-[0.75rem]' : 'h-[1.2rem] w-[1.2rem]'

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn('h-8 w-8 rounded-md p-0 flex items-center justify-center', className)}
        >
          <Sun
            className={`${iconClassName} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
          />
          <Moon
            className={`absolute ${iconClassName} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side={isMobile ? 'bottom' : 'right'}>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

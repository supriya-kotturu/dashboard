'use client'

import * as React from 'react'
import { cva } from 'class-variance-authority'

import { sidebarData } from '@/data/sidebar-data'
import { cn } from '@/lib/utils'
import {
  NavMain,
  NavProjects,
  NavUser,
  SidebarFooterActions,
  TeamSwitcher
} from '@/components/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const appSidebarVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        compact: 'gap-1',
        spacious: 'gap-4',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface AppSidebarProps extends Omit<React.ComponentProps<typeof Sidebar>, 'variant'> {
  variant?: 'default' | 'compact' | 'spacious'
}

export function AppSidebar({ className, variant, ...props }: AppSidebarProps) {
  return (
    <Sidebar 
      collapsible="icon" 
      className={cn(appSidebarVariants({ variant }), className)} 
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavProjects projects={sidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-2">
          <SidebarFooterActions iconSize="xs" />
          <NavUser user={sidebarData.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

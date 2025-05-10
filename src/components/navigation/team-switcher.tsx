'use client'

import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Team } from '@/lib/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

const teamLogoVariants = cva(
  'flex aspect-square items-center justify-center rounded-lg',
  {
    variants: {
      size: {
        default: 'size-8',
        sm: 'size-6',
        lg: 'size-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const teamIconVariants = cva(
  'shrink-0',
  {
    variants: {
      size: {
        default: 'size-4',
        sm: 'size-3.5',
        lg: 'size-5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface TeamSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  teams: Team[]
}

export function TeamSwitcher({ teams, className }: TeamSwitcherProps) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu className={className}>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className={cn(teamLogoVariants(), "bg-sidebar-primary text-sidebar-primary-foreground")}>
                <activeTeam.logo className={teamIconVariants()} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">Teams</DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <team.logo className={teamIconVariants({ size: 'sm' })} />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
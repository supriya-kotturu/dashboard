'use client'

import * as React from 'react'
import {
  BookOpen,
  ChartArea,
  ChartBar,
  Database,
  Frame,
  Gamepad2,
  Home as HomeIcon,
  IceCream as IceCreamBowlIcon,
  Map,
  PieChart,
  Settings2,
} from 'lucide-react'

import { NavMain } from '@/components/navigation/nav-main'
import { NavProjects } from '@/components/navigation/nav-projects'
import { NavUser } from '@/components/navigation/nav-user'
import { ModeToggle } from '@/components/theme/theme-toggle'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'sentisum',
    email: 'product-designer@sentisum.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Senti Sum',
      logo: ChartArea,
      plan: 'Enterprise',
    },
    {
      name: 'Meal Kit Support',
      logo: IceCreamBowlIcon,
      plan: 'Startup',
    },
    {
      name: 'Meal Kit Survey',
      logo: ChartBar,
      plan: 'Startup',
    },
    {
      name: 'Gaming Support',
      logo: Gamepad2,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Organization',
      url: '#',
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: 'Default Homepage',
          url: '#',
        },
        {
          title: 'DashGPT - Your AI powered Assistant',
          url: '#',
        },
        {
          title: 'Team members',
          url: '#',
        },
        {
          title: 'Integrations',
          url: '#',
        },
      ],
    },
    {
      title: 'Data',
      url: '#',
      icon: Database,
      items: [
        {
          title: 'Email Digest',
          url: '#',
        },
        {
          title: 'Theme Management',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-2">
          <div className="flex px-2 group-data-[collapsible=icon]:px-0">
            <ModeToggle iconSize="xs" />
          </div>
          <NavUser user={data.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

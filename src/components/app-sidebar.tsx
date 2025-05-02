"use client"

import * as React from "react"
import {
  BookOpen, 
  ChartArea,
  ChartBar, 
  Database,
  Frame, 
  Gamepad2,
  HomeIcon,
  IceCreamBowlIcon,
  Map,
  PieChart,
  Settings2
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "sentisum",
    email: "product-designer@sentisum.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Senti Sum",
      logo: ChartArea,
      plan: "Enterprise",
    },
    {
      name: "Meal Kit Support",
      logo: IceCreamBowlIcon,
      plan: "Startup",
    },
    {
      name: "Meal Kit Survey",
      logo: ChartBar,
      plan: "Startup",
    },
    {
      name: "Gaming Support",
      logo: Gamepad2,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Organization",
      url: "#",
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: "Default Homepage",
          url: "#",
        },
        {
          title: "Team members",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
      ],
    },
    {
      title: "Data",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Email Digest",
          url: "#",
        },
        {
          title: "Theme Management",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
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
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

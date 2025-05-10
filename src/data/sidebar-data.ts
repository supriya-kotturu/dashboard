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

import { User, Team, NavItem, Project } from '@/lib/types'

export const sidebarData = {
  user: {
    name: 'sentisum',
    email: 'product-designer@sentisum.com',
    avatar: '/avatars/shadcn.jpg',
  } as User,
  
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
  ] as Team[],
  
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
  ] as NavItem[],
  
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
  ] as Project[],
}
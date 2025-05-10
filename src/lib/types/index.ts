// Common types used across the application

import { LucideIcon } from 'lucide-react'

export interface User {
  name: string
  email: string
  avatar?: string
}

export interface Team {
  name: string
  logo: LucideIcon
  plan: 'Free' | 'Startup' | 'Enterprise'
}

export interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export interface Project {
  name: string
  url: string
  icon: LucideIcon
}

export interface CardData {
  title: string
  tag: string
  stats: string
  trend: 'up' | 'down' | 'neutral'
  percentage: string
  icon: LucideIcon
}

export interface ConversationData {
  id: string
  customerName: string
  customerGroup: string
  date: string
  review: number
  conversation: string
}

'use client'

import * as React from 'react'

import { sidebarData } from '@/data/sidebar-data'
import { NavItem, Project, Team, User } from '@/lib/types'

interface SidebarContextType {
  user: User
  teams: Team[]
  navMain: NavItem[]
  projects: Project[]
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function useSidebarContext() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebarContext must be used within a SidebarProvider')
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  data?: SidebarContextType
}

export function SidebarProvider({ children, data = sidebarData }: SidebarProviderProps) {
  return <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
}

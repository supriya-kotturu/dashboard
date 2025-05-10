'use client'

import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cva } from 'class-variance-authority'

import { NavItem } from '@/lib/types'
import { cn } from '@/lib/utils'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

const navMainVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        compact: 'gap-1',
        spacious: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface NavMainProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavItem[]
  variant?: 'default' | 'compact' | 'spacious'
}

export function NavMain({
  items,
  className,
  variant,
  ...props
}: NavMainProps) {
  return (
    <SidebarGroup className={cn(navMainVariants({ variant }), className)} {...props}>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map(subItem => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

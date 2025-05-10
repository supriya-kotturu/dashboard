'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

interface DashboardLayoutProps {
  topContent: ReactNode
  leftBottomContent: ReactNode
  rightBottomContent: ReactNode
  className?: string
  defaultTopLayout?: number
  defaultBottomLayout?: number[]
}

export function DashboardLayout({
  topContent,
  leftBottomContent,
  rightBottomContent,
  className,
  defaultTopLayout = 25, // Default top panel height: 1/4 (25%)
  defaultBottomLayout = [60, 40], // Default bottom horizontal split: 3/5 and 2/5
}: DashboardLayoutProps) {
  return (
    <div className={cn('w-full h-full', className)}>
      <ResizablePanelGroup direction="vertical" className="w-full h-full">
        {/* Top section (1/4 of the screen by default) */}
        <ResizablePanel defaultSize={defaultTopLayout} minSize={15}>
          <div className="h-full overflow-auto p-4">{topContent}</div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Bottom section (3/4 of the screen by default) */}
        <ResizablePanel defaultSize={100 - defaultTopLayout} minSize={30}>
          <ResizablePanelGroup direction="horizontal">
            {/* Left bottom section (3/5 of the bottom section by default) */}
            <ResizablePanel defaultSize={defaultBottomLayout[0]} minSize={40}>
              <div className="h-full overflow-auto p-4">{leftBottomContent}</div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Right bottom section (2/5 of the bottom section by default) */}
            <ResizablePanel defaultSize={defaultBottomLayout[1]} minSize={20}>
              <div className="h-full overflow-auto p-4">{rightBottomContent}</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

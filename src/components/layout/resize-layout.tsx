'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

interface ResizeLayoutProps {
  leftContent: ReactNode
  topRightContent: ReactNode
  bottomRightContent: ReactNode
  className?: string
  defaultLayout?: number[]
  defaultVerticalLayout?: number[]
}

export function ResizeLayout({
  leftContent,
  topRightContent,
  bottomRightContent,
  className,
  defaultLayout = [33, 67], // Default horizontal split: 1/3 and 2/3
  defaultVerticalLayout = [80, 20], // Default vertical split: 4/5 and 1/5
}: ResizeLayoutProps) {
  return (
    <div className={cn('w-full h-full', className)}>
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        {/* Left section (1/3 of the screen by default) */}
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={20}>
          <div className="h-full overflow-auto p-4">
            {leftContent}
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        {/* Right section (2/3 of the screen by default) */}
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            {/* Top right section (4/5 of the right section by default) */}
            <ResizablePanel defaultSize={defaultVerticalLayout[0]} minSize={50}>
              <div className="h-full overflow-auto p-4">
                {topRightContent}
              </div>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            {/* Bottom right section (1/5 of the right section by default) */}
            <ResizablePanel defaultSize={defaultVerticalLayout[1]} minSize={10}>
              <div className="h-full overflow-auto p-4">
                {bottomRightContent}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
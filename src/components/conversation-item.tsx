'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, User } from 'lucide-react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

export interface ConversationProps {
  readonly id: string
  readonly customerName: string
  readonly customerGroup: string
  readonly date: string
  readonly review: string
  readonly conversation: string
  readonly className?: string
}

export function ConversationItem({
  id,
  customerName,
  customerGroup,
  date,
  review,
  conversation,
  className,
}: ConversationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={cn('overflow-hidden', className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full" data-testid={id}>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-1.5 rounded-full">
              <User size={14} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm">{customerName}</h3>
              <p className="text-xs text-muted-foreground">{customerGroup}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground">{date}</div>
            <CollapsibleTrigger asChild>
              <button className="p-1 rounded-full hover:bg-muted/50">
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          <div className="px-3 pb-3 pt-0">
            <div className="mb-2">
              <span className="text-xs font-medium">Review:</span>
              <p className="text-sm">{review}</p>
            </div>
            <div>
              <span className="text-xs font-medium">Conversation:</span>
              <p className="text-sm whitespace-pre-line">{conversation}</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

'use client'

import { Suspense, useState } from 'react'
import { ConversationData } from '@/data/conversation-data'
import { Skeleton } from './ui/skeleton'
import { ConversationItem } from './conversation-item'

interface LazyConversationListProps {
  conversations: ConversationData[]
}

function ConversationSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-12 w-full rounded-md" />
      <Skeleton className="h-12 w-full rounded-md" />
      <Skeleton className="h-12 w-full rounded-md" />
    </div>
  )
}

export function LazyConversationList({ conversations }: LazyConversationListProps) {
  // Only render the first 3 conversations initially, then load more as needed
  const [visibleCount, setVisibleCount] = useState(3)

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, conversations.length))
  }

  return (
    <div className="space-y-4">
      <Suspense fallback={<ConversationSkeleton />}>
        {conversations.slice(0, visibleCount).map(conversation => (
          <ConversationItem
            key={conversation.id}
            id={conversation.id}
            customerName={conversation.customerName}
            customerGroup={conversation.customerGroup}
            date={conversation.date}
            review={conversation.review}
            conversation={conversation.conversation}
          />
        ))}
      </Suspense>

      {visibleCount < conversations.length && (
        <button
          onClick={loadMore}
          className="w-full py-2 bg-primary/10 text-primary rounded-md text-sm hover:bg-primary/20 transition-colors"
        >
          Load More
        </button>
      )}
    </div>
  )
}

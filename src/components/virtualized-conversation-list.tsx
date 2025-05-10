'use client'

import { useState, useRef, useEffect } from 'react'
import { ConversationData } from '@/data/conversation-data'
import { ConversationItem } from './conversation-item'

interface VirtualizedConversationListProps {
  conversations: ConversationData[]
  itemHeight?: number
  overscan?: number
}

export function VirtualizedConversationList({
  conversations,
  itemHeight = 60, // Estimated height of collapsed conversation item
  overscan = 5,
}: VirtualizedConversationListProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Use ResizeObserver if available
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(entries => {
        const { height } = entries[0].contentRect
        setContainerHeight(height)
      })

      resizeObserver.observe(container)
      setContainerHeight(container.clientHeight)

      return () => {
        resizeObserver.disconnect()
      }
    } else {
      // Fallback for browsers without ResizeObserver
      setContainerHeight(container.clientHeight)
      
      const handleResize = () => {
        setContainerHeight(container.clientHeight)
      }
      
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollTop(container.scrollTop)
    }

    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate which items should be visible
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    conversations.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  // Calculate total height of all items
  const totalHeight = conversations.length * itemHeight

  // Get visible items
  const visibleItems = conversations.slice(startIndex, endIndex + 1)

  return (
    <div
      ref={containerRef}
      className="h-full overflow-auto"
      style={{ position: 'relative' }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((conversation, index) => (
          <div
            key={conversation.id}
            style={{
              position: 'absolute',
              top: (startIndex + index) * itemHeight,
              width: '100%',
            }}
            className="mb-4"
          >
            <ConversationItem
              id={conversation.id}
              customerName={conversation.customerName}
              customerGroup={conversation.customerGroup}
              date={conversation.date}
              review={conversation.review}
              conversation={conversation.conversation}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
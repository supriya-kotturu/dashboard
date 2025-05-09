import { StaticCard } from '@/components/static-card'
import { DashboardLayout } from '@/components/dashboard-layout'
import { ChartDisplay } from '@/components/chart-display'
import { ConversationItem } from '@/components/conversation-item'
import { cardData, conversationData } from '@/data'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 overflow-hidden">
        <DashboardLayout
          topContent={
            <div>
              <h2 className="text-base font-bold mb-4">Dashboard Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cardData.slice(0, 10).map(card => (
                  <StaticCard
                    key={card.title}
                    className="w-full"
                    title={card.title}
                    tag={card.tag}
                    stats={card.stats}
                    trend={card.trend}
                    percentage={card.percentage}
                    icon={card.icon}
                  />
                ))}
              </div>
            </div>
          }
          leftBottomContent={<ChartDisplay />}
          rightBottomContent={
            <div>
              <h2 className="text-base font-bold mb-4">Recent Conversations</h2>
              <div className="space-y-4">
                {conversationData.map(conversation => (
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
              </div>
            </div>
          }
          defaultBottomLayout={[60, 40]}
        />
      </main>
      <footer className="p-3 text-center text-sm text-muted-foreground border-t">
        <p>© 2024 Dashboard Demo. All rights reserved.</p>
      </footer>
    </div>
  )
}
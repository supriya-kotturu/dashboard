export interface ConversationData {
  id: string
  customerName: string
  customerGroup: string
  date: string
  review: string
  conversation: string
}

export const conversationData: ConversationData[] = [
  {
    id: '1',
    customerName: 'John Smith',
    customerGroup: 'Premium',
    date: '2 hours ago',
    review: 'The service was excellent, but I had some issues with delivery.',
    conversation:
      "Customer: Hi, I haven't received my order yet.\nAgent: I'm sorry to hear that. Let me check the status for you.\nCustomer: Thank you, I appreciate it.\nAgent: I see your order was delayed due to weather conditions. It should arrive tomorrow.\nCustomer: That's great, thanks for your help!",
  },
  {
    id: '2',
    customerName: 'Sarah Johnson',
    customerGroup: 'Standard',
    date: '1 day ago',
    review: 'Product quality exceeded my expectations.',
    conversation:
      "Customer: I wanted to say that I'm really impressed with the quality of your product.\nAgent: That's wonderful to hear! Thank you for sharing your feedback.\nCustomer: Do you have any recommendations for similar products?\nAgent: Absolutely! Based on your purchase, you might enjoy our new line of products.",
  },
  {
    id: '3',
    customerName: 'Michael Brown',
    customerGroup: 'Enterprise',
    date: '3 days ago',
    review: 'Need assistance with bulk ordering for our company.',
    conversation:
      "Customer: We're looking to place a large order for our company event.\nAgent: I'd be happy to help with that. How many units are you considering?\nCustomer: Around 500 units.\nAgent: Great! I can offer you our enterprise discount for orders that size.\nCustomer: That sounds perfect. Can you send me a quote?\nAgent: Absolutely, I'll prepare that right away and email it to you within the hour.",
  },
  {
    id: '4',
    customerName: 'Emily Davis',
    customerGroup: 'Premium',
    date: '1 week ago',
    review: 'Having technical issues with the mobile app.',
    conversation:
      "Customer: I'm having trouble logging into the mobile app.\nAgent: I'm sorry to hear that. Let's troubleshoot together. What error message are you seeing?\nCustomer: It says \"authentication failed\".\nAgent: Let's try resetting your password. I've sent a reset link to your email.\nCustomer: Got it, that worked! Thank you.",
  },
  {
    id: '5',
    customerName: 'David Wilson',
    customerGroup: 'Standard',
    date: '2 weeks ago',
    review: 'Would like to upgrade my subscription plan.',
    conversation:
      "Customer: I'm interested in upgrading to your premium plan.\nAgent: That's great! The premium plan includes additional features like priority support and advanced analytics.\nCustomer: How much would that cost?\nAgent: It's $29.99 per month, but we're currently offering a 20% discount for the first 3 months.\nCustomer: That sounds good. How do I upgrade?\nAgent: I can process that upgrade right now for you if you'd like.",
  },
]

# Interactive Dashboard with Resizable Layout

A modern, interactive dashboard built with Next.js, React, and Tailwind CSS featuring resizable panels, data visualization, and a responsive design.

## Demo

![Dashboard Demo](/public/images/demo.png)

## Features

- **Resizable Layout**: Drag to resize panels for a customized view
- **Interactive Data Cards**: Display key metrics with trend indicators
- **Data Visualization**: Chart display with shaded area graphs
- **Conversation Interface**: Collapsible conversation items with accordion functionality
- **Responsive Design**: Adapts to different screen sizes
- **Dark Mode Support**: Built-in theme support

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)

## Project Structure

```
dashboard/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   │   ├── ui/         # UI components from shadcn
│   │   └── ...         # Custom components
│   ├── data/           # Data files
│   │   ├── card-data.ts
│   │   ├── chart-data.ts
│   │   └── conversation-data.ts
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
└── ...
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.

## Customization

### Adding New Cards

Add new metrics cards by modifying the data in `src/data/card-data.ts`:

```typescript
export const cardData: CardData[] = [
  {
    title: 'New Metric',
    tag: 'category',
    stats: '12,345',
    trend: 'up',
    percentage: '10',
    icon: YourIcon,
  },
  // ...
]
```

### Modifying the Layout

Adjust the layout proportions by changing the `defaultTopLayout` and `defaultBottomLayout` props in the `DashboardLayout` component:

```jsx
<DashboardLayout
  defaultTopLayout={25} // Top panel height (%)
  defaultBottomLayout={[60, 40]} // Bottom panel split (%)
  // ...
/>
```

### Improvements

- use [gridstack.js](https://gridstackjs.com/) for adding individual static cards onto the dashboard.
- use [Motion - (prev)framer motion](https://motion.dev/) for small interactive CSS elements.
- DashGPT - a AI powered assistant which generates reports from the data through a prompt.

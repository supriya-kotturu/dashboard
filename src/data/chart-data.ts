export interface ChartPoint {
  month: string
  value: number
}

export interface ChartData {
  title: string
  points: ChartPoint[]
}

export const performanceData: ChartData = {
  title: 'Performance Metrics',
  points: [
    { month: 'Jan', value: 20 },
    { month: 'Mar', value: 40 },
    { month: 'May', value: 60 },
    { month: 'Jul', value: 40 },
    { month: 'Sep', value: 60 },
    { month: 'Nov', value: 80 },
  ],
}

// This data could be used to generate the SVG path dynamically
export const chartPath = {
  line: 'M0,80 C10,70 20,75 30,60 C40,45 50,55 60,40 C70,25 80,35 90,20',
  area: 'M0,80 C10,70 20,75 30,60 C40,45 50,55 60,40 C70,25 80,35 90,20 L100,20 L100,100 L0,100 Z',
}

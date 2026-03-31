export interface MetricDetail {
  label: string
  value: number
  unit: string
}

export interface MetricCardProps {
  title: string
  value: number
  details: MetricDetail[]
}

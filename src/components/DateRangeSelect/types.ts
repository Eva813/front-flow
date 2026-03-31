export interface DateRangeOption {
  value: string
  label: string
  dateRange: string
}

export interface DateRangeSelectProps {
  label: string
  modelValue: string
  options: DateRangeOption[]
}

export type DateRangeSelectEmits = {
  (e: 'update:modelValue', value: string): void
}

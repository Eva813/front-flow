export interface TabItemData {
  label: string
  hasAlert: boolean
}

export interface TabGroupProps {
  tabs: TabItemData[]
  modelValue: number
}

export type TabGroupEmits = {
  (e: 'update:modelValue', value: number): void
}

export interface TabItemProps {
  label: string
  isActive: boolean
  hasAlert: boolean
}

export type TabItemEmits = {
  (e: 'click'): void
}

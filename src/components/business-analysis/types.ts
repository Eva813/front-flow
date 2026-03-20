export type AnalysisTabKey = 'summary' | 'any-car' | 'personal-injury'

export interface AnalysisTab {
  key: AnalysisTabKey
  label: string
  variant: 'active' | 'inactive' | 'inactive-risk'
}

export interface DateRangeOption {
  value: string
  label: string
}

export interface BasicInfo {
  agentName: string
  agentNo: string
  companyName: string
  companyNo: string
  managerInfo: string
  registrationInfo: string
  recentPerformanceInfo: string
  lastUpdated: string
}

export interface MetricRow {
  category: string
  premium: string
  claimAmount: string
  signLossRatio: string
  policyCount: string
  customerCount: string
  claimCaseCount: string
  customerLossRatio: string
  compact?: boolean
  highlight?: boolean
  leadingPlaceholder?: boolean
  trailingAlert?: boolean
}

export interface MetricCardItem {
  title: string
  value: string
  primaryLabel: string
  primaryValue: string
  primarySuffix: string
  secondaryLabel: string
  secondaryValue: string
  secondarySuffix: string
  secondaryGhost?: boolean
}

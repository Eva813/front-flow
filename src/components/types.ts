// ===== Agent Basic Info =====
export interface AgentNameBlockProps {
  agentName: string
  agentNo: string
  companyName: string
  companyNo: string
  managerInfo: string
}

export interface AgentStatusBlockProps {
  registrationYear: number
  recentPoliciesCount: number
  status: 'on' | 'off'
}

export interface AgentBasicInfoCardProps {
  name: AgentNameBlockProps
  status: AgentStatusBlockProps
}

// ===== Warning Banner =====
export interface WarningBannerProps {
  warningText: string
  warningDescription: string
  lastUpdateTime: string
}

// ===== Summary Alert =====
export interface SpecialNote {
  text: string
  date: string
}

export interface SummaryAlertProps {
  complaintsText: string
  specialNotes: SpecialNote[]
}

// ===== Tab =====
export type TabState = 'active' | 'inactive' | 'inactive-alert'

export interface TabItemProps {
  text: string
  state: TabState
}

export interface TabGroupProps {
  tabs: TabItemProps[]
  activeIndex: number
}

export type TabGroupEmits = {
  (e: 'update:activeIndex', index: number): void
}

// ===== Date Range Select =====
export interface DateRangeOption {
  label: string
  startDate: string
  endDate: string
}

export interface DateRangeSelectProps {
  options: DateRangeOption[]
  selectedIndex: number
}

export type DateRangeSelectEmits = {
  (e: 'update:selectedIndex', index: number): void
}

// ===== Scope Description =====
export interface ScopeDescriptionProps {
  title: string
  descriptions: string[]
  exclusions: string
}

// ===== Metric Card =====
export interface MetricCardProps {
  label: string
  value: string
  subLabel: string
  subValue: string
  subUnit: string
}

// ===== Insurance Table =====
export interface InsuranceSubCategory {
  categoryName: string
  premium: string
  claimAmount: string
  lossRatio: string
  policyCount: string
  customerCount: string
  claimCount: string
  customerClaimRate: string
  hasAlert: boolean
}

export interface InsuranceCategory {
  categoryName: string
  premium: string
  claimAmount: string
  lossRatio: string
  policyCount: string
  customerCount: string
  claimCount: string
  customerClaimRate: string
  hasAlert: boolean
  subCategories?: InsuranceSubCategory[]
}

export interface InsuranceTableProps {
  categories: InsuranceCategory[]
}

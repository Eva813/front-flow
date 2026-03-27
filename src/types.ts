// ──────────────────────────────────────────────────────────────
// Shared types for AgentAnalysisPage
// Figma: Jkuzai47DvXzPZlh6hUkNM  draft-spec: draft-spec.md
// ──────────────────────────────────────────────────────────────

// ── AgentInfo (BasicInfoSection) ──────────────────────────────
export interface AgentInfo {
  agentName: string
  agencyName: string
  managerInfo: string
  registeredYear: number
  recentOrderCount: number
  status: 'On' | 'Off'
  lastUpdatedAt: string
}

// ── SummaryAlertCard ──────────────────────────────────────────
export interface SummaryItem {
  text: string
  isNote?: boolean
}

export interface ComplaintSummary {
  complaintTotal: number
  complaintRecentCount: number
  noteDate: string
  items?: SummaryItem[]
}

// ── TabGroup ──────────────────────────────────────────────────
export interface TabDef {
  key: string
  label: string
  showAlert?: boolean
}

// ── DateSelectSet ─────────────────────────────────────────────
export interface DateRangeOption {
  rangeName: string
  startDate: string
  endDate: string
}

export const DATE_RANGE_OPTIONS: DateRangeOption[] = [
  { rangeName: '近六年', startDate: '2019/03/01', endDate: '2025/02/28' },
  { rangeName: '近五年', startDate: '2020/03/01', endDate: '2025/02/28' },
  { rangeName: '近三年', startDate: '2022/03/01', endDate: '2025/02/28' },
]

// ── MetricCard ────────────────────────────────────────────────
export interface MetricData {
  mainLabel: string
  mainValue: number
  subLabel: string
  subCount: number
  percentage: string
}

// ── AnalysisTable ─────────────────────────────────────────────
export interface InsuranceItem {
  name: string
  hasAlert: boolean
  premium: number
  claimAmount: number
  lossRatio: string
  policyCount: number
  customerCount: number
  claimCount: number
  claimRate: string
  isLastInGroup: boolean
}

export interface InsuranceGroup {
  groupName: string
  hasAlert: boolean
  premium: number
  claimAmount: number
  lossRatio: string
  policyCount: number
  customerCount: number
  claimCount: number
  claimRate: string
  /** 有 items 代表是有子行的父行；無 items 代表獨立父行（含底線） */
  items?: InsuranceItem[]
}

// ── BulletPointScope ──────────────────────────────────────────
export interface ScopeDescription {
  title: string
  mainText1: string
  excludeText: string
  mainText2: string
}

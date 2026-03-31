export interface TableSubRowData {
  name: string
  premium: string
  claimAmount: string
  lossRatio: string
  policyCount: string
  customerCount: string
  claimCount: string
  customerClaimRate: string
  hasAlert: boolean
  isLast: boolean
}

export interface TableRowData {
  categoryName: string
  premium: string
  claimAmount: string
  lossRatio: string
  policyCount: string
  customerCount: string
  claimCount: string
  customerClaimRate: string
  hasAlert: boolean
  subRows: TableSubRowData[]
}

export interface AnalysisTableProps {
  rows: TableRowData[]
}

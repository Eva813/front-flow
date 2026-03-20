import type {
  AnalysisTab,
  BasicInfo,
  DateRangeOption,
  MetricCardItem,
  MetricRow,
} from './types'

export const analysisTabs: AnalysisTab[] = [
  { key: 'summary', label: '綜合分析', variant: 'active' },
  { key: 'any-car', label: '任意車險', variant: 'inactive-risk' },
  { key: 'personal-injury', label: '個傷', variant: 'inactive' },
]

export const dateRangeOptions: DateRangeOption[] = [
  { value: 'six-years', label: '近六年' },
  { value: 'five-years', label: '近五年' },
  { value: 'three-years', label: '近三年' },
  { value: 'one-year', label: '近一年' },
]

export const scopeLines = [
  '目前已納入分析的險別包括：任意車險、A&H',
  '(不包含疫苗險、團險、旅平險)',
  '、住火、商火、工程險、公共意外、雇主責任、產品責任、營繕承包人意外。',
]

export const summaryBullets = [
  '客戶提出的官方申訴：共 3 筆 (近三個月： 1 筆)',
  '特殊註記：A&H 個傷 - 通路業務員招攬品質不良',
]

export const summaryNote = '(註記於2019/06/06)'

export const basicInfo: BasicInfo = {
  agentName: '徐*雯',
  agentNo: 'E**C738183',
  companyName: '威*保經',
  companyNo: 'BA1296****',
  managerInfo: '管理人：940171  張巧勳',
  registrationInfo: '登錄於 2018 年 ｜ ',
  recentPerformanceInfo: '最近三個月有進單 10 張',
  lastUpdated: '最後更新時間：2026 年 2 月',
}

export const metricCards: MetricCardItem[] = [
  {
    title: '總保費 (元)',
    value: '1,742,766',
    primaryLabel: '保單數：共',
    primaryValue: '307',
    primarySuffix: '張',
    secondaryLabel: '客戶數：共',
    secondaryValue: '98',
    secondarySuffix: '人',
    secondaryGhost: true,
  },
  {
    title: '總理賠金額 (元)',
    value: '1,389,222',
    primaryLabel: '賠案數：共',
    primaryValue: '28',
    primarySuffix: '張',
    secondaryLabel: '出險客戶數：共',
    secondaryValue: '10',
    secondarySuffix: '人',
    secondaryGhost: true,
  },
]

export const metricRows: MetricRow[] = [
  {
    category: '任意車險',
    premium: '1,114,665',
    claimAmount: '1,165,918',
    signLossRatio: '105.0%',
    policyCount: '101',
    customerCount: '41',
    claimCaseCount: '17',
    customerLossRatio: '22.0%',
    leadingPlaceholder: true,
    trailingAlert: true,
  },
  {
    category: 'A&H',
    premium: '577,560',
    claimAmount: '199,924',
    signLossRatio: '34.6%',
    policyCount: '180',
    customerCount: '43',
    claimCaseCount: '9',
    customerLossRatio: '20.9%',
  },
  {
    category: '個傷',
    premium: '576,258',
    claimAmount: '199,924',
    signLossRatio: '34.7%',
    policyCount: '174',
    customerCount: '42',
    claimCaseCount: '9',
    customerLossRatio: '21.4%',
    trailingAlert: true,
  },
  {
    category: '個健',
    premium: '1.302',
    claimAmount: '0',
    signLossRatio: '0%',
    policyCount: '6',
    customerCount: '1',
    claimCaseCount: '0',
    customerLossRatio: '0%',
  },
  {
    category: '工程險',
    premium: '13,020',
    claimAmount: '0',
    signLossRatio: '0%',
    policyCount: '5',
    customerCount: '5',
    claimCaseCount: '0',
    customerLossRatio: '0%',
    compact: true,
  },
  {
    category: '責任保險',
    premium: '37,521',
    claimAmount: '23,380',
    signLossRatio: '62.3%',
    policyCount: '21',
    customerCount: '19',
    claimCaseCount: '2',
    customerLossRatio: '10.5%',
    compact: true,
  },
  {
    category: '公共意外',
    premium: '6,000',
    claimAmount: '0',
    signLossRatio: '0%',
    policyCount: '3',
    customerCount: '3',
    claimCaseCount: '0',
    customerLossRatio: '0%',
    compact: true,
  },
  {
    category: '雇主責任',
    premium: '21,521',
    claimAmount: '23,380',
    signLossRatio: '108.6%',
    policyCount: '14',
    customerCount: '12',
    claimCaseCount: '2',
    customerLossRatio: '16.7%',
    compact: true,
  },
  {
    category: '產品責任',
    premium: '10,000',
    claimAmount: '0',
    signLossRatio: '0%',
    policyCount: '4',
    customerCount: '4',
    claimCaseCount: '0',
    customerLossRatio: '0%',
    compact: true,
  },
  {
    category: '營繕承包人意外',
    premium: '10,000',
    claimAmount: '0',
    signLossRatio: '0%',
    policyCount: '4',
    customerCount: '4',
    claimCaseCount: '0',
    customerLossRatio: '0%',
    compact: true,
  },
]

export interface BasicInfoCardProps {
  warningText: string
  warningDescription: string
  lastUpdated: string
  agentName: string
  agentNo: string
  companyName: string
  companyNo: string
  manager: string
  registeredYear: number
  recentPolicyCount: number
  status: 'on' | 'off'
}

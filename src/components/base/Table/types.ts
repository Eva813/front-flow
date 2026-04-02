export interface TableHeadProps {
  columns?: string[];
}

export interface TableRowProps {
  insuranceType: string;
  premium: number | string;
  claimAmount: number | string;
  lossRatio: number | string;
  policiesCount: number | string;
  customersCount: number | string;
  claimsCount: number | string;
  customerClaimRate: number | string;
  isLastRow?: boolean;
}

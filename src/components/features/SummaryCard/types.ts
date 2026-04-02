export interface SummaryRemark {
  text: string;
  date?: string;
}

export interface SummaryCardProps {
  complaints?: SummaryRemark;
  remarks?: SummaryRemark[];
}

import type { TableRowProps } from '../../base/Table/types'

export interface AnalysisTabContentProps {
  title?: string;
  dataRangeLabel?: string;
  dataRangeValue?: string;
  rangeNotes?: string[];
  tableRows?: TableRowProps[];
  showRangeExplanation?: boolean;
}

export interface AnalysisTabContentEmits {
  (e: 'date-range-change', value: string): void;
}

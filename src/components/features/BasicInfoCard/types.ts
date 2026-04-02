import type { NameBlockProps } from '../base/NameBlock/types'
import type { StatusBadgeProps } from '../base/StatusBadge/types'

export interface BasicInfoCardProps {
  warningTitle?: string;
  warningMessage?: string;
  lastUpdatedDate?: string;
  nameBlock?: Partial<NameBlockProps>;
  statusBadge?: Partial<StatusBadgeProps>;
}

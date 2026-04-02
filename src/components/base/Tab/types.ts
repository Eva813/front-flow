export interface TabProps {
  label: string;
  isActive?: boolean;
  value?: string;
  showAlert?: boolean;
}

export interface TabEmits {
  (e: 'click'): void;
}

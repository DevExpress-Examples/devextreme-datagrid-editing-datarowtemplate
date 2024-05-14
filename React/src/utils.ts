import { DataGridTypes } from 'devextreme-react/data-grid';

export type RowTemplateData<TRowData, TKey> = DataGridTypes.DataRowTemplateData<TRowData, TKey> & { isEditing: boolean; isNewRow: boolean };

export function convertToString(value: Date | string | number | undefined): string {
  if (typeof value === 'string') return value;
  return value ? value.toString() : '';
}

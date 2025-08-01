import type { DataGridTypes } from 'devextreme-react/data-grid';
import type { Employee } from './data';

export type RowTemplateData<TRowData, TKey> = DataGridTypes.DataRowTemplateData<TRowData, TKey> & { isNewRow: boolean };

export type ColumnNames = Extract<keyof Employee, 'Prefix' | 'FirstName' | 'LastName' | 'Position' | 'BirthDate' | 'HireDate'>;

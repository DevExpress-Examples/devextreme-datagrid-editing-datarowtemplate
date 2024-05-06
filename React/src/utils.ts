import { DataGridTypes } from "devextreme-react/data-grid";

export type RowTemplateData<TRowData, TKey> = DataGridTypes.DataRowTemplateData<TRowData, TKey> & { isEditing: boolean }
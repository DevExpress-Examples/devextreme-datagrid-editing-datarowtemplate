import { Component, ViewChild } from '@angular/core';
import dxDataGrid from 'devextreme/ui/data_grid';
import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import notify from 'devextreme/ui/notify';
import { AppService, Employee, ValueChanged } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('grid', { static: false }) dataGrid?: DxDataGridComponent<Employee, number>;

  employees: Employee[];

  changes: DxDataGridTypes.DataChange<Employee, number>[];

  editors: string[];

  constructor(service: AppService) {
    this.employees = service.getEmployees();
    this.changes = [];
    this.editors = ['Prefix', 'FirstName', 'LastName', 'Position', 'BirthDate', 'HireDate'];
  }

  get dataGridInstance(): dxDataGrid<Employee, number> | undefined { return this.dataGrid?.instance; }

  onInitNewRow = (e: DxDataGridTypes.InitNewRowEvent<Employee, number>): void => {
    e.data.Prefix = '';
    e.data.FirstName = '';
    e.data.LastName = '';
    e.data.Position = '';
    e.data.BirthDate = new Date('1986/07/08');
    e.data.HireDate = new Date('1986/07/08');
    e.data.Notes = '';
    e.data.ID = Math.max(this.employees.length, this.employees[this.employees.length - 1].ID + 1);
  };

  addNewItem = (): void => {
    if (this.dataGridInstance) {
      this.dataGridInstance.cancelEditData();
      this.dataGridInstance.addRow().catch(() => { notify('A new row cannot be added', 'error'); });
    }
  };

  onValueChanged = (val: ValueChanged): void => {
    if (!this.changes.length) {
      this.changes.push({ data: { [val.dataField]: val.e.value }, key: val.key, type: 'update' });
    } else {
      this.changes[0].data = { ...this.changes[0].data, [val.dataField]: val.e.value };
    }
  };

  onEditButtonClick = (ID: number): void => {
    if (!this.dataGridInstance) return;
    const rowIndex = this.dataGridInstance.getRowIndexByKey(ID);
    this.dataGridInstance.cancelEditData();
    if (rowIndex != null) this.dataGridInstance.editRow(rowIndex);
  };

  onDeleteButtonClick = (ID: number): void => {
    if (!this.dataGridInstance) return;
    const rowIndex = this.dataGridInstance.getRowIndexByKey(ID);
    if (rowIndex != null) this.dataGridInstance.deleteRow(rowIndex);
    else notify('A row cannot be deleted', 'error');
  };

  onSaveButtonClick = (): void => {
    if (this.dataGridInstance) {
      this.dataGridInstance.saveEditData().then(
        () => this.dataGridInstance?.refresh(),
        () => { notify('Save operation failed', 'error'); },
      );
    }
  };

  onCancelButtonClick = (): void => {
    if (this.dataGridInstance) {
      this.dataGridInstance.cancelEditData();
      this.dataGridInstance.refresh().catch(() => { notify('Cancel operation failed', 'error'); });
    }
  };
}

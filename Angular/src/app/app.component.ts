import { Component } from '@angular/core';
import DataGrid, { DataChange, InitNewRowEvent, InitializedEvent } from 'devextreme/ui/data_grid';
import { AppService, Employee, ValueChanged } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataGrid?: DataGrid | undefined;

  employees: Employee[];

  changes: DataChange[];

  editors: string[];

  constructor(service: AppService) {
    this.employees = service.getEmployees();
    this.changes = [];
    this.editors = ['Prefix', 'FirstName', 'LastName', 'Position', 'BirthDate', 'HireDate'];
  }

  saveGridInstance(e: InitializedEvent): void {
    this.dataGrid = e.component;
  }

  onInitNewRow = (e: InitNewRowEvent): void => {
    e.data.Prefix = '';
    e.data.FirstName = '';
    e.data.LastName = '';
    e.data.Position = '';
    e.data.BirthDate = new Date('1986/07/08');
    e.data.HireDate = new Date('1986/07/08');
    e.data.Notes = '';
  };

  addNewItem = (): void => {
    void this.dataGrid?.cancelEditData();
    this.dataGrid?.addRow();
    this.changes = this.dataGrid?.option('editing.changes') as DataChange[];
  };

  onValueChanged = (val: ValueChanged): void => {
    if (!this.changes.length) {
      this.changes.push({ data: { [val.dataField]: val.e.value }, key: val.key, type: 'update' });
    } else {
      this.changes[0].data = { ...this.changes[0].data, [val.dataField]: val.e.value };
    }
  };

  onEditButtonClick = (ID: number): void => {
    const rowIndex = this.dataGrid?.getRowIndexByKey(ID);
    void this.dataGrid?.cancelEditData();
    if (rowIndex != null) this.dataGrid?.editRow(rowIndex);
    this.changes = this.dataGrid?.option('editing.changes') as DataChange[];
  };

  onDeleteButtonClick = (ID: number): void => {
    const rowIndex = this.dataGrid?.getRowIndexByKey(ID);
    if (rowIndex != null) this.dataGrid?.deleteRow(rowIndex);
  };

  onSaveButtonClick = (): void => {
    this.dataGrid?.option('editing.changes', this.changes);
    // this.dataGrid?.saveEditData().then().catch();
    this.dataGrid?.saveEditData().then(() =>
      this.dataGrid?.refresh(),
      () => {}
    );
    // Promise.resolve(this.dataGrid?.saveEditData()).then();
    // this.dataGrid?.refresh();
  };

  onCancelButtonClick = (): void => {
    // await this.dataGrid?.cancelEditData();
    this.dataGrid?.cancelEditData();
    // Promise.resolve(this.dataGrid?.cancelEditData()).then();
    this.dataGrid?.refresh();
  };
}

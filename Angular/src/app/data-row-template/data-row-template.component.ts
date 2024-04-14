import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataRowTemplateData } from 'devextreme/ui/data_grid';

@Component({
  selector: 'data-row-template',
  templateUrl: './data-row-template.component.html',
  styleUrls: ['./data-row-template.component.scss'],
})
export class DataRowTemplateComponent {
  @Input() employee!: DataRowTemplateData;
  @Output() onEditButtonClick = new EventEmitter<number>();
  @Output() onDeleteButtonClick = new EventEmitter<number>();

  editButtonClick(ID: number) {
    this.onEditButtonClick.emit(ID);
  }

  deleteButtonClick(ID: number) {
    this.onDeleteButtonClick.emit(ID);
  }
}

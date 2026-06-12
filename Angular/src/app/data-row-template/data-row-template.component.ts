import {
  Component,
  Input, Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { DataRowTemplateData } from 'devextreme/ui/data_grid';

@Component({
  selector: 'data-row-template',
  templateUrl: './data-row-template.component.html',
  styleUrls: ['./data-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DataRowTemplateComponent {
  @Input() employee!: DataRowTemplateData;

  @Output() onEditButtonClick = new EventEmitter<number>();

  @Output() onDeleteButtonClick = new EventEmitter<number>();

  editButtonClick(ID: number): void {
    this.onEditButtonClick.emit(ID);
  }

  deleteButtonClick(ID: number): void {
    this.onDeleteButtonClick.emit(ID);
  }
}

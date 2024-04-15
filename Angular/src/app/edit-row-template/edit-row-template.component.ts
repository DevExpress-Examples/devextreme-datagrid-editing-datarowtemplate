import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataRowTemplateData } from 'devextreme/ui/data_grid';
import { ValueChanged } from '../app.service';

@Component({
  selector: 'edit-row-template',
  templateUrl: './edit-row-template.component.html',
  styleUrls: ['./edit-row-template.component.scss'],
})
export class EditRowTemplateComponent {
  @Input() employee!: DataRowTemplateData;

  @Output() onSaveButtonClick = new EventEmitter<number>();

  @Output() onCancelButtonClick = new EventEmitter<number>();

  @Output() onValueChanged = new EventEmitter<ValueChanged>();

  editors: string[] = ['Prefix', 'FirstName', 'LastName', 'Position', 'BirthDate', 'HireDate'];

  saveButtonClick(): void {
    this.onSaveButtonClick.emit();
  }

  cancelButtonClick(): void {
    this.onCancelButtonClick.emit();
  }

  valueChanged(e: any, dataField: string, key: number): void {
    this.onValueChanged.emit({ e, dataField, key });
  }
}

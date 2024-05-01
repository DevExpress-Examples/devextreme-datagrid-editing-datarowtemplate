import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { ValueChanged } from '../app.service';

@Component({
  selector: 'edit-row-template',
  templateUrl: './edit-row-template.component.html',
  styleUrls: ['./edit-row-template.component.scss'],
})
export class EditRowTemplateComponent {
  @Input() employee!: DxDataGridTypes.DataRowTemplateData;

  @Output() onSaveButtonClick = new EventEmitter<number>();

  @Output() onCancelButtonClick = new EventEmitter<number>();

  @Output() onValueChanged = new EventEmitter<ValueChanged>();

  @Input() editors!: string[];

  saveButtonClick(): void {
    this.onSaveButtonClick.emit();
  }

  cancelButtonClick(): void {
    this.onCancelButtonClick.emit();
  }

  valueChanged({ e, dataField, key }: ValueChanged): void {
    this.onValueChanged.emit({ e, dataField, key });
  }
}

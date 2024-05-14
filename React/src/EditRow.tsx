
import React, { useCallback, useState } from 'react';

import { Button } from 'devextreme-react/button';
import { type DateBoxTypes, DateBox } from 'devextreme-react/date-box';
import { type TextAreaTypes, TextArea } from 'devextreme-react/text-area';
import { type TextBoxTypes, TextBox } from 'devextreme-react/text-box';

import { type Employee } from './data';

import { SAVING_CANCEL, SAVING_SUCCESS, useEditing } from './editing-context';
import { RowTemplateData, convertToString } from './utils';

const columns: string[] = [
  'Prefix',
  'FirstName',
  'LastName',
  'Position',
  'BirthDate',
  'HireDate',
];

function EditRow(rowInfo: RowTemplateData<Employee, number>): JSX.Element {
  const context = useEditing();
  const [localChanges, setLocalChanges] = useState(context?.state.changes ?? []);

  const onSaveButtonClick = useCallback((): void => {
    context?.dispatch({ type: SAVING_SUCCESS, payload: localChanges });
    setLocalChanges([]);
  }, [context, localChanges]);

  const onCancelButtonClick = useCallback((): void => {
    context?.dispatch({ type: SAVING_CANCEL });
    setLocalChanges([]);
  }, [context]);

  const valueChangeAction = useCallback((dataField: string, key: number) => (
    e: TextBoxTypes.ValueChangedEvent | TextAreaTypes.ValueChangedEvent | DateBoxTypes.ValueChangedEvent,
  ) => {
    setLocalChanges((prev) => [{ data: { ...prev[0]?.data, [dataField]: e.value }, key, type: rowInfo.isNewRow ? 'insert' : 'update' }]);
  }, [setLocalChanges]);

  return (
    <React.Fragment>
      <tr className="main-row">
        {
          columns.map((dataField, index) => (
            <td key={index}>
              {
                dataField === 'BirthDate' || dataField === 'HireDate'
                  ? <DateBox defaultValue={rowInfo.data[dataField]} onValueChanged={valueChangeAction(dataField, rowInfo.data.ID)} />
                  : <TextBox defaultValue={convertToString(rowInfo.data[dataField])} onValueChanged={valueChangeAction(dataField, rowInfo.data.ID)} />
              }
            </td>
          ))
        }
        <td rowSpan={2}>
          <Button
            text="Save"
            onClick={onSaveButtonClick}
          ></Button>
          <Button
            text="Cancel"
            onClick={onCancelButtonClick}
          ></Button>
        </td>
      </tr>
      <tr className="notes-row">
        <td colSpan={6}>
          <TextArea value={rowInfo.data.Notes} onValueChanged={valueChangeAction('Notes', rowInfo.data.ID)} />
        </td>
      </tr>
    </React.Fragment>
  );
}

export default EditRow;

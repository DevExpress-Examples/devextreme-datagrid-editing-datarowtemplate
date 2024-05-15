
import React, { useCallback } from 'react';
import { Button } from 'devextreme-react/button';

import type { DataGridTypes } from 'devextreme-react/data-grid';
import { formatDate } from 'devextreme/localization';
import { Employee } from './data';
import {
  SAVING_CANCEL, SAVING_SUCCESS, SET_EDIT_ROW_KEY, useEditing,
} from './editing-context';

function DisplayRow(rowInfo: DataGridTypes.RowTemplateData<Employee, number>): JSX.Element {
  const context = useEditing();

  const onEditButtonClick = useCallback(() => {
    context?.dispatch({ type: SAVING_CANCEL });
    context?.dispatch({ type: SET_EDIT_ROW_KEY, payload: rowInfo.data.ID });
  }, [context]);

  const onDeleteButtonClick = useCallback(() => {
    context?.dispatch({ type: SAVING_CANCEL });
    context?.dispatch({ type: SAVING_SUCCESS, payload: [{ type: 'remove', key: rowInfo.data.ID, data: {} }] });
  }, [context]);

  return (
    <React.Fragment>
      <tr className="main-row">
        <td>{rowInfo.data.Prefix}</td>
        <td>{rowInfo.data.FirstName}</td>
        <td>{rowInfo.data.LastName}</td>
        <td>{rowInfo.data.Position}</td>
        <td>{formatDate(new Date(rowInfo.data.BirthDate), 'shortDate')}</td>
        <td>{formatDate(new Date(rowInfo.data.HireDate), 'shortDate')}</td>
        <td rowSpan={2}>
          <Button
            text="Edit"
            onClick={onEditButtonClick}
          ></Button>
          <Button
            text="Delete"
            onClick={onDeleteButtonClick}
          ></Button>
        </td>
      </tr>
      <tr className="notes-row">
        <td colSpan={6}><div>{rowInfo.data.Notes}</div></td>
      </tr>
    </React.Fragment>
  );
}

export default DisplayRow;

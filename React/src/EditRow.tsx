
import React from 'react';
import { Button } from 'devextreme-react/button';

import type { DataGridTypes } from 'devextreme-react/data-grid';
import { Employee } from './data';


const formatDate = new Intl.DateTimeFormat('en-US').format;

const EditRow = (rowInfo: DataGridTypes.RowTemplateData<Employee, number>) => {
  const onSaveButtonClick = () => {}
  const onCancelButtonClick = () => {}
  return (
    <React.Fragment>
      <tr className="main-row">
        <td>{rowInfo.data.Prefix}</td>
        <td>{rowInfo.data.FirstName}</td>
        <td>{rowInfo.data.LastName}</td>
        <td>{rowInfo.data.Position}</td>
        <td>{formatDate(new Date(rowInfo.data.BirthDate))}</td>
        <td>{formatDate(new Date(rowInfo.data.HireDate))}</td>
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
        <td colSpan={6}><div>{rowInfo.data.Notes}</div></td>
      </tr>
    </React.Fragment>
  );
}

export default EditRow;
import React, { useCallback } from 'react';
// import { DataGridTypes } from 'devextreme-react/data-grid';
// import { Employee } from './data';

const formatDate = new Intl.DateTimeFormat('en-US').format;

// rowInfo: DataGridTypes.RowTemplateData<Employee, number>

function DataRow(rowInfo: any): JSX.Element {
  //   const createEditRowTemplate = useCallback((rowInfo: any) => {
  //     console.log(rowInfo);
  //     return <tr></tr>;
  //   }, []);

  const createDataRowTemplate = useCallback((rowInfo: any) => {
    createDataMarkup(rowInfo.data);
    return <tr></tr>;
  }, []);

  return (
    <tr>
      {rowInfo.isEditing ? <td>editing</td> : createDataRowTemplate(rowInfo)}
    </tr>
  );
}

// const createEditMarkup = (data: any) => '<tr class=\'main-row\'>'
//   + '<td><div id=\'prefixEditor\'></div></td>'
//   + '<td><div id=\'firstNameEditor\'></div></td>'
//   + '<td><div id=\'lastNameEditor\'></div></td>'
//   + '<td><div id=\'positionEditor\'></td>'
//   + '<td><div id=\'birthDateEditor\'></div></td>'
//   + '<td><div id=\'hireDateEditor\'></div></td>'
//   + `<td rowspan='2' id='editColumn-${data.ID}'></td>`
//   + '</tr>'
//   + '<tr class=\'notes-row\'>'
//   + '<td colspan=\'6\'><div id=\'notesEditor\'></div></td>'
//   + '</tr>';

function createDataMarkup(data: any): string {
  return (
    '<tr class="main-row">' +
    `<td>${data.Prefix}</td>` +
    `<td>${data.FirstName}</td>` +
    `<td>${data.LastName}</td>` +
    `<td>${data.Position}</td>` +
    `<td>${formatDate(new Date(data.BirthDate))}</td>` +
    `<td>${formatDate(new Date(data.HireDate))}</td>` +
    `<td rowspan='2' id='editColumn-${data.ID}'></td>` +
    '</tr>' +
    '<tr class="notes-row">' +
    `<td colspan='6'><div>${data.Notes}</div></td>` +
    '</tr>'
  );
}

export default DataRow;

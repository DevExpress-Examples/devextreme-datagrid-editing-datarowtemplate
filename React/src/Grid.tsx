import React, { useCallback } from 'react';

import Button from 'devextreme-react/button';
import DataGrid, {
  Column, Toolbar, Item, Editing,
  DataGridTypes,
} from 'devextreme-react/data-grid';

// import DataRow from './DataRow';

import { Employee } from './data';
import {
  SAVING_CANCEL, SET_CHANGES, SET_EDIT_ROW_KEY, useEditing,
} from './editing-context';
import DataRow from './DataRow';

export default function GridComponent(): JSX.Element {
  const context = useEditing();

  const onChangesChange = useCallback((changes: DataGridTypes.DataChange<Employee, number>[]) => {
    context?.dispatch({ type: SET_CHANGES, payload: changes });
  }, []);

  const addNewItem = useCallback(() => {
    const items = context?.state.data ?? [{ ID: 0 }];
    const newRowKey = Math.max(items[items.length - 1].ID + 1, items.length + 1);
    const employee = {
      Prefix: '',
      FirstName: '',
      LastName: '',
      Position: '',
      BirthDate: new Date('1986/07/08'),
      HireDate: new Date('1986/07/08'),
      Notes: '',
      ID: newRowKey,
    };
    context?.dispatch({ type: SAVING_CANCEL });
    context?.dispatch({
      type: SET_CHANGES,
      payload: [{
        type: 'insert',
        key: newRowKey,
        data: employee,
      }],
    });
    context?.dispatch({ type: SET_EDIT_ROW_KEY, payload: newRowKey });
  }, [context]);

  const onEditRowKeyChange = useCallback((value: number) => {
    context?.dispatch({ type: SET_EDIT_ROW_KEY, payload: value });
  }, [context]);

  return (<React.Fragment>
    <DataGrid
      id="grid-container"
      dataSource={context?.state.data}
      keyExpr='ID'
      repaintChangesOnly
      rowAlternationEnabled={true}
      hoverStateEnabled={true}
      columnAutoWidth={true}
      showBorders={true}
      dataRowComponent={DataRow}
    >
      <Column dataField='Prefix' caption='Title' width={70} />
      <Column dataField='FirstName' />
      <Column dataField='LastName' />
      <Column dataField='Position' />
      <Column dataField='BirthDate' dataType='date' />
      <Column dataField='HireDate' dataType='date' />
      <Column width={160} />
      <Editing
        editRowKey={context?.state.editRowKey}
        onEditRowKeyChange={onEditRowKeyChange}
        changes={context?.state.changes}
        onChangesChange={onChangesChange} />
      <Toolbar>
        <Item location='after'>
          <Button text='Add new item' onClick={addNewItem} />
        </Item>
      </Toolbar>
    </DataGrid>
  </React.Fragment>);
}

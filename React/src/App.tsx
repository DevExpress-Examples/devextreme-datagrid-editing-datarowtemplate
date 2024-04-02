import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Button from 'devextreme-react/button';
import DataGrid, { Column, Toolbar, Item } from 'devextreme-react/data-grid';
import { InitNewRowEvent } from 'devextreme/ui/data_grid';
import { employees } from './data';
import DataRow from './DataRow';

// const formatDate = new Intl.DateTimeFormat('en-US').format;

function App(): JSX.Element {
  const dataGrid = useRef<any>(null);
  const [changes, setChanges] = useState([]);

  const onInitNewRow = useCallback((e: InitNewRowEvent): void => {
    e.data.Prefix = '';
    e.data.FirstName = '';
    e.data.LastName = '';
    e.data.Position = '';
    e.data.BirthDate = new Date('1986/07/08');
    e.data.HireDate = new Date('1986/07/08');
    e.data.Notes = '';
  }, []);

  const addNewItme = useCallback(() => {
    setTimeout(() => {
      const grid = dataGrid.current.instance;
      grid.cancelEditData();
      // grid.addRow();
      setChanges(grid.option('editing.changes'));
    });
  }, []);

  return (
    <div className='main'>
      <DataGrid
        ref={dataGrid}
        dataSource={employees}
        keyExpr='ID'
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        showBorders={true}
        onInitNewRow={onInitNewRow}
        dataRowRender={DataRow}
      >
        <Column dataField='Prefix' caption='Title' width={70} />
        <Column dataField='FirstName' />
        <Column dataField='LastName' />
        <Column dataField='Position' />
        <Column dataField='BirthDate' dataType='date' />
        <Column dataField='HireDate' dataType='date' />
        <Column width={160} />
        <Toolbar>
          <Item location='after'>
            <Button text='Add new item' onClick={addNewItme} />
          </Item>
        </Toolbar>
      </DataGrid>
    </div>
  );
}

export default App;

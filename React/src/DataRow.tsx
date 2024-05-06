import React, { useCallback } from 'react';

import DisplayRow from './DisplayRow';
import EditRow from './EditRow';

import type { RowTemplateData } from './utils';
import type { Employee } from './data';


function DataRow(rowInfo: RowTemplateData<Employee, number>): JSX.Element {

  return (
    <React.Fragment>
      {rowInfo.isEditing ? <EditRow rowType={'data'} {...rowInfo}  /> :  <DisplayRow rowType={'data'} {...rowInfo} />}
    </React.Fragment>
  );
}

export default DataRow;

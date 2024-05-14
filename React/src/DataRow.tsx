import React from 'react';

import DisplayRow from './DisplayRow';
import EditRow from './EditRow';

import type { RowTemplateData } from './utils';
import type { Employee } from './data';
import { useEditing } from './editing-context';

function DataRow({ data }: { data: RowTemplateData<Employee, number> }): JSX.Element {
  const context = useEditing();
  // eslint-disable-next-line no-console
  console.log(data, context?.state);
  return (
    <React.Fragment>
      {context?.state.editRowKey && context?.state.editRowKey === data.key ? <EditRow {...data} /> : <DisplayRow rowType="data" {...data} />}
    </React.Fragment>
  );
}

export default DataRow;

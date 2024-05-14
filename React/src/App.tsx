import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';

import React from 'react';
import { EditingProvider } from './editing-context';
import GridComponent from './Grid';

function App(): JSX.Element {
  return (
    <div className='main'>
      <EditingProvider>
        <GridComponent />
      </EditingProvider>
    </div>
  );
}

export default App;

import * as React from 'react';
import applyChanges from 'devextreme/data/apply_changes';
import { DataGridTypes } from 'devextreme-react/data-grid';
import { Employee, employees } from './data';

interface EditingProviderProps { children: React.ReactNode }
interface Action { type: string; payload?: DataGridTypes.DataChange[] | Employee[] | number }
interface State {
  changes: DataGridTypes.DataChange[];
  data: Employee[];
  editRowKey: number | undefined;
}
// eslint-disable-next-line no-unused-vars
export type ContextProps = { state: State; dispatch: (type: Action) => void } | undefined;

export const SAVING_SUCCESS = 'SAVING_SUCCESS';
export const SAVING_CANCEL = 'SAVING_CANCEL';
export const SET_CHANGES = 'SET_CHANGES';
export const SET_EDIT_ROW_KEY = 'SET_EDIT_ROW_KEY';

const EditingContext = React.createContext<ContextProps>(undefined);

function editingReducer(state: State, action: Action): State {
  const { type, payload } = action;
  let newData = [];
  switch (type) {
    case SAVING_SUCCESS:
      newData = applyChanges(state.data, payload as DataGridTypes.DataChange[] ?? [], { keyExpr: 'ID' });
      return {
        ...state,
        data: newData,
        changes: [],
        editRowKey: undefined,
      };
    case SET_EDIT_ROW_KEY:
      return {
        ...state,
        editRowKey: payload as number,
      };
    case SAVING_CANCEL:
      return {
        ...state,
        changes: [],
        editRowKey: undefined,
      };
    case SET_CHANGES:
      return {
        ...state,
        changes: payload as DataGridTypes.DataChange[],
      };
    default:
      return state;
  }
}

function EditingProvider({ children }: EditingProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(editingReducer, { data: employees, changes: [], editRowKey: undefined });
  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return (<EditingContext.Provider value={value}>
    {children}
  </EditingContext.Provider>);
}

function useEditing(): ContextProps {
  const context = React.useContext(EditingContext);
  if (context === undefined) {
    throw new Error('useEditing must be used within EditingProvider');
  }
  return context;
}

export { EditingProvider, useEditing };

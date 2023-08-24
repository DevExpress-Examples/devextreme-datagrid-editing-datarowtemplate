<!-- default badges list -->

![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/665039433/23.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1177465)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)

<!-- default badges end -->

# DataGrid for DevExtreme - Editing with dataRowTemplate

This example demonstrates how to create a custom template for rows in the editing and non-editing state.

<div align="center"><img alt="DataGrid for DevExtreme - Editing with dataRowTemplate" src="ediing-with-dataRowTemplate.png" /></div>

- Handle [dataRowTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataRowTemplate) to create markups for rows in editing and non-editing states.
- Use the [editRow()](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#editRowrowIndex), [deleteRow()](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deleteRowrowIndex), [saveEditData()](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData), and [cancelEditData()](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData) methods to to switch the editing state of rows.
- Handle the [onToolbarPreparing](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onToolbarPreparing) event to create a custom button for inserting a new row and use [onInitNewRow](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onInitNewRow) to specify default values for the new row's cells.
- Modify the [editing.changes](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/changes/) array when an editor's value is changed.

## Files to Review

- **jQuery**
  - [index.js](jQuery/src/index.js)

## Documentation

- [dataRowTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataRowTemplate)
- [onToolbarPreparing](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onToolbarPreparing)
- [onInitNewRow](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onInitNewRow)
- [editing.changes](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/changes/)

## More Examples

- (DevExtreme DataGrid – Create a custom Pop-up Edit Form using Popup and Form components)[https://github.com/DevExpress-Examples/devextreme-datagrid-custom-editing-form]
- (DataGrid for DevExtreme - How to handle different value types with editCellTemplate for the same column)[https://github.com/DevExpress-Examples/devextreme-datagrid-dynamic-type-column]
- (DataGrid for DevExtreme - How to define DataGrid in the Popup Edit Form to edit a data field)[https://github.com/DevExpress-Examples/devextreme-datagrid-show-grid-in-popup-edit-form]

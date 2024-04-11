<script setup lang="ts">
  import 'devextreme/dist/css/dx.material.blue.light.compact.css';
  import DxDataGrid, { DxColumn, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
  import type { InitializedEvent } from "devextreme/ui/data_grid";
  import type dxDataGrid from "devextreme/ui/data_grid"
  import { employees } from '../data';
  import { DxButton } from 'devextreme-vue';
  import DataRowTemplate from './DataRowTemplate.vue';
  import EditRowTemplate from './EditRowTemplate.vue';

  let dataGrid: dxDataGrid | null | undefined = null;
  let changes: any;

  const saveGridInstance = (e: InitializedEvent) => {
    dataGrid = e.component;
  }

  const onInitNewRow = (e: any) => {
    e.data.Prefix = '';
    e.data.FirstName = '';
    e.data.LastName = '';
    e.data.Position = '';
    e.data.BirthDate = new Date('1986/07/08');
    e.data.HireDate = new Date('1986/07/08');
    e.data.Notes = '';
  }

  const addNewItem = () => {
    dataGrid!.cancelEditData();
    dataGrid!.addRow();
    changes = dataGrid!.option('editing.changes');
  }

  const onValueChanged = (e: any, dataField: string, key: number) => {
    if (!changes.length) {
      changes.push({ data: { [dataField]: e.value }, key, type: 'update' });
    } else {
      changes[0].data = { ...changes[0].data, [dataField]: e.value };
    }
  }

  const onEditButtonClick = (ID: number) => {
		const rowIndex = dataGrid!.getRowIndexByKey(ID);
		dataGrid!.cancelEditData();
		dataGrid!.editRow(rowIndex);
		changes = dataGrid!.option('editing.changes');
	}

	const onDeleteButtonClick = (ID: number) => {
		const rowIndex = dataGrid!.getRowIndexByKey(ID);
		dataGrid!.deleteRow(rowIndex);
	}

  const onSaveButtonClick = () => {
    dataGrid!.option('editing.changes', changes);
    dataGrid!.saveEditData();
    dataGrid!.refresh();
  }

  const onCancelButtonClick = () => {
    dataGrid!.cancelEditData();
    dataGrid!.refresh();
  }
</script>

<template>
  <div class="demo-container">
		<DxDataGrid
			:data-source="employees"
			key-expr="ID"
			:row-alternation-enabled="true"
			:column-auto-width="true"
			:show-borders="true"
			@init-new-row="onInitNewRow"
			@initialized="saveGridInstance"
			data-row-template="dataRowTemplate"
		>
			<DxColumn
				data-field="Prefix"
				caption="Title"
				:width="70"
			/>
			<DxColumn data-field="FirstName"/>
			<DxColumn data-field="LastName"/>
			<DxColumn data-field="Position"/>
			<DxColumn
				data-field="BirthDate"
				data-type="date"
			/>
			<DxColumn
				data-field="HireDate"
				data-type="date"
			/>
			<DxColumn :width="160"/>
			<DxToolbar>
				<DxItem location="after">
					<DxButton text="Add new item" @click="addNewItem"></DxButton>
				</DxItem>
			</DxToolbar>
			<template #dataRowTemplate="{ data: rowInfo }">
				<template v-if="rowInfo.isEditing">
          <EditRowTemplate
            :rowInfo="rowInfo"
            @on-value-changed="onValueChanged"
            @on-save-button-click="onSaveButtonClick"
            @on-cancel-button-click="onCancelButtonClick"
          ></EditRowTemplate>
				</template>
				<template v-else>
					<DataRowTemplate
            :rowInfo="rowInfo"
            @on-edit-button-click="onEditButtonClick"
            @on-delete-button-click="onDeleteButtonClick"
          ></DataRowTemplate>
				</template>
			</template>
		</DxDataGrid>
	</div>
</template>

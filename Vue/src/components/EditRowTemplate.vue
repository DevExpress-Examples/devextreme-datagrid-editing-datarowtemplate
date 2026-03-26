<script setup lang="ts">
import { DxButton, DxTextBox, DxDateBox, DxTextArea } from 'devextreme-vue';
import type { DataRowTemplateData } from 'devextreme/ui/data_grid';
withDefaults(defineProps<{ rowInfo?: DataRowTemplateData }>(), {
  rowInfo: undefined,
});
defineEmits(['onValueChanged', 'onSaveButtonClick', 'onCancelButtonClick']);
const editors: string[] = [
  'Prefix',
  'FirstName',
  'LastName',
  'Position',
  'BirthDate',
  'HireDate',
];
</script>

<template>
  <tr class="main-row">
    <td
      v-for="editor in editors"
      :key="editor"
    >
      <div v-if="editor != 'BirthDate' && editor != 'HireDate'">
        <DxTextBox
          :value="rowInfo!.data[editor]"
          @value-changed="
            $emit('onValueChanged', $event, editor, rowInfo!.data.ID)
          "
        />
      </div>
      <div v-else>
        <DxDateBox
          :value="rowInfo!.data[editor]"
          @value-changed="
            $emit('onValueChanged', $event, editor, rowInfo!.data.ID)
          "
        />
      </div>
    </td>
    <td rowSpan="2">
      <DxButton
        text="Save"
        @click="$emit('onSaveButtonClick')"
      />
      <DxButton
        text="Cancel"
        @click="$emit('onCancelButtonClick')"
      />
    </td>
  </tr>
  <tr class="notes-row">
    <td colspan="6">
      <DxTextArea
        :value="rowInfo!.data.Notes"
        @value-changed="
          $emit('onValueChanged', $event, 'Notes', rowInfo!.data.ID)
        "
      />
    </td>
  </tr>
</template>

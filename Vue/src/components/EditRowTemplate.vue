<script setup lang="ts">
  import { DxButton, DxTextBox, DxDateBox, DxTextArea } from 'devextreme-vue';
  defineProps({ rowInfo: Object })
  defineEmits(['onValueChanged', 'onSaveButtonClick', 'onCancelButtonClick']);
  const formatDate = new Intl.DateTimeFormat('en-US').format;
  const editors: string[] = ['Prefix', 'FirstName', 'LastName', 'Position', 'BirthDate', 'HireDate'];
</script>

<template>
  <template v-if="true">
    <tr class="main-row">
      <td v-for="editor in editors" :key="editor">
        <div v-if="editor != 'BirthDate' && editor != 'HireDate'">
          <DxTextBox
            :value="rowInfo!.data[editor]"
            @value-changed="$emit('onValueChanged', $event, editor, rowInfo!.data.ID)"
          ></DxTextBox>
        </div>
        <div v-else>
          <DxDateBox
            :value="formatDate(new Date(rowInfo!.data[editor]))"
            @value-changed="$emit('onValueChanged', $event, editor, rowInfo!.data.ID)"
          ></DxDateBox>
        </div>
      </td>
      <td rowSpan="2">
        <DxButton
          text="Save"
          @click="$emit('onSaveButtonClick')"
        ></DxButton>
        <DxButton
          text="Cancel"
          @click="$emit('onCancelButtonClick')"
        ></DxButton>
      </td>
    </tr>
    <tr class="notes-row">
      <td colspan="6">
        <DxTextArea
          :value="rowInfo!.data.Notes"
          @value-changed="$emit('onValueChanged', $event, 'Notes', rowInfo!.data.ID)"
        ></DxTextArea>
      </td>
    </tr>
  </template>
</template>

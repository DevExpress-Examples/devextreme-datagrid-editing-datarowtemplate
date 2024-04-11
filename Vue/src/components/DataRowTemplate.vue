<script setup lang="ts">
  import { DxButton } from 'devextreme-vue';
  defineProps(['rowInfo']);
  defineEmits(['onEditButtonClick', 'onDeleteButtonClick']);
  const formatDate = new Intl.DateTimeFormat('en-US').format;
</script>

<template>
  <tr class="main-row">
    <td>{{ rowInfo.data.Prefix }}</td>
    <td>{{ rowInfo.data.FirstName }}</td>
    <td>{{ rowInfo.data.LastName }}</td>
    <td>{{ rowInfo.data.Position }}</td>
    <td>{{ formatDate(new Date(rowInfo.data.BirthDate)) }}</td>
    <td>{{ formatDate(new Date(rowInfo.data.HireDate)) }}</td>
    <td rowSpan="2">
      <DxButton
        text="Edit"
        @click="$emit('onEditButtonClick', rowInfo.data.ID)"
      ></DxButton>
      <DxButton
        text="Delete"
        @click="$emit('onDeleteButtonClick', rowInfo.data.ID)"
      ></DxButton>
    </td>
  </tr>
  <tr class="notes-row">
    <td colspan="6"><div>{{ rowInfo.data.Notes }}</div></td>
  </tr>
</template>

<template>
  <a-card :bordered="false" class="dashboard-bar-chart">
    <template #title>
      <div class="card-title">
        <h6>Task Calendar</h6>
        <p>Check your tasks for the selected month</p>
      </div>
    </template>
    <a-calendar :cell-render="cellRender" @select="handleDateSelect" />
    <a-modal
      v-model:visible="isModalVisible"
      title="Add Task"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <FormAddKPI ref="addKpiForm" />
    </a-modal>
  </a-card>
</template>
<script>
import { ref } from 'vue';
import FormAddKPI from '../Popup/AddTask.vue';

export default {
  components: {
    FormAddKPI,
  },
  setup() {
    const isModalVisible = ref(false);

    const handleDateSelect = () => {
      isModalVisible.value = true;
    };

    const handleOk = () => {
      isModalVisible.value = false;
    };

    const handleCancel = () => {
      isModalVisible.value = false;
    };

    return {
      isModalVisible,
      handleDateSelect,
      handleOk,
      handleCancel,
    };
  },
};
</script>

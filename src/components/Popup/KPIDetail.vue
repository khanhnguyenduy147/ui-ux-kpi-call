<template>
    <a-modal v-model:visible="isVisible" title="KPI Detail" @ok="handleOk" @cancel="handleCancel">
      <div class="kpi-detail">
        <div class="kpi-image">
          <img :src="kpiImage" alt="KPI Image" />
        </div>
        <div class="kpi-info">
          <h3>{{ kpiName }}</h3>
          <p>{{ kpiDescription }}</p>
        </div>
        <div class="kpi-tasks">
          <a-table :columns="taskColumns" :data-source="tasks" :pagination="false" />
        </div>
      </div>
    </a-modal>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'KPIDetail',
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
      kpiImage: {
        type: String,
        required: true,
      },
      kpiName: {
        type: String,
        required: true,
      },
      kpiDescription: {
        type: String,
        required: true,
      },
      tasks: {
        type: Array,
        required: true,
      },
    },
    setup(props, { emit }) {
      const taskColumns = [
        {
          title: 'Task Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Assigned To',
          dataIndex: 'assignedTo',
          key: 'assignedTo',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Due Date',
          dataIndex: 'dueDate',
          key: 'dueDate',
        },
      ];
  
      const handleOk = () => {
        emit('update:isVisible', false);
      };
  
      const handleCancel = () => {
        emit('update:isVisible', false);
      };
  
      return {
        taskColumns,
        handleOk,
        handleCancel,
      };
    },
  };
  </script>
  
  <style scoped>
  .kpi-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .kpi-image img {
    max-width: 100%;
    height: auto;
  }
  .kpi-info {
    text-align: center;
    margin: 20px 0;
  }
  .kpi-tasks {
    width: 100%;
  }
  </style>
  
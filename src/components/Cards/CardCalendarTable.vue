<template>
    <a-card :bordered="false" class="dashboard-bar-chart">
      <template #title>
        <div class="card-title">
          <h6>Task Calendar</h6>
          <p>Check your tasks for the selected month</p>
        </div>
      </template>
      <a-calendar :cell-render="cellRender" />
    </a-card>
  </template>
  <style scoped>
  .dashboard-bar-chart {
    width: 100%;
  }
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  
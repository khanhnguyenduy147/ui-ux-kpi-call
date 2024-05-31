<template>
  <a-form :form="form" @submit.prevent="handleSubmit">
    <a-form-item label="Task name" name="Input" :rules="[{ required: true, message: 'Please input!' }]">
      <a-input v-model="formInput" />
    </a-form-item>
    <a-form-item label="KPI">
      <a-select>
        <a-select-option value="demo">Teaching Term 20232</a-select-option>
        <a-select-option value="demo">Scientific Research</a-select-option>
        <a-select-option value="demo">Family</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Total Time (hours)" name="Total Time"
      :rules="[{ required: true, message: 'Please input!' }]">
      <a-input v-model="formTotalTime" style="width: 100%;" />
    </a-form-item>

    <a-form-item label="Quality" name="Quality" :rules="[
      { required: true, message: 'Please input!' },
      { validator: validateQuality }
    ]">
      <a-input v-model="formQuality" style="width: 100%;" />
    </a-form-item>

    <a-form-item label="Degree of importance" name="Select" :rules="[{ required: true, message: 'Please input!' }]">
      <a-select v-model="formSelect">
        <a-select-option value="low">
          <span style="color: #5dd36c;">Low</span>
        </a-select-option>
        <a-select-option value="medium">
          <span style="color: #6c5dd3;">Medium</span>
        </a-select-option>
        <a-select-option value="high">
          <span style="color: #d36c5d;">High</span>
        </a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="Deadline" name="DatePicker" :rules="[{ required: true, message: 'Please input!' }]">
      <a-date-picker v-model="formDatePicker" />
    </a-form-item>

    <a-form-item label="Time">
      <a-range-picker v-model="formRangePicker" />
    </a-form-item>
  </a-form>
</template>
<script>
import {
  Form as AForm,
  Input as AInput,
  Select as ASelect,
  DatePicker as ADatePicker,
  Button as AButton,
} from 'ant-design-vue';

export default {
  name: 'AddTask',
  components: {
    AForm,
    AInput,
    ASelect,
    ADatePicker,
    AButton,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      formInput: '',
      formTotalTime: '',
      formQuality: '',
      formSelect: null,
      formDatePicker: null,
      formRangePicker: [],
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values: ', values);
        }
      });
    },
    validateQuality(rule, value, callback) {
      if (value > 100) {
        callback('Quality must be less than or equal to 100');
      } else {
        callback();
      }
    },
  },
};
</script>

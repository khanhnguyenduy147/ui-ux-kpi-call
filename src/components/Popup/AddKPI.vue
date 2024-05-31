<template>
  <a-form :form="form" @submit.prevent="handleSubmit">
    <a-form-item label="KPI name" name="Input" :rules="[{ required: true, message: 'Please input!' }]">
      <a-input v-model="formInput" />
    </a-form-item>

    <!-- <a-form-item label="Estimated completion time (days)" name="InputNumber"
      :rules="[{ required: true, message: 'Please input!' }]">
      <a-input-number v-model="formInputNumber" style="width: 100%;" />
    </a-form-item> -->

    <a-form-item label="Description" name="TextArea" :rules="[{ required: true, message: 'Please input!' }]">
      <a-textarea v-model="formTextArea" :style="{ height: '150px' }" />
    </a-form-item>

    <!--
        <a-form-item
          label="Mentions"
          name="Mentions"
          :rules="[{ required: true, message: 'Please input!' }]"
        >
          <a-mentions v-model="formMentions" />
        </a-form-item>
      -->

    <a-form-item label="Degree of importance" name="Select" :rules="[{ required: true, message: 'Please input!' }]">
      <a-select v-model="formSelect">
        <a-select-option value="low">Low</a-select-option>
        <a-select-option value="medium">Medium</a-select-option>
        <a-select-option value="high">High</a-select-option>
      </a-select>
    </a-form-item>

    <!--
        <a-form-item
        label="Cascader"
        name="Cascader"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
      <a-cascader v-model="formCascader" />
      </a-form-item>
      
      <a-form-item
      label="TreeSelect"
      name="TreeSelect"
      :rules="[{ required: true, message: 'Please input!' }]"
      >
      <a-tree-select v-model="formTreeSelect" />
    </a-form-item>
    -->

    <!-- <a-form-item label="Deadline" name="DatePicker" :rules="[{ required: true, message: 'Please input!' }]">
      <a-date-picker v-model="formDatePicker" />
    </a-form-item> -->

    <a-form-item label="Day range" name="RangePicker" :rules="[{ required: true, message: 'Please input!' }]">
      <a-range-picker v-model="formRangePicker" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" htmlType="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {
  Form as AForm,
  Input as AInput,
  InputNumber as AInputNumber,
  Mentions as AMentions,
  Select as ASelect,
  Cascader as ACascader,
  TreeSelect as ATreeSelect,
  DatePicker as ADatePicker,
  Button as AButton,
} from 'ant-design-vue';

export default {
  name: 'AddKPI',
  components: {
    AForm,
    AInput,
    AInputNumber,
    AMentions,
    ASelect,
    ACascader,
    ATreeSelect,
    ADatePicker,
    AButton,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      formInput: '',
      formInputNumber: null,
      formTextArea: '',
      formMentions: '',
      formSelect: null,
      formCascader: [],
      formTreeSelect: null,
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
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
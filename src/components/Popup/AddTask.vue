<template>
    <a-form :form="form" @submit.prevent="handleSubmit">
      <a-form-item
        label="Input"
        name="Input"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-input v-model="formInput" />
      </a-form-item>
  
      <a-form-item
        label="InputNumber"
        name="InputNumber"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-input-number v-model="formInputNumber" style="width: 100%;" />
      </a-form-item>
  
      <a-form-item
        label="TextArea"
        name="TextArea"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-textarea v-model="formTextArea" />
      </a-form-item>
  
      <a-form-item
        label="Mentions"
        name="Mentions"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-mentions v-model="formMentions" />
      </a-form-item>
  
      <a-form-item
        label="Select"
        name="Select"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-select v-model="formSelect">
          <!-- Add your options here -->
        </a-select>
      </a-form-item>
  
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
  
      <a-form-item
        label="DatePicker"
        name="DatePicker"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
        <a-date-picker v-model="formDatePicker" />
      </a-form-item>
  
      <a-form-item
        label="RangePicker"
        name="RangePicker"
        :rules="[{ required: true, message: 'Please input!' }]"
      >
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
    name: 'AddTask',
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
  
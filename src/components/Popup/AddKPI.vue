<template>
<<<<<<< HEAD
  <div>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="vertical"
      :disabled="componentDisabled"
      style="max-width: 600px"
    >
      <a-form-item label="KPI Name">
        <a-input />
      </a-form-item>
      <a-form-item>
        <b>Scale (settings for calculating KPI scores)</b>
      </a-form-item>
      <a-form-item :label="timeLabel" :validate-status="timeStatus">
        <a-select v-model="time" @change="handleSelectChange">
          <a-select-option v-for="i in 11" :key="(i - 1) * 10" :value="(i - 1) * 10">{{ (i - 1) * 10 }}%</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="qualityLabel" :validate-status="qualityStatus">
        <a-select v-model="quality" @change="handleSelectChange">
          <a-select-option v-for="i in 11" :key="(i - 1) * 10" :value="(i - 1) * 10">{{ (i - 1) * 10 }}%</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="scheduleLabel" :validate-status="scheduleStatus">
        <a-select v-model="schedule" @change="handleSelectChange">
          <a-select-option v-for="i in 11" :key="(i - 1) * 10" :value="(i - 1) * 10">{{ (i - 1) * 10 }}%</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-alert v-if="totalStatus" type="error" message="The total percentage of Time, Quality, and Schedule must equal 100%." />
      </a-form-item>
      <a-form-item label="Time">
        <a-range-picker />
      </a-form-item>
      <a-form-item label="Import KPI data">
        <a-upload action="/upload.do" list-type="picture-card">
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">Import</div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const componentDisabled = ref(true);
const labelCol = { span: 24 }; // Full width for label
const wrapperCol = { span: 24 }; // Full width for input

const time = ref(0);
const quality = ref(0);
const schedule = ref(0);

const timeLabel = ref('Time Ratio');
const qualityLabel = ref('Quality Ratio');
const scheduleLabel = ref('Schedule Ratio');

const timeStatus = ref('');
const qualityStatus = ref('');
const scheduleStatus = ref('');
const totalStatus = ref(false);

const checkTotalPercentage = () => {
  const total = time.value + quality.value + schedule.value;
  if (total !== 100) {
    return 'error';
  }
  return '';
};

const handleSelectChange = () => {
  const total = time.value + quality.value + schedule.value;
  if (total > 100) {
    if (time.value + quality.value > 100) {
      schedule.value = 0;
    } else if (time.value + schedule.value > 100) {
      quality.value = 0;
    } else if (quality.value + schedule.value > 100) {
      time.value = 0;
    }
  } else {
    const fields = [time, quality, schedule];
    const selectedFields = fields.filter(field => field.value !== 0);
    if (selectedFields.length === 2) {
      const remainingField = fields.find(field => field.value === 0);
      remainingField.value = 100 - (selectedFields[0].value + selectedFields[1].value);
    }
  }
  
  timeStatus.value = checkTotalPercentage();
  qualityStatus.value = checkTotalPercentage();
  scheduleStatus.value = checkTotalPercentage();
  totalStatus.value = total !== 100;
};

watch([time, quality, schedule], handleSelectChange);
</script>
=======
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
>>>>>>> 6beba70d047a312314144273c2fe3d01ce8dde99

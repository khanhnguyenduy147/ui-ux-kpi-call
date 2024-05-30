<template>

	<!-- Orders History Timeline Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: '12px',}">
		<template #title>
			<h6>Suggested tasks</h6>			
			<p>this week <span class="text-success"></span></p>	
		</template>
		<a-timeline pending="..." :reverse="timelineReverse">
			<a-timeline-item color="green">
				Teaching UI UX class 178984
				<p>09 JUN 7:20 AM</p>
			</a-timeline-item>
			<a-timeline-item color="green">
				Research group meeting
				<p>08 JUN 12:20 PM</p>
			</a-timeline-item>
			<a-timeline-item color="blue">
				Teaching database subject class 172827
				<p>04 JUN 3:10 PM</p>
			</a-timeline-item>
			<a-timeline-item color="blue">
				Complete the contribution of the article "Artificial Intelligence"
				<p>02 JUN 2:45 PM</p>
			</a-timeline-item>
			<a-timeline-item color="blue">
				Grading midterm papers for class 178984
				<p>18 MAY 1:30 PM</p>
			</a-timeline-item>
			<a-timeline-item color="gray">
				Complete the introduction of the article "Artificial Intelligence"
				<p>14 MAY 3:30 PM</p>
			</a-timeline-item>
			<template #pendingDot> </template>
		</a-timeline>
		<a-button type="primary" block size="small" @click="showModal = true">
			<svg v-show="! timelineReverse" width="16" height="16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
			</svg>
        ADD TASK
      </a-button>
	  <a-modal
      v-model:visible="showModal" fill="currentColor"
      title="Add Task"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <AddTask />
    </a-modal>
	</a-card>
	<!-- / Orders History Timeline Card -->

</template>

<script>
import { Modal as AModal, Button as AButton, Card as ACard, Timeline as ATimeline, TimelineItem as ATimelineItem } from 'ant-design-vue';
import AddTask from '../Popup/AddTask.vue';

export default {
  components: {
    AModal,
    AButton,
    ACard,
    ATimeline,
    ATimelineItem,
    AddTask,
  },
  data() {
    return {
      showModal: false,
      timelineReverse: false,
    };
  },
  methods: {
    handleOk() {
      this.showModal = false;
    },
    handleCancel() {
      this.showModal = false;
    },
  },
};
</script>
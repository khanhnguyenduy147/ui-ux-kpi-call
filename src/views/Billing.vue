<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

 <template>
	<a-calendar v-model:value="value">
	  <template #dateCellRender="{ current: value }">
		<ul class="events">
		  <li v-for="item in getListData(value)" :key="item.content">
			<a-badge :status="item.type" :text="item.content" />
		  </li>
		</ul>
	  </template>
	  <template #monthCellRender="{ current: value }">
		<div v-if="getMonthData(value)" class="notes-month">
		  <section>{{ getMonthData(value) }}</section>
		  <span>Backlog number</span>
		</div>
	  </template>
	</a-calendar>
  </template>

<script>

	// Bar chart for "Active Users" card.
	import CardBarChart from '../components/Cards/CardBarChart' ;

	// Line chart for "Sales Overview" card.
	import CardLineChart from '../components/Cards/CardLineChart' ;

	// Counter Widgets
	import WidgetCounter from '../components/Widgets/WidgetCounter' ;

	// "Projects" table component.
	import CardProjectTable from '../components/Cards/CardProjectTable' ;

	// Order History card component.
	import CardOrderHistory from '../components/Cards/CardOrderHistory' ;

	// Information card 1.
	import CardInfo from '../components/Cards/CardInfo' ;

	// Information card 2.
	import CardInfo2 from '../components/Cards/CardInfo2' ;

	// Counter Widgets stats
	const stats = [
		{
			title: "Total Time",
			value: 146,
			prefix: " ",
			suffix: "+16%",
			icon: `
			<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
			</svg>
			`,
		},
		{
			title: "Quality",
			value: 87,
			suffix: "+5%",
			icon: `
			<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
			</svg>
			`,
		},
		{
			title: "Schedule",
			value: 50,
			prefix: "",
			status: "danger",
			suffix: "-20%",
			icon: `
			<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
			</svg>
			`,
		},
		{
			title: "Total Tasks",
			value: 279,
			prefix: "",
			suffix: "+10%",
			icon: `
			<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
			<path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
			</svg>
			`,
		},
	] ;

	// "Projects" table list of columns and their properties.
	const tableColumns = [
		{
			title: 'KPI NAME',
			dataIndex: 'company',
			scopedSlots: { customRender: 'company' },
			width: 300,
		},
		{
			title: 'TOTAL TASKS',
			dataIndex: 'members',
			scopedSlots: { customRender: 'members' },
		},
		{
			title: 'TASK COMPLETED',
			dataIndex: 'budget',
			class: 'font-bold text-muted text-sm',
		},
		{
			title: 'POINT',
			scopedSlots: { customRender: 'completion' },
			dataIndex: 'completion',
		},
	];

	// "Projects" table list of rows and their properties.
	const tableData = [
		{
			key: '1',
			company: {
				name: 'Teaching Term 20232',
				logo: 'images/logos/hust-logo.png',
			},
			members: '280',
			budget: '224',
			completion: {
				label: '92',
				status: 'success',
				value: 80,
			},
		},
		{
			key: '2',
			company: {
				name: 'Scientific Research',
				logo: 'images/logos/Google_Scholar_logo.png',
			},
			members: '98',
			budget: '60',
			completion: 72,
		},
		{
			key: '3',
			company: {
				name: 'Family',
				logo: 'images/logos/family.jpg',
			},
			members: '150',
			budget: '50',
			completion: {
				label: '40',
				status: 'exception',
				value: 40,
			},
		},
	];

	export default ({
		setup() {
    const value = ref();
    const getListData = value => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            {
              type: 'warning',
              content: 'This is warning event.',
            },
            {
              type: 'success',
              content: 'This is usual event.',
            },
          ];
          break;
        case 10:
          listData = [
            {
              type: 'warning',
              content: 'This is warning event.',
            },
            {
              type: 'success',
              content: 'This is usual event.',
            },
            {
              type: 'error',
              content: 'This is error event.',
            },
          ];
          break;
        case 15:
          listData = [
            {
              type: 'warning',
              content: 'This is warning event',
            },
            {
              type: 'success',
              content: 'This is very long usual event。。....',
            },
            {
              type: 'error',
              content: 'This is error event 1.',
            },
            {
              type: 'error',
              content: 'This is error event 2.',
            },
            {
              type: 'error',
              content: 'This is error event 3.',
            },
            {
              type: 'error',
              content: 'This is error event 4.',
            },
          ];
          break;
        default:
      }
      return listData || [];
    };
    const getMonthData = value => {
      if (value.month() === 8) {
        return 1394;
      }
    };
    return {
      value,
      getListData,
      getMonthData,
    };
  },
		components: {
			CardBarChart,
			CardLineChart,
			WidgetCounter,
			CardProjectTable,
			CardOrderHistory,
			CardInfo,
			CardInfo2,
		},
		data() {
			return {

				// Associating table data with its corresponding property.
				tableData,

				// Associating table columns with its corresponding property.
				tableColumns,

				// Counter Widgets Stats
				stats,
			}
		},
	})

</script>

<style scoped>
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
.notes-month section {
  font-size: 28px;
}
</style>
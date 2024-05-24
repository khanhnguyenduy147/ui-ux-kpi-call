<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

 <template>
	<div>
		<!-- Counter Widgets -->
		<a-row :gutter="24">
			<a-col :span="24" :lg="12" :xl="3" class="mb-24" >
				<!-- Widget 1 Card -->
				<a-button type="primary" href="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation" block target="_blank">
					<svg v-show="! timelineReverse" width="16" height="16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
					</svg>
	
					ADD KPI
				</a-button>
				<!-- / Widget 1 Card -->
			</a-col>
			<a-col :span="24" :lg="12" :xl="3" class="mb-24" >
				<!-- Widget 1 Card -->
				<a-button type="primary" href="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation" block target="_blank">
					<svg v-show="! timelineReverse" width="16" height="16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
					<path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
					</svg>

					IMPORT KPI
				</a-button>
				<!-- / Widget 1 Card -->
			</a-col>
		</a-row>
		<!-- / Counter Widgets -->
		
		<!-- Charts -->
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :lg="10" class="mb-24">

				<!-- Active Users Card -->
				<CardBarChart></CardBarChart>
				<!-- Active Users Card -->

			</a-col>
			<a-col :span="24" :lg="14" class="mb-24">
				
				<!-- Sales Overview Card -->
				<CardLineChart></CardLineChart>
				<!-- / Sales Overview Card -->

			</a-col>
		</a-row>
		<!-- / Charts -->

		<!-- Table & Timeline -->
		<a-row :gutter="24" type="flex" align="stretch">
		<!-- Table -->
		<a-col :span="24" :lg="24" class="mb-24">
			
			<!-- Projects Table Card -->
			<CardProjectTable
			:data="tableData"
			:columns="tableColumns"
			class="full-width-table"
			></CardProjectTable>
			<!-- / Projects Table Card -->
			
		</a-col>
		<!-- / Table -->

		</a-row>

		<!-- / Table & Timeline -->

	</div>
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

<style lang="scss">
</style>
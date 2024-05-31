<template>

	<!-- Active Users Card -->
	<a-card :bordered="false" class="dashboard-bar-chart">
		<chart-bar :height="220" :data="barChartData"></chart-bar>
		<div class="card-title">
			<h6>Task Chart</h6>
			<p>than last week <span class="text-success">+23%</span></p>
		</div>
		<div class="card-content">
			<p>The number of tasks is higher than last week but there are still tasks behind schedule, please pay attention!</p>
		</div>
		<a-row class="card-footer" type="flex" justify="center" align="top">
			<a-col :span="6">
				<h4>98</h4>
				<span>Task</span>
			</a-col>
			<a-col :span="6">
				<h4>12,8</h4>
				<span>Hours</span>
			</a-col>
			<a-col :span="6">
				<h4>12</h4>
				<span>Tasks are behind schedule</span>
			</a-col>
		</a-row>
	</a-card>
	<!-- Active Users Card -->

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartBar from '../Charts/ChartBar' ;

	export default ({
		components: {
			ChartBar,
		},
		data() {
			return {
				// Data for bar chart.
				barChartData: {
					labels: ["Sun", "Mon", "Tues", "Wedn", "Thur", "Fri", "Sat"],
					datasets: [{
						label: "Tasks",
						backgroundColor: '#fff',
						borderWidth: 0,
						borderSkipped: false,
						borderRadius: 6,
						data: [10, 8, 20, 12, 6, 17, 25],
						maxBarThickness: 20,
					}, ],
				},
			}
		},
	})

</script>
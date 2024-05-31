<template>

	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
			<h6>KPIs Overview</h6>			
			<p>May <span class="text-success"></span></p>	
		</template>
		<template #extra>
			<a-badge color="#6c5dd3" class="badge-dot-primary" text="Teaching Term 20232" />
			<a-badge color="#5dd36c" class="badge-dot-secondary" text="Scientific Research" />
			<a-badge color="#d36c5d" class="badge-dot-secondary" text="Family" />
		</template>
		<chart-line :height="310" :data="lineChartData"></chart-line>
	</a-card>

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartLine from '../Charts/ChartLine' ;

	export default ({
		components: {
			ChartLine,
		},
		data() {
			return {

				// Data for line chart.
				lineChartData: {
					labels: ["0", "5", "10", "15", "20", "25", "31"],
					datasets: [{
						label: "Teach ponit",
						tension: 0.4,
						borderWidth: 0,
						pointRadius: 0,
						borderColor: "#6c5dd3",
						borderWidth: 3,
						data: [0, 12, 32, 35, 72, 79, 92],
						maxBarThickness: 6

					},
					{
						label: "Research point",
						tension: 0.4,
						borderWidth: 0,
						pointRadius: 0,
						borderColor: "#5dd36c",
						borderWidth: 3,
						data: [0, 2, 15, 38, 49, 62, 72],
						maxBarThickness: 6

					},
					{
						label: "Family point",
						tension: 0.4,
						borderWidth: 0,
						pointRadius: 0,
						borderColor: "#d36c5d",
						borderWidth: 3,
						data: [0, 1, 12, 18, 29, 35, 40],
						maxBarThickness: 6

					},
				],
				},
			}
		},
	})

</script>
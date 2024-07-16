'use client'
import Chart from "react-apexcharts";

export default function BarChart({seriesData, seriesName, title}) {

	let series = [
		{
			name: seriesName,
			data: seriesData
		}
	]
	let options = {
		chart: {
			id: "basic-bar",
			toolbar: { show: false },
			fontFamily: "Inter",
		},
		plotOptions: {
			bar: {
				borderRadius: 1,
				dataLabels: {
					position: 'top', // top, center, bottom
				},
			}
		},
		dataLabels: {
			enabled: true,
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ["#304758"]
			}
		},
		colors: [ '#7367f0' ],
		xaxis: {
			type: 'category',
			position: "bottom",
			labels: {
				rotate: 0,
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		grid: {
			show: true,
			borderColor: '#ccc',
			strokeDashArray: 3,
		},
		yaxis: {
			tickAmount: 2,
			decimalsInFloat: 0,
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
		},
	}
	return <article className="col-6">
		<div className="card shadow">
			<div className="card-body">
				<h6 className={ 'text-secondary' }>{ title }</h6>
				<Chart
					options={ options }
					series={ series }
					type="bar"
					width="100%"
					height={ 300 }
				/>
			</div>

		</div>

	</article>
}
'use client'
import Chart from "react-apexcharts";


// @ts-ignore
export default function DateStringChart( {seriesData, seriesName, title}) {
	let option = {
		chart: {
			id: "date-chart",
			toolbar: {show: false},
			fontFamily: "Inter",
		},
		dataLabels: {
			enabled: true,
		},
		colors: ['#7367f0',],
		xaxis: {
			type: 'datetime',
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
		},
		yaxis: {
			decimalsInFloat: 0,
			tickAmount: 2,
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
		},
	}
	let series = [
		{
			name: seriesName,
			data: seriesData
		}
	]

	return <article className="col-6">
		<div className="card shadow">
			<div className="card-body">
				<h6 className={'text-secondary'}>{title}</h6>
				<div className="chart">
					<Chart options={option} width={"100%"} height={300} series={series}  type={"area"}/>
				</div>
			</div>
		</div>
	</article>

}
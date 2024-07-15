'use client'
import Chart from "react-apexcharts";


export default function DateStringChart({seriesData, seriesName, title}) {
	let options = {
		chart: {
			type: "area",
			id: "date-chart",
			toolbar: { show: false },
			fontFamily: "Inter",

		},
		dataLabels: {
			enabled: true,
		},
		colors: [ '#7367f0', ],
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
	return <div className="card chart-item">
		<h6 className={ "font-semi-bold" }>{title}</h6>
		<Chart options={ options } width={ "100%" } height={ 300 } series={ series } type={"area"}/>
	</div>
}
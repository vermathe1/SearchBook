import React from "react";
const LineChart = require("react-chartjs").Line;
import {getItemFromLocalStorage} from '../localStorage';

const ShowChart =(props)=>{
	return(
		<div className="form">
			<form onChange={e=>handleFormChange(e,props.dispatch)}>
				<select>
					<option value ="select">Select</option>
					<option value ="2017">2017</option>
					<option value ="2018">2018</option>
					<option value ="2019">2019</option>
				</select>
			</form>
			<LineChart data={getChartInfo(props.selectedYear)} width="300px" height="300px" />
		</div>
	);

}

const handleFormChange =(e,dispatch)=>{
	e.preventDefault();
	if(e.target.value === "select"){
		return;
	}
	dispatch({type:'chartYearChnage', year:e.target.value})
}

const getChartInfo=(year)=>{
	const booksInfo = getItemFromLocalStorage('addedBooks');
	const data = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	if(booksInfo === undefined || year === undefined){
		var booksCount = data;
	}
	else{
		var booksCount = booksInfo.reduce((acc,addedBook)=>{
			if(new Date(addedBook.addedOn).getFullYear() == year){
				const addedOn = new Date(addedBook.addedOn);
				acc[addedOn.getMonth()] = acc[addedOn.getMonth()]+1 || 1;	
			}
			return acc;
		},data);


	}
	return {
	    labels: [
	      'January', 'February', 'March',
	      'April', 'May', 'June',
	      'July', 'August', 'September',
	      'October', 'November', 'December'
	    ],
	    datasets: [{
	      fill: false,
	      lineTension: 0.1,
	      backgroundColor: "rgba(75,192,192,0.4)",
	      borderColor: "rgba(75,192,192,1)",
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: "rgba(75,192,192,1)",
	      pointBackgroundColor: "#fff",
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: "rgba(75,192,192,1)",
	      pointHoverBorderColor: "rgba(220,220,220,1)",
	      pointHoverBorderWidth: 2,
	      pointRadius: 1,
	      pointHitRadius: 10,
	      data: booksCount, // inserting booksCount here
	      spanGaps: false
	    }]
	}
}

export default ShowChart;
import React from 'react';

const ShowMyBooks = (props)=>{
		return(
			<div>
				{!!props.books && props.books.map((item,index)=><Bookholder key={index} data = {item}/>)}
			</div>
		);
}
const Bookholder = (props)=>{
	return(
		<div id = "booksHolder">
			<a href = "#" className = "block">
				<img src = {props.data.image} className = "block"/>
				<p>{props.data.title.length > 10?props.data.title.substr(0,10)+"...":props.data.title}</p>
			</a>
		</div>
	);
}
export default ShowMyBooks;
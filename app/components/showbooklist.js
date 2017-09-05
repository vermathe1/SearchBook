import React from 'react';
import {addmybook} from '../actions'

const ShowSearchResult = props=>{
	return(
		<div id = "imageHolder" onClick = {()=>addBook(props)}>
			<a href = "#"  className = "block">
				<img src = {props.image} className = "block"/>
				<p>{props.title.length > 10?props.title.substr(0,10)+"...":props.title}</p>
			</a>
		</div>
	);
};
const addBook = (props)=>{	
	props.dispatch(addmybook(props));
}
export default ShowSearchResult;
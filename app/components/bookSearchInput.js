import React from 'react';
import {searchBooks}from '../actions';

const BooksearchInputform = (props)=>{
	return(
		<form className = 'form-inline' onChange = {e=>handleFormChange(e,props.info)} onSubmit = {e=>handleFormSubmit(e,props.info)}>
			<div className = 'form-group'>
				<input type = "text" placeholder = "Search Book" value = {props.info.searchText}/>
			</div>
			<button type = "submit" className = "btn btn-default">Submit</button>
		</form>
	);
}

const handleFormChange = (e,props)=>{
	const {dispatch} = props;
	dispatch({type:'SEARCHED_TEXT',text:e.target.value})
}

const handleFormSubmit = (e,props)=>{
	e.preventDefault();
	const {dispatch} = props;
	dispatch(searchBooks(props.searchText));
}

export default BooksearchInputform;
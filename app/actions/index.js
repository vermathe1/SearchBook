import React from 'react';
import Api from '../Api';

export const searchBooks = (searchItem)=>{
	return (dispatch,getState)=>{
		dispatch({type:'SEARCH_REQUEST', searchingText:searchItem})
		return Api.searchBooks(searchItem).then(r=>r.fold(searchError, success=>SearchSuccess(success))).then(dispatch);
	}
}
const searchError = (res)=>{
	return(
		({type:'ERROR_IN_FETCHING', error:"Network Error"})
	);
}
const SearchSuccess = (info)=>{
	return (
		{type:'RECEIVED_BOOK', searchBooks:booksInfo(info)}
	);
}
const getCoverImage = key =>!!key ? `https://covers.openlibrary.org/b/olid/${key}-M.jpg`:`http://placehold.it/180x298?text=No Image Found`;

export const addmybook = (props)=>{
	return (dispatch,getState)=>{
		dispatch({type:"ADD_BOOKS", mybooks:{'image': props.image, 'title': props.title, 'addedOn': new Date()}});
	}
}
const booksInfo = (info)=>{
	const slicedArray = info.docs.slice(0,20);
	const result = slicedArray.map(data=>arrangeBooksInfo(data));
	return result;
}

const arrangeBooksInfo = (info)=>{
	return {
		author_name:info.author_name,
		cover_image:getCoverImage(info.cover_edition_key),
		title:info.title
	};
}
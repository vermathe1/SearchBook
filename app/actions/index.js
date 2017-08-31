import React from 'react';
import Api from '../Api';
import {prop,pick,compose,slice,assoc,omit,map} from 'ramda';

export const searchBooks=(searchItem)=>{
	return (dispatch,getState)=>{
		dispatch({type:'SEARCH_REQUEST',searchingText:searchItem})
		return Api.searchBooks(searchItem).then(r=>r.fold(searchError,success=>SearchSuccess(success))).then(dispatch);
	}
}
const searchError = (res)=>({type:'ERROR_IN_FETCHING', error:"Network Error"})
const SearchSuccess = (info)=>({type:'RECEIVED_BOOK' , searchBooks:booksInfo(info)})
const getCoverImage=key=> !!key ? `https://covers.openlibrary.org/b/olid/${key}-M.jpg`:`http://placehold.it/180x298?text=No Image Found`;

const booksInfo =compose(
  map( compose(
    omit(['cover_edition_key']),
    book => assoc('cover_image', getCoverImage(book.cover_edition_key), book),
    pick(['author_name', 'title', 'cover_edition_key', 'key'])
  )),
  slice(0, 20),
  prop('docs')
)

export const addmybook =(props)=>{
	return (dispatch,getState)=>{
		dispatch({type:"MY_BOOKS",mybooks:{'image':props.image,'title':props.title, 'addedOn':new Date()}});
	}
}
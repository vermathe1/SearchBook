import React from 'react';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import Root from './containers/index';
import  ReactDOM from 'react-dom';
import {saveItem,getItemFromLocalStorage} from './localStorage.js';
import "./css/index.css";

const persistedState = {
	searchingList : {
		addedBooks:getItemFromLocalStorage('addedBooks') || [],
		search :getItemFromLocalStorage('search') || []
	}
}

const store = configureStore(persistedState);

 store.subscribe(()=>{
 	var  item = store.getState().searchingList.search ;
 	var mybooks = store.getState().searchingList.addedBooks;
 	if(!!item){
 		saveItem(item,'search');
 	}
 	if(!!mybooks !== undefined){
 		saveItem(mybooks,'addedBooks');
 	}
 })

render(
	<Provider store ={store} >
		<Root/>
	</Provider>
	,document.getElementById('app')
);
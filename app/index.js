import React from 'react';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import Root from './containers/index';
import  ReactDOM from 'react-dom';
import {saveItem,getItem} from './localStorage.js';
import "./css/index.css";

const store = configureStore();

 store.subscribe(()=>{
 	var  item = store.getState().searchingList.searchingText || undefined;
 	var mybooks = store.getState().searchingList.my_books || undefined;
 	if(item !== undefined){
 		saveItem(item,'search');
 	}
 	if(mybooks !== undefined){
 		saveItem(mybooks,'addedBooks');
 	}
 })

render(
	<Provider store ={store} >
		<Root/>
	</Provider>
	,document.getElementById('app')
);
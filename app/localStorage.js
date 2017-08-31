export const saveItem=(items,key)=>{
	const serializedState = JSON.stringify(items);
	localStorage.setItem(key,serializedState);
}
export const getItemFromLocalStorage=(key)=> { 
	var  serializedState=localStorage.getItem(key);
	if(serializedState === null){
		return undefined;
	}
	return (JSON.parse(serializedState));
};
import React from 'react';

const modal = (props)=>{
	return(
		<div className="modal-error alert alert-danger">
			<strong>{props.error}</strong>
		</div>
	);
}

export default modal;
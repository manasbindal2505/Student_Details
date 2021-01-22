import React from 'react'
import { PropTypes } from "prop-types";

const Popup = ({text,closePopup}) =>{

	return(
		<div>
			<div className='popup'>
				<div className='popup_inner'>
					{text.name && <h1>{text.name}</h1>}
					{text.roll && <p >Roll: {text.roll}</p>}
					{text.age && <p >Age: {text.age}</p>}
					{text.dob && <p >Date of Birth: {text.dob}</p>}
					{text.class && <p >Class: {text.class}</p>}
					<button className='btn-close' onClick={()=>closePopup()}>Close </button>
				</div>
			</div>

		</div>
	)
}

Popup.propTypes = {
	text:PropTypes.object.isRequired,
	closePopup:PropTypes.func.isRequired,
}


export default Popup

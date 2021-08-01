
import React from 'react'
import './style.scss'

const Button = ( props ) => {
	return(

		<button>
			<div className={`btn ${ props.color ? 'btn__' + props.color  : null }`}>
				<strong>{ props.title }</strong>
			</div>
		</button>

	)
}

export default Button
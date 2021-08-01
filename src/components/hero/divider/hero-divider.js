
import React from 'react'
import './style.scss'

const HeroDivider = ( props ) => {
	return(

		<div className="hero__divider">
			<img src={ props.image } alt={ props.imageAlt } />
		</div>

	)
}

export default HeroDivider

import React from 'react'
import './style.scss'

const ContentContainer = ( props ) => {
	return(

		<div className={`content__wrap ${ props.bgColor ? 'content__wrap--' + props.bgColor : null }`}>
			<div className="content">
				{ props.children }
			</div>
		</div>

	)
}

export default ContentContainer
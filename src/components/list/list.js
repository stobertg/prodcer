
import React from 'react'
import './style.scss'

const List = ( props ) => {
	return(

		<div className={`list__contain ${ props.vertical ? 'list__contain--vertical' : null }`}>
			<ul className={ props.columns ? 'list__columns--' + props.columns : null }>
				{ props.children }
			</ul>
		</div>

	)
}

export default List
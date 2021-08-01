
import React from 'react'
import './style.scss'

const Heading = ( props ) => {
	const H = `h${ props.hTag }`;

	return(

		<div className={`heading heading__${ props.size }`}>
			{ props.hTag
				? <H><strong>{ props.title }</strong></H>

				: <div className={`${ props.color ? 'text__' +  props.color: ''}`}>
            { props.subTitle 
              ? <div>
                  <div><strong>{ props.title}</strong></div>
                  <div className={`heading__sub--title ${ props.subTitleColor ? 'text__' +  props.subTitleColor:''}`}>
                    { props.subTitle}
                  </div>
                </div>

              : <strong>{ props.title}</strong> 
            }
      	  </div>
			}
		</div>

	)
}

export default Heading
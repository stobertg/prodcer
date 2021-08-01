
import React from 'react'
import './style.scss'

const Card = ( props ) => {
	return(

		<div>
			{ props.onClick 

				? <button className={`card card__cap ${ props.disabled ? 'card__disabled' : null }`}>
						<figure>
			        <div className="card__cap--icon"><img src={ props.icon } alt="Globe Icon" /></div>
			        <figcaption><strong>{ props.title }</strong></figcaption>
			      </figure>
					</button>

				: <div className={`card card__cap ${ props.disabled ? 'card__disabled' : null }`}>
						<figure>
			        <div className="card__cap--icon"><img src={ props.icon } alt="Globe Icon" /></div>
			        <figcaption><strong>{ props.title }</strong></figcaption>
			      </figure>
			    </div>

      }
    </div>

	)
}

export default Card
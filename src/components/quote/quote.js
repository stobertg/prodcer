
import React from 'react'
import Heading from '../headings/headings'
import './style.scss'

import Selena from '../../images/selena.jpg'

const Quote = ( props ) => {
	return(

		<div className="quote__wrap">
			<Heading size="medium" title="Kundenstimmen" />
			<div className="quote">
				<div className="quote__content">

					<div className="quote__title"><Heading size="medium" title="Schnelle Unterstützung mit hoher Qualität" /></div>

					<div className="quote__text">
						<p>"Besonders kleinere Umsetzungen haben in der Vergangenheit unverhältnismäßig viel Zeit gekostet. Das ist dank Producer jetzt vorbei. Das einfache Briefing und die transparente Abwicklung haben mic und meine Kollegen überzeugt. Gerne wieder!"</p>
					</div>

					<div className="quote__person">
						<div className="headshot"><img src={ Selena } alt="Selena Gomez" /></div>
						<div className="quote__person--info">
							<div><strong>Joshua Raabe</strong></div>
							<div><strong>CEO Collective Mind</strong></div>
						</div>
					</div>

				</div>
			</div>
		</div>

	)
}

export default Quote
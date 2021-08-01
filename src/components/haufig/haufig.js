
import React from 'react'
import Heading from '../headings/headings'
import Button from '../button/button'
import './style.scss'

const Haufig = ( props ) => {
	return(

		<div className="haufig">
			<div className="haufig__text">
				<Heading size="large" title={ <span>Häufig gestellte <span>Fragen</span></span> } />
				<div><p>Noch eine Frage? Kontakieren Sie uns einfach und wir melden uns schnellstmöglich zurück. Bis bald!</p></div>
				<Button color="black" title="Jetzt anfragen" />
			</div>

			<div className="accordion">
				<ul>
					<li><div><strong>Allgemein</strong></div><span className="icon__arrow--right"></span></li>
					<li><div><strong>Bestellungen und Aufräge</strong></div><span className="icon__arrow--right"></span></li>
					<li><div><strong>Zahlung und Rechnung</strong></div><span className="icon__arrow--right"></span></li>
				</ul>
			</div>
		</div>

	)
}

export default Haufig
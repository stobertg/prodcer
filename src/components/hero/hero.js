
import React from 'react'
import Heading from '../headings/headings'
import './style.scss'

import HeroImg from '../../images/hero.png'
import EUFlag from '../../images/eu.png'

const Hero = ( props ) => {
	return(

		<div className="hero">
			<div className="hero__content">
				<div className="hero__text">

					<div className="hero__text--callout">
						<div className="text__green"><strong>Gefördert Durch ....</strong></div>

						<div className="hero__text--callout-eu">
							<img src={ EUFlag } alt="European Union Flag" />

							<div>
								<div>Europäische Union</div>
								<div>Europäische Strukturund Investitionsfonds</div>
							</div>
						</div>
					</div>

					<div className="hero__text--title">
						<div className="text__green"><strong>Kommunikation Online Beauftragen</strong></div>
						<Heading 
							hTag="1"
							size="large"
							title={ <span>Eine Plattform<span>für alles</span></span> }
						/>
					</div>

					<div className="hero__text--desp">
						<p>Mit Producer sparen Sie Zeit, Geld und Nerven bei der Beauftragung von Kommunikationsdienst-leistungen jeder Art. Von schnellen Übersetzungen and überzeugenden Texten bis hin zu innovativen Designs and packenden Filmen - über unsere zentrale Plattform haben Sie Zugriff auf die Leistungen unzähliger erfahrener Experten aus jeder Disziplin.</p>
					</div>
				</div>

				<div className="hero__img">
					<img src={ HeroImg } alt="Hero image" />
				</div>
			</div>
		</div>

	)
}

export default Hero
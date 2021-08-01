
import React from 'react'
import './style.scss'

const Chart = ( props ) => {
	return(

		<div className="chart__wrap">
			<div className="chart">
				<div className="chart__num"><strong>01</strong></div>

				<div className="chart__graph">
					<div className="chart__point">
						<div className="chart__point--inner">
							<div></div>
						</div>
					</div>
				</div>

				<div className="chart__text">
					Wählen Sie thre Dienstleistung aus
				</div>
			</div>

			<div className="chart chart__inverse">
				<div className="chart__num"><strong>02</strong></div>

				<div className="chart__graph">
					<div className="chart__point">
						<div className="chart__point--inner">
							<div></div>
						</div>
					</div>
				</div>

				<div className="chart__text">
					Erstellen Sie lhr Briefing
				</div>
			</div>

			<div className="chart">
				<div className="chart__num"><strong>03</strong></div>

				<div className="chart__graph">
					<div className="chart__point">
						<div className="chart__point--inner">
							<div></div>
						</div>
					</div>
				</div>

				<div className="chart__text">
					Wir berechnen in Echtzeit den Preis
				</div>
			</div>

			<div className="chart chart__inverse">
				<div className="chart__num"><strong>04</strong></div>

				<div className="chart__graph">
					<div className="chart__point">
						<div className="chart__point--inner">
							<div></div>
						</div>
					</div>
				</div>

				<div className="chart__text">
					Geben Sie lhr Projekt in Auftrag
				</div>
			</div>

			<div className="chart">
				<div className="chart__num"><strong>05</strong></div>

				<div className="chart__graph">
					<div className="chart__point">
						<div className="chart__point--inner">
							<div></div>
						</div>
					</div>
				</div>

				<div className="chart__text">
					Sei erhalten termingerecht lhr Ergebnis
				</div>
			</div>
		</div>

	)
}

export default Chart
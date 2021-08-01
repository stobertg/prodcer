
import React from 'react'
import Heading from '../headings/headings'
import List from '../list/list'
import './style.scss'

const Checklist = ( props ) => {
	return(

		<div className="checklist">
			<Heading hTag="h3" size="large" title={ <div>Wir machen <div className="text__green">Kommunikation planbar</div></div> } />

			<div className="checklist__checks">
        <List vertical>
          <li><span className="icon icon__check"><span></span></span><span>Live-Kostenkalkulation für maximale Transparenz</span></li>
          <li><span className="icon icon__check"><span></span></span><span>Schnelles, intuitives Briefinh für hohe Effizienz</span></li>
          <li><span className="icon icon__check"><span></span></span><span>Garantierte Lieferung zum vereinbarten Termin</span></li>
        </List>
      </div>
		</div>

	)
}

export default Checklist
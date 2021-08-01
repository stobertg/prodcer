
import React from 'react'
import Heading from '../headings/headings'
import List from '../list/list'
import './style.scss'

import partnerOne from '../../images/partners/partner-1.jpg'
import partnerTwo from '../../images/partners/partner-2.jpg'
import partnerThree from '../../images/partners/partner-3.jpg'
import partnerFour from '../../images/partners/partner-4.jpg'
import partnerFive from '../../images/partners/partner-5.jpg'

const Partners = ( props ) => {
	return(

		<div className="partners">
			<Heading size="large" title={<span>Unsere <span>Partner</span></span>} />
			
			<List columns="5">
				<li><img src={ partnerOne } alt="This is some alt text"/></li>
				<li><img src={ partnerTwo } alt="This is some alt text"/></li>
				<li><img src={ partnerThree } alt="This is some alt text"/></li>
				<li><img src={ partnerFour } alt="This is some alt text"/></li>
				<li><img src={ partnerFive } alt="This is some alt text"/></li>
			</List>
		</div>

	)
}

export default Partners
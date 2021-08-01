
import React from 'react'
import Heading from '../headings/headings'
import List from '../list/list'
import Card from '../card/card'
import './style.scss'

import iconGlobe from '../../images/icons/globe.jpg'
import iconDocument from '../../images/icons/document.jpg'
import iconEdit from '../../images/icons/edit.jpg'
import iconLayers from '../../images/icons/layers.jpg'
import iconChart from '../../images/icons/chart.jpg'
import iconBook from '../../images/icons/book.jpg'
import iconGraph from '../../images/icons/graph.jpg'
import iconSocial from '../../images/icons/social.jpg'
import iconChat from '../../images/icons/chat.jpg'
import iconSearch from '../../images/icons/search.jpg'
import iconShare from '../../images/icons/share.jpg'
import iconApps from '../../images/icons/apps.jpg'
import iconVideo from '../../images/icons/video.jpg'
import iconImages from '../../images/icons/images.jpg'

const Caps = ( props ) => {
	return(

		<div className="caps__contain">
      <Heading hTag="2" size="large" title={ <span>360˚ <span>Leistungen</span></span> } />

      <div className="caps">
        <List columns="5">
          <li><Card onClick icon={ iconGlobe    } title="Translation" /></li>
          <li><Card onClick icon={ iconDocument } title="Proofreading" /></li>
          <li><Card onClick icon={ iconEdit     } title="Editing" /></li>
          <li><Card onClick icon={ iconLayers   } title="Infographics" /></li>
          <li><Card onClick icon={ iconChart    } title="Charts" /></li>

          <li><Card onClick icon={ iconBook 	  } title="Text Production" /></li>
          <li><Card onClick icon={ iconGraph 		} title="QuickCheck & Ai Consulting" /></li>
          <li><Card onClick icon={ iconSocial 	} title="Social Media Content" /></li>
          <li><Card disabled onClick icon={ iconChat 		} title="Consulting" /></li>
          <li><Card disabled onClick icon={ iconSearch 	} title="Research" /></li>

          <li><Card disabled onClick icon={ iconShare 		} title="Digital Marketing" /></li>
          <li><Card disabled onClick icon={ iconApps 		} title="Apps" /></li>
          <li><Card disabled onClick icon={ iconVideo 		} title="Movies" /></li>
          <li><Card disabled onClick icon={ iconImages 	} title="Photography" /></li>

          <li>
          	<div className="caps__more">
          		<div>
          	  	<div className="icon__dots"><span></span></div>
          	  	<div><strong>Und noch mehr der Pipeline!</strong></div>
          	  </div>
          	</div>
          </li>
        </List>
      </div>
    </div>

	)
}

export default Caps
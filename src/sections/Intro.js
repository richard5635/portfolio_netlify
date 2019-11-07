import React from 'react'

import Container from '../components/Container'
import avatar from '../../content/images/me.png'

class Intro extends React.Component {
	render() {
		return (
			<Container>
				<div className="ui stackable grid work-container intro">
					<div className="ui eight wide column">
						<p>Richard Hartanto is a graduate student in UTokyo focusing on computer vision and interaction design.
							Currently a computer vision intern at Pretia.
          Loves streaming comedy and relaxing in onsen.</p>
						<div className="icons">
							<i class="twitter icon"></i>
							<i class="linkedin icon"></i>
							<i className="dribble icon"></i>
							<i className="github icon"></i>
						</div>
					</div>
					<div className="two wide column"></div>
					<div className="three wide column">
						<img className="ui img avatar" src={avatar}></img>
					</div>
					<div className="three wide column"></div>
				</div>
			</Container>
		)
	}
}

export default Intro
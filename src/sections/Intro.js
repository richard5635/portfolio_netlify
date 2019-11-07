import React from 'react'
import styled from 'styled-components'
import { colors } from '../tokens'

const Avatar = styled.img`
	display: block;
  min-width: 150px;
  max-width: 200px;
  margin: 0 auto;
`

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
					<div className="four wide column">
						<Avatar className="ui img" src={avatar}></Avatar>
					</div>
					<div className="two wide column"></div>
				</div>
			</Container>
		)
	}
}

export default Intro
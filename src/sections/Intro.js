import React from 'react'
import styled from 'styled-components'
import { colors } from '../tokens'
import { StyledLink, StyledUrl } from '../components/Commons'

const IntroDiv = styled.div`
	margin: 128px 0;
	align-items: center;

	@media (min-width: 780px) and (max-width: 1023px){
  }

  @media (max-width: 779px) and (min-width: 564px){
    margin: 64px 0;
  }

  @media (max-width: 563px){
    margin: 32px 0;
  }
`

const Avatar = styled.img`
	display: block;
  min-width: 150px;
  max-width: 200px;
  margin: 0 auto;
`

const AvatarBox = styled.div`
	margin: 32px 0;
	flex: 1;
`

const IntroTextBox = styled.div`
	max-width: 700px;

	@media (min-width: 780px) and (max-width: 1023px){
		max-width: 540px;
	}
	
	@media (max-width: 779px) and (min-width: 564px){
    max-width: 480px;
  }

  @media (max-width: 563px){
    max-width: 400px;
  }
`

import Segment from '../components/Segment'
import Container from '../components/Container'
import avatar from '../../content/images/me.png'

class Intro extends React.Component {
	render() {
		return (
			<IntroDiv className="flexbox">
					<IntroTextBox>
						<h1>Hi, I'm Richard Hartanto</h1>
						<h1>I code, design, and tinker.</h1>
						<div className="spacer16px" />
						<p>Richard Hartanto is a graduate student in UTokyo focusing on computer vision and interaction design.
						Currently a computer vision intern at Pretia.
          Loves streaming comedy and relaxing in onsen.</p>
					</IntroTextBox>
					<AvatarBox>
						<Avatar className="ui img" src={avatar}></Avatar>
					</AvatarBox>
			</IntroDiv>
		)
	}
}

export default Intro
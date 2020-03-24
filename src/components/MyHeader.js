import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../tokens'

// Richards
import logo from '../../content/icons/headerLogo.svg'

const SiteHeader = styled.div`
	/* margin-top: 1em;
	margin-bottom: 1em; */
	top: 0;
	position: fixed;
	z-index: 10;
	/* margin-left: 24px; */
	/* margin-top: 16px; */
	

	padding: 24px 32px 24px 32px;

	/* border: solid; */
	background: rgba(240, 242, 243, 0.7);

	@media (max-width: 779px) and (min-width: 564px){
		/* height: 128px */
		width: 100%;
		padding: 20px 24px 20px 24px;
  	}

  	@media (max-width: 563px){
		/* height: 64px; */
		width: 100%;
		padding: 16px 16px 16px 16px;
  	}
`

const Logo = styled.img`
	margin: 16px;
  	max-width: 48px;
	height: auto;
	
	/* In case I need to change the responsiveness */
	@media ${media.medium}{
		margin: 16px;
	}
`

const LogoLink = styled(Link)`
	text-decoration: none;
	transition: 0;

	& :hover{
		color: rgba(0,0,0,0.8);
	}
`

const LogoText = styled.div`
	line-height: 24px;
`

const MyHeader = props => {
	return (
		<SiteHeader>
			{/* <a href="/"><Logo src={logo}></Logo></a> */}
			<LogoLink to="/">
				<LogoText>Richard Hartanto</LogoText>
			</LogoLink>
		</SiteHeader>
	)
}

export default MyHeader
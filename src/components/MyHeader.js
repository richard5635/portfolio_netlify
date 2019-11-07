import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../tokens'

// Richards
import logo from '../../content/icons/headerLogo.svg'

const SiteHeader = styled.div`
	/* margin-top: 1em;
	margin-bottom: 1em; */
	height: 64px;

	@media ${media.medium}{
		/* height: 128px */
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

const MyHeader = props => {
	return(
		<SiteHeader>
			{/* <a href="/"><Logo src={logo}></Logo></a> */}
		</SiteHeader>
	)
}

export default MyHeader
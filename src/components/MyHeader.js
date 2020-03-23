import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../tokens'

// Richards
import logo from '../../content/icons/headerLogo.svg'

const SiteHeader = styled.div`
	/* margin-top: 1em;
	margin-bottom: 1em; */
	height: 128px;

	@media (max-width: 779px) and (min-width: 564px){
    	height: 128px
  	}

  @media (max-width: 563px){
    height: 64px;
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
	return (
		<SiteHeader>
			{/* <a href="/"><Logo src={logo}></Logo></a> */}
		</SiteHeader>
	)
}

export default MyHeader
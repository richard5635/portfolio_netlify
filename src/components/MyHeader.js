import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors, media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'

// Richards
import logo from '../../content/icons/headerLogo.svg'

const SiteHeader = styled.div`
	margin-top: 1em;
  margin-bottom: 1em;
`

const Logo = styled.img`
	margin: 24px;
  max-width: 64px;
  height: auto;
`

const MyHeader = props => {
	return(
		<SiteHeader>
			<a href="/"><Logo src={logo}></Logo></a>
		</SiteHeader>
	)
}

export default MyHeader
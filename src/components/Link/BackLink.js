import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StyledLink } from '../Commons'
import styled from 'styled-components'
import { colors, media } from '../../tokens'

// Richards

const StyledBackLink = styled(Link)`
	color: ${colors.grey400};
	transition: 0.3s;

	&:hover {
		color: ${colors.black};
		background-color: 'cyan';
		
  	}
`

const BackLink = props => {
	return(
		<StyledBackLink to="/">
			<i class="angle left icon"></i> WORK
		</StyledBackLink>
	)
}

export default BackLink
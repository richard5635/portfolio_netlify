import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StyledLink } from '../Commons'
import styled from 'styled-components'
import { colors, media } from '../../tokens'

// Richards

const BackLink = props => {
	return(
		<StyledLink to="/">
			<i class="angle left icon"></i> Back to homepage
		</StyledLink>
	)
}

export default BackLink
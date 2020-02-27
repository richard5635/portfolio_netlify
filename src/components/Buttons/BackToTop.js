import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors, media } from '../../tokens'
import { Location } from '@reach/router';

// Richards

const BackToTopUI = styled.div`
    color: ${colors.grey700};
    width: 50px;
    height: 50px;
    /* background-color: rgb(200, 180, 180); */
    text-align: center;
    font-size: 2em;
    vertical-align: middle;
`


const BackToTop = props => {
	return(
		<a href={"/#"}>
            <BackToTopUI>
            <i class="angle up icon"></i> 
            </BackToTopUI>
		</a>
	)
}

export default BackToTop
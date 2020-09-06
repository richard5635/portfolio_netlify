import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../tokens'


const Card = styled.div`
	/* Set to be left aligned */
	float: left;
	background-color: ${colors.white};
	/* border-style: solid; */
	/* border-color: ${colors.grey100} ${colors.grey100} black ${colors.grey100}; */
	/* border-width: 1px 1px 8px 1px; */
	min-width: 250px;
	width: 30%;
	/* padding: 8px; */
	/* width: 100%; */
	margin-bottom: 32px;
	margin-right: 32px;

	

	& a{
		text-decoration: none;
	}

	@media (min-width: 1045px){
		& :nth-child(3n){
			margin-right: 0px;
		}
	}

	@media (max-width: 1044px) and (min-width: 600px){
		width: 46%;
		& :nth-child(2n){
			margin-right: 0px;
		}
	}

	@media (max-width: 600px){
		width: 100%;
		margin-right: 0px;
	}

	/* if size > 825, set right margin on everything but third article. */
`

const CardImage = styled.div`
	/* position: relative; */
  display: table;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const CardTextbox = styled.div `
	padding: 0 16px;
`

const CardLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const CardTitle = styled.h5`
	font-family: "Helvetica", "Arial", sans-serif;
	font-weight: 100;
	text-transform: uppercase;
	margin: 0;
	margin-top: 16px;
`

const CardSubtitle = styled.h4`
	font-weight: 400;
	@media (min-width: 1045px){
		
	}


	@media (max-width: 1044px) and (min-width: 635px){
		
	}

	@media (max-width: 634px){
		
	}
`

const ArticleCard = props => {
	const { title, subtitle, cover, slug } = props

	// Add conditional to slug to turn it to URL Link?
	// Successful in turning CardLink to google.com

	return (
		<Card>
			<CardLink to={`/${slug}`}>
				<CardImage style={{ backgroundImage: `url("${cover}")` }}></CardImage>
				<CardTextbox>
					<CardTitle>{title}</CardTitle>
					<div className="spacer8px"/>
					<CardSubtitle>{subtitle}</CardSubtitle>
				</CardTextbox>
			</CardLink>
		</Card>
	)
}



export default ArticleCard
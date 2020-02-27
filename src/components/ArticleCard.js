import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../tokens'


const Card = styled.div`
	/* Set to be left aligned */
	float: left;
	/* background-color: ${colors.grey100}; */
	border-style: solid;
	border-color: ${colors.grey100} ${colors.grey100} black ${colors.grey100};
	border-width: 1px 1px 8px 1px;
	min-width: 250px;
	width: 30%;
	padding: 8px;
	/* width: 100%; */
	margin-bottom: 16px;
	margin-right: 16px;

	@media (min-width: 1045px){

	}

	@media (max-width: 1044px) and (min-width: 635px){
		width: 46%;
	}

	@media (max-width: 634px){
		width: 95%;
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

const CardLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const CardTitle = styled.h5`
	font-size: 1em;
	margin: 0;
	padding-top: 1em;
`

const CardSubtitle = styled.h4`
	font-size: 28px;
	margin: 0;
	padding-top: 0.4em;
	padding-bottom: 0.4em;

	@media (min-width: 1045px){
		height: 4.8em;
	}


	@media (max-width: 1044px) and (min-width: 635px){
		height: 3.2em;
	}

	@media (max-width: 634px){
		font-size: 24px;
	}
`

const ArticleCard = props => {
	const { title, subtitle, cover, slug } = props

	return (
		<Card>
			<CardLink to={`/${slug}`}>
				<CardImage style={{ backgroundImage: `url("${cover}")` }}></CardImage>
				<div className="article-card">
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{subtitle}</CardSubtitle>
				</div>
			</CardLink>
		</Card>
	)
}



export default ArticleCard
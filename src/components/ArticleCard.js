import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from '../tokens'

const Card = styled.div`
	background-color: ${colors.grey100};
	min-width: 200px;
	max-width: 300px;
	padding: 8px;
	width: 100%;
	margin-bottom: 1em;
`

const CardImage = styled.div`
	position: relative;
  display: table;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 200px;
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

const ArticleCard = props => {
	const { title, subtitle, cover, slug } = props

	return (
		<Card>
			<CardLink to={`/${slug}`}>
				<CardImage style={{ backgroundImage: `url("${cover}")` }}></CardImage>
				<div className="article-card">
					<h2>{title}</h2>
					<h5>{subtitle}</h5>
				</div>
			</CardLink>
		</Card>
	)
}



export default ArticleCard
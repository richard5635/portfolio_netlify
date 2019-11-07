import React from 'react'
import styled from 'styled-components'
import { colors } from '../tokens'
import { StyledLink } from './Commons'
import Flag from './Flag/Flag'
import useSiteMetadata from '../hooks/use-site-config'

// Assignment: Cases where there are just one post
// Case with two posts

const RelatedPostsContainer = styled.table`
  position: relative;
  width: 90%;
  height: 100px;
  table-layout: fixed;
  word-wrap: break-word;
  background-color: ${colors.backgroundArticle};
  margin: 16px auto 0 ;
  top: 0px;

  tr th {
    padding: 8px;
  }

  tr th:first-child{
    border-right: 1px solid ${colors.grey100};
  }

  tr th:last-child{
    border-right: 0px solid ${colors.grey100};
  }

  tr th{
    width: 40%;
  }

  @media (max-width: 780px) {
  }
`

const RelatedPosts = props => {
  const { posts } = props
  const { multilangPosts } = useSiteMetadata()

  return (
    <div>
      <RelatedPostsContainer>
        <tr>
        {posts.map(post => {
          const title = post.node.frontmatter.title
          const slug = post.node.frontmatter.slug
          const language = post.node.frontmatter.language || 'en'
          return (
            <th key={slug}>
              <StyledLink to={`/${slug}`}>
                <h3>
                {/* {multilangPosts && <Flag language={language} />} */}
                {title}
                </h3>
              </StyledLink>
            </th>
          )
        })}
        </tr>
        <div></div>
      </RelatedPostsContainer>
    </div>

  )
}
export default RelatedPosts

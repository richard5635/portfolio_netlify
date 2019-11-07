import React from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'

const ArticleWrapper = styled.article`
  padding: 0;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ececec;
`

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <ArticleWrapper>
        <Content
          content={post.body}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title} 
          subtitle={post.frontmatter.subtitle} 
          description={post.frontmatter.description} 
          dateDuration={post.frontmatter.dateDuration} 
          targetAudience={post.frontmatter.targetAudience} 
          myRole={post.frontmatter.myRole}
          myRoleDesc={post.frontmatter.myRoleDesc} 
        />
        {/* <ArticleFooter>
          <Bio />
        </ArticleFooter> */}
      </ArticleWrapper>
    )
  }
}

export default Article

import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import BackToTop from '../components/Buttons/BackToTop'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'

// Richard
import BackLink from '../components/Link/BackLink'
import Spacer from '../components/Spacer/Spacer'


const ContentWrapper = styled.div`
  max-width: 764px;
  margin: auto;
`

const PostTitle = styled.h1`
  font-size: 5em;
  margin: 0 0 8px 0;
  font-weight: 600;
`


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        {/* <div className="ui stackable grid">
        </div> */}

        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageFb={
            post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
          }
          imageTw={
            post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
          }
          lang={post.frontmatter.language}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Wrapper>
          <div className="ui stackable grid article">
            <div className="twelve wide column">
              <BackLink />
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <h5 className = "serif">{post.frontmatter.subtitle}</h5>
            </div>
          </div>
        </Wrapper>

        <Wrapper><div className="ui stackable grid">
          <div className="sixteen wide column">
            {/* <h4>{post.frontmatter.description}</h4> */}
            <Hero
              heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
              title={post.frontmatter.title}
            />
          </div>
        </div>
        </Wrapper>

        <Wrapper>
          <ContentWrapper>
            <Article post={post} />
          </ContentWrapper>
        </Wrapper>

        {/* <Wrapper> */}
          {/* <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} /> */}
          {/* <PrevNextPost previous={previous} next={next} /> */}
        {/* </Wrapper> */}

        <Spacer/>

        <Wrapper>
          <div className="ui stackable grid article">
            <BackLink />
          </div>
        </Wrapper>
        
        <Spacer/>

        {/* Back to top button */}
        {/* <BackToTop/> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        language
        subtitle
        description
        myRole
        myRoleDesc
        targetAudience
        dateDuration
        bgColor
        tags
        cover {
          publicURL
        }
        imageTw {
          publicURL
        }
        imageFb {
          publicURL
        }
      }
    }
  }
`

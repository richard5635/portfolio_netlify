// Home Page - Richard
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

// Richard
import Segment from '../components/Segment'
import Container from '../components/Container'
import Spacer from '../components/Spacer/Spacer'

import Intro from '../sections/Intro'

class BlogList extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        {/* Whats SEO? */}
        <Segment>
          <Intro />
        </Segment>
        <Segment>
          <Container>
            <div className="ui stackable grid work-container">
              <div className="eight wide column">
                <h2 className="ui header serif">
                  Side Projects
                </h2>
                <p>
                  I love creating digital products that connect to reality.
                </p>
              </div>
              <div className="eight wide column" ></div>
            </div>
            <Spacer/>
          </Container>
          <Container>
            <div className="ui stackable grid work-container">
              <div className="ten wide column"></div>
              <div className="six wide column">
                <h2 className="ui header serif">Internship Projects
                </h2>
                <p>I interned at several startups mainly focusing on front-end development.
                </p>
              </div>
            </div>
            <Spacer/>
          </Container>
          <Container>
            <div className="ui stackable grid work-container">
              <div className="eight wide column">
                <h2 className="ui header serif">School Projects
                </h2>
                <p>I interned at several startups mainly focusing on front-end development.
                </p>
              </div>
              <div className="eight wide column">Put cards here.</div>
            </div>
            <Spacer/>
          </Container>
          <Container>
            <div className="ui stackable grid work-container">
              <div className="eight wide column">
                <h2 className="ui header serif">
                  Recent Activities
                </h2>
                <ul>
                  <li>Started interning at Pretia as UI/UX Engineer.</li>
                  <li>Working on my Graduate School thesis on Computer Vision.</li>
                  <li>Participated in IDEO Tokyo’s startup makeathon.</li>
                  <li>My team won an honorable mention award in SICF20 with InWoFumu.</li>
                  <li>Exhibited an Interactive Storytelling Installation in Jakarta.</li>
                </ul>
              </div>
              <div className="eight wide column">

              </div>
            </div>
            <Spacer/>
          </Container>
          <Container>
            <div className="ui stackable grid work-container">
              <div className="eight wide column">Put cards here.</div>
              <div className="eight wide column">
                <h2 className="ui header serif">
                  Get In Touch
                </h2>
                <p>Do you happen to be in Tokyo? Let’s talk, I know good cafes.</p>
                <p>Here is my resume.</p>
                <p>You can also contact me through the media below.</p>
              </div>
            </div>
          </Container>
        </Segment>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/posts//" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`

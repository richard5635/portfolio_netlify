// Home Page - Richard
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import MyFooter from '../components/MyFooter'

import { TextUrl } from '../components/Commons'

// Richard
import Segment from '../components/Segment'
import Container from '../components/Container'
import Spacer from '../components/Spacer/Spacer'
import ArticleCard from '../components/ArticleCard'

// Sections
import Intro from '../sections/Intro'
import RecentActivities from '../sections/RecentActivities'

// Images
import contactPhoto from '../../content/images/contact.jpg'

// Styled Components
const Project = styled.div`

`

const CaptionBox = styled.div`
  margin: 32px 0;
`

const WorkBox = styled.div`
`

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Divider = styled.div`
  display: block;
  height: 1px;
  border-bottom: 1px solid;
  border-color: rgba(151,151,151,0.8);
`

const Tags = ["Side", "School", "Internship"];
const Tags2 = ["AR/VR", "Web", "Art", "Graphic Design", "Academic", "Hobby"];
let filter = "Side";


class BlogList extends React.Component {
  posts = this.props.data.posts.edges;

  constructor(props) {
    super(props); // Forgot what this is
    this.state = {
      tags: ["Side", "School", "Internship"]
    }
  }

  render() {
    

    const { title, description } = this.props.data.site.siteMetadata
    const { pageContext } = this.props

    const sideProjectPosts = this.posts.filter(item => item.node.frontmatter.projectType == "Side");
    const schoolProjectPosts = this.posts.filter(item => item.node.frontmatter.projectType == "School");
    const internProjectPosts = this.posts.filter(item => item.node.frontmatter.projectType == "Internship");


    let filteredPosts = this.posts.filter(item => item.node.frontmatter.projectType == filter);

    let changeFilter = (e, tagName) => {
      e.preventDefault();
      console.log("Change filter activated " + tagName);
      
      filteredPosts = this.posts.filter(item => item.node.frontmatter.projectType == tagName);
      filteredPostsComp = (
        <CardGrid >
          {filteredPosts.map(post => {
            const props = {
              title: post.node.frontmatter.title,
              subtitle: post.node.frontmatter.subtitle,
              cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
              slug: post.node.frontmatter.slug
            };
            return <ArticleCard key={props.slug} {...props} />
          })}
        </CardGrid>
      )
    }

    let handleClick = (e, tag) => {
      e.preventDefault();
      console.log('this is:', tag);
    }

    let conditionalText = <div>ConditionalText</div>



    let filteredPostsComp =
      <CardGrid >
        {this.posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            subtitle: post.node.frontmatter.subtitle,
            cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
            slug: post.node.frontmatter.slug
          };
          return <ArticleCard key={props.slug} {...props} />
        })}
      </CardGrid>

    return (
      <Layout location={this.props.location}>
        {/* Whats SEO? */}
        <Segment>
          <Intro />
        </Segment>

        {/* <Segment>
          <CaptionBox>
            <h3>
              Side Projects
            </h3>
            <p>
              I love creating digital products that connect to reality.
            </p>
          </CaptionBox>
          <Divider />
          <WorkBox>
            <h5>
              WORKS
            </h5>
            <CardGrid >
              {posts.map(post => {
                const props = {
                  title: post.node.frontmatter.title,
                  subtitle: post.node.frontmatter.subtitle,
                  cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
                  slug: post.node.frontmatter.slug
                };
                return <ArticleCard key={props.slug} {...props} />
              })}
            </CardGrid>
          </WorkBox>

          <div className="spacer32px" />
          <Divider />
          <div className="spacer32px" />

        </Segment> */}

        {/* Filter Buttons: when the button is pressed, change the filter of the  */}
        {/* Onclick non responsive 2020-09-04 */}
        <Segment>
          <CaptionBox>
            {Tags.map(tag => {
              return <button key={"btn_" + tag} onClick={(e) => changeFilter(e, tag)}>{tag}</button>
            })}
            <button></button>
          </CaptionBox>
        </Segment>
        <Segment>
          <WorkBox>
            <h5>
              FILTER
            </h5>

            {filteredPostsComp}
          </WorkBox>
        </Segment>


        <Segment>
          <CaptionBox>
            <h3>
              Side Projects
            </h3>
            <p>
              I love creating digital products that connect to reality.
            </p>
          </CaptionBox>
          <Divider />
          <WorkBox>
            <h5>
              WORKS
            </h5>
            <CardGrid >
              {sideProjectPosts.map(post => {
                const props = {
                  title: post.node.frontmatter.title,
                  subtitle: post.node.frontmatter.subtitle,
                  cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
                  slug: post.node.frontmatter.slug
                };
                return <ArticleCard key={props.slug} {...props} />
              })}
            </CardGrid>
          </WorkBox>

          <div className="spacer32px" />
          <Divider />
          <div className="spacer32px" />

        </Segment>

        <Segment>
          <CaptionBox>
            <h3>
              Internship Projects
            </h3>
            <p>
              I interned at several startups mainly focusing on front-end development.
            </p>
          </CaptionBox>
          <Divider />
          <WorkBox>
            <h5>
              WORKS
            </h5>
            <CardGrid>
              {internProjectPosts.map(post => {
                const props = {
                  title: post.node.frontmatter.title,
                  subtitle: post.node.frontmatter.subtitle,
                  cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
                  slug: post.node.frontmatter.slug
                };
                return <ArticleCard key={props.slug} {...props} />
              })}
            </CardGrid>
          </WorkBox>

          <div className="spacer32px" />
          <Divider />
          <div className="spacer32px" />

        </Segment>

        <Segment>
          <CaptionBox>
            <h3>
              School Projects
            </h3>
            <div className="spacer16px" />
            <p>
              I interned at several startups mainly focusing on front-end development.
            </p>
          </CaptionBox>
          <Divider />
          <WorkBox>
            <h5>
              WORKS
            </h5>
            <CardGrid>
              {schoolProjectPosts.map(post => {
                const props = {
                  title: post.node.frontmatter.title,
                  subtitle: post.node.frontmatter.subtitle,
                  cover: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
                  slug: post.node.frontmatter.slug
                };
                return <ArticleCard key={props.slug} {...props} />
              })}
            </CardGrid>
          </WorkBox>

          <div className="spacer32px" />
          <Divider />
          <div className="spacer32px" />

        </Segment>

        {/* <Segment>
          <RecentActivities />
        </Segment> */}

        <Segment>

          <MyFooter />
        </Segment>
        <SEO />

        {/* <Hero title={title} subTitle={description} />

        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        /> */}

      </Layout >
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
            subtitle
            projectType
            tags
            language
            slug
            cover{
              publicURL
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'
import { colors } from '../tokens'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'


const ContentBody = styled.div`

  & > h2 {
    margin-bottom: 32px;
  }

  & > h3 {
    margin-bottom: 32px;
  }

  & > h4 {
    margin-bottom: 16px;
  }

  & > p {
    margin-bottom: 32px;
  }

  & > .gatsby-resp-iframe-wrapper {
    margin-bottom: 32px;
  }

  & > hr {
    margin-top: 64px;
    margin-bottom: 64px;
    height: 1px;
    background-color: rgba(151, 151, 151, 0.8);
    border: none;
  }

  & a {

    &:hover {
    }

    &.anchor,
    &.gatsby-resp-image-link {
      display: none;
      border: none;
    }
  }

  & > blockquote {
    font-size: 21px;
    line-height: 42px;
    box-sizing: border-box;    
    border-left: 8px solid rgba(0, 0, 0, 0.8);
    margin: 30px 0px;
    padding: 5px 64px;
    border-radius: 0 8px 8px 0;
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em 0em 1.5em 0;
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight-code-line {
    background-color: ${colors.highlight_code_linebg};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${colors.highlight_code_bg};
  }

  & p > code.language-text,
  & li > code.language-text,
  & em > code.language-text,
  & strong > code.language-text {
    background: ${colors.highlight_code_oneline};
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
    word-wrap: break-word;
  }

  & code {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  & table {
    margin-top: 1em;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background: #f7f7f7;
      border-bottom: 2px solid ${colors.white};
    }
  }
`

const Divider = styled.div`
  display: block;
  height: 1px;
  border-bottom: 1px solid;
  border-color: rgba(151, 151, 151, 0.8);
`

const SubHeading = styled.h5`
  color: rgba(121, 121, 121, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
`

class Content extends React.Component {
  render() {
    const { title, subtitle, description, dateDuration, targetAudience, myRole, myRoleDesc, content, date, tags } = this.props

    return (
      <section>
        <div className="flexbox">
          <div className='fh-5'>
            <SubHeading>Overview</SubHeading>
            <p>{description}</p>
            {(tags || date) && <ContentHeader date={date} tags={tags} />}
            <div className='spacer16px'/>

            <SubHeading>Target Audience</SubHeading>
            <p>{targetAudience}</p>
            <div className='spacer16px'/>

            <SubHeading>Date and Work Duration</SubHeading>
            <p>{dateDuration}</p>
            <div className='spacer16px'/>
          </div>

          <div className='fh-3'>
            <SubHeading>Role</SubHeading>
            <p><b>{myRole}</b></p>
            <p>{myRoleDesc}</p>
            <div className='spacer16px'/>
          </div>
        </div>

        <div className="spacer64px"/>
        <Divider />
        <div className="spacer64px"/>

        <ContentBody>
          <MDXRenderer>{content}</MDXRenderer>
        </ContentBody>
      </section>
    )
  }
}

export default Content

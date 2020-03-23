import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors } from '../tokens'

const FooterWrapper = styled.footer`
  margin: 128px auto;
  text-align: center;

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0;
    text-align: center;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: ${colors.textLightest};
  }

  .footer-heart {
    color: ${colors.heartFooter};
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: ${colors.textLightest};
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

const MediaLinks = styled.div`
  display: flex;
  justify-content: center;
`

const MediaLink = styled.a`
  margin-right: 32px;
  & :last-child{
    margin-right: 0px;
  }
`

const Footer = () => {
  const { authorName, websiteHost, footerLinks } = useSiteMetadata()

  const FooterItem = ({ item }) => {
    if (item.url.startsWith('/')) {
      return (
        <span className="footer-item">
          <Link className="footer-link" to={item.url}>
            {item.label}
          </Link>
        </span>
      )
    }
    return (
      <span className="footer-item">
        <a className="footer-link" href={item.url}>
          {item.label}
        </a>
      </span>
    )
  }

  const FooterColumn = ({ column }) => {
    return (
      <div className="footer-col">
        <h5 className="footer-title" key={column.sectionName}>
          {column.sectionName}
        </h5>
        {column.links.map((item, i) => {
          return <FooterItem item={item} key={`footer-column-item-${i}`} />
        })}
      </div>
    )
  }

  return (
    <FooterWrapper>
      <h3>
        Let's connect
      </h3>
      <div className="spacer16px"/>
      <p>
        Get in touch for opportunities or just a hi!
      </p>
      <div className="spacer16px"/>
      <MediaLinks>
        <MediaLink href="">Linkedin</MediaLink>
        <MediaLink href="">Github</MediaLink>
        <MediaLink href="">Dribbble</MediaLink>
      </MediaLinks>
      <div className="spacer16px"/>
      <p>
        richard.sh093@gmail.com
      </p>

    </FooterWrapper>
  )
}

export default Footer

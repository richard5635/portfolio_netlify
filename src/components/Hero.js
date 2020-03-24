import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors, media } from '../tokens'

// Article Image
const HeroContainer = styled.div`
  position: relative;
  display: table;
  margin: 64px auto;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 780px) and (max-width: 1023px){
    margin: 64px auto;
  }

  @media (max-width: 779px) and (min-width: 564px){
    margin: 32px auto;
  }

  @media (max-width: 563px){
    margin: 32px auto;
  }

  @media ${media.xlarge} {
  }
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroSubTitle = styled.h2`
  margin: 10px 60px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        {/* <HeroTitle>{props.title}</HeroTitle> */}
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

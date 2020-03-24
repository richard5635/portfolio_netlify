import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../tokens'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: ${colors.text};
  background-color: ${colors.background};
  transition: background .5s ease;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
`
export const StyledLink = styled(Link)`
  color: ${colors.black};
  transition: 0.25s;

  &:hover {
    color: ${colors.blue};
  }
`

export const StyledUrl = styled.a`
  color: ${colors.black};
  transition: 0.25s;

  &:hover {
    color: ${colors.blue};
  }
`
export const TextUrl = styled.a`
  color: ${colors.black};
  text-decoration: underline;


  &:hover {
    color: ${colors.blue};
  }
  
`

export const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  margin: 1em 0 0 0;
`

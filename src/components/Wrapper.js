import styled from 'styled-components'
import { colors } from '../tokens'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 5px;
  max-width: 1230px;
  word-wrap: break-word;
  background-color: ${colors.backgroundArticle};
  margin: 0px auto 0px auto;
  top: 0px;
  /* box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1); */

  @media (max-width: 780px) {
  }
`

export default Wrapper

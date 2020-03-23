import styled from 'styled-components'
import { colors, media } from '../tokens'

const Segment = styled.div`
  display: block;
  max-width: 1024px;
  width: 80%;
  margin: auto;

  @media (min-width: 780px) and (max-width: 1023px){
    width: 90%;
  }

  @media (max-width: 779px) and (min-width: 564px){
    width: 90%;
  }

  @media (max-width: 563px){
    width: 90%;
  }
  
`
  
export default Segment
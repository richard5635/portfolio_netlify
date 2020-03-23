import styled from 'styled-components'

const Spacer = styled.div`
  height: 4em;

  @media (min-width: 1045px){
		height: 4em;
	}


	@media (max-width: 1044px) and (min-width: 635px){
		height: 3em;
	}

	@media (max-width: 634px){
		height: 2em;
	}
  
`

  
export default Spacer
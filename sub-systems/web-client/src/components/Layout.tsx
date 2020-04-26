import styled from 'styled-components'
import Log from './Log'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`

const Layout = () => (
  <FlexContainer>
    <Log event="uuid" showStats={true} />
    <Log event="log" />
  </FlexContainer>
)

export default Layout

import { PropsWithChildren, FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  title: ReactNode | string
}

const Wrapper = styled.div`
  display: none;
  border: 1px solid;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  background: white;
`

const Container = styled.div`
  :hover ${Wrapper} {
    display: inherit;
  }
`

const Expandable: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
    {title}
  </Container>
)

export default Expandable

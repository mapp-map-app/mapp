import styled from 'styled-components'
import { Room } from '../../../types/types'
import { FunctionComponent } from 'react'
import Link from 'next/link'


interface Props {
  room: Room
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
`
const Indented = styled.div`
  margin-left: 5px;
`

const Title = styled(Indented)`
  font-weight: bold;
`

const Id = styled.div`
  font-size: smaller;
  font-family: monospace;
`

const Description = styled(Indented)`
`

const SmallRoomLink: FunctionComponent<Props> = ({ room }) =>
  <Link href={`/room/${room.id}`}>
    <Container>
      <Id>{room.id}</Id>
      <Title>{room.title}</Title>
      <Description>{room.description}</Description>
    </Container>
  </Link>

export default SmallRoomLink

import styled from 'styled-components'
import { FunctionComponent } from 'react'
import getConfig from 'next/config'

interface Props {}
const Button = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
`
const createRoom = async () => {
  const {
    publicRuntimeConfig: { apiUrl },
  } = getConfig()
  await fetch(`${apiUrl}/rooms`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title: 'new room',
      description: 'description goes here',
    }),
  })
}

const CreateRoomButton: FunctionComponent<Props> = () => {
  return <Button onClick={createRoom}>{'Create Room'}</Button>
}

export default CreateRoomButton

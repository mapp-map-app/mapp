import styled from 'styled-components'
import getConfig from 'next/config'
import useSWR from 'swr'
import { swrFetch } from '../utils/fetch-helpers'
import { Room } from '../../../types/types'
import SmallRoomSelector from './SmallRoomLink'
import CreateRoomButton from './CreateRoomButton'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.div`
  margin:5px;
`

const RoomSelection = () => {
  const {
    publicRuntimeConfig: { apiUrl },
  } = getConfig()

  const { data, error } = useSWR<Room[]>(`${apiUrl}/rooms`, swrFetch, {
    refreshInterval: 5000
  })
  if (error) {
    return <p>{'Unable to load room list'}</p>
  }

  if (!data) {
    return <List>{'Loading rooms...'}</List>
  }

  return (
    <List>
      <ListItem>
        <CreateRoomButton />
      </ListItem>
      {data.map(room =>
        <ListItem key={room.id}>
          <SmallRoomSelector room={room} />
        </ListItem>
      )}
    </List>
  )
}

export default RoomSelection

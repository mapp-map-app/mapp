import styled from 'styled-components'
import getConfig from 'next/config'
import useSWR from 'swr'
import { swrFetch } from '../utils/fetch-helpers'

const List = styled.div`
  display: flex;
`

const ListItem = styled.div`
  margin:5px;
`

const Stats = () => {
  const {
    publicRuntimeConfig: { apiUrl },
  } = getConfig()

  const { data, error } = useSWR<{
    connections: number
    rooms: number
    objects: number
  }>(`${apiUrl}/stats`, swrFetch, {
    refreshInterval: 2000
  })
  if (error) {
    return <p>{'Unable to load stats'}</p>
  }

  if (!data) {
    return <List>{'Loading...'}</List>
  }

  return (
    <List>
        <ListItem>{`Connections: ${data.connections}`}</ListItem>
        <ListItem>{`Rooms: ${data.rooms}`}</ListItem>
        <ListItem>{`Room Objects: ${data.objects}`}</ListItem>
    </List>
  )
}

export default Stats

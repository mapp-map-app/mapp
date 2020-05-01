import { NextPage } from 'next'
import Stats from '../components/Stats'
import RoomSelection from '../components/RoomSelection'

const Index: NextPage = () => (
  <>
    <Stats />
    <hr />
    <RoomSelection />
  </>
)

export default Index

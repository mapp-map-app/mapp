import { NextPage } from 'next'
import Stats from '../components/Stats'
import RoomSelection from '../components/RoomSelection'

interface props {
  userAgent: string
}

const Index: NextPage<props> = () => (
  <>
    <Stats />
    <hr />
    <RoomSelection />
  </>
)

export default Index

import { NextPage } from 'next'
import Stats from '../components/Stats'
import RoomSelection from '../components/RoomSelection'
import Header from '../components/page-layout/Header'

const Index: NextPage = () => (
  <>
    <Header />
    <hr />
    <Stats />
    <hr />
    <RoomSelection />
  </>
)

export default Index

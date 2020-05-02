import React from 'react'
import { RoomObject, Room } from '../../../types/types'
import styled from 'styled-components'

type Props = {
  roomObjects: RoomObject[]
  room: Room
}

const Svg = styled.svg`
  /* width: 2000px;  */
  /* height: 2000px; */
  border: 1px solid;
  border-radius: 5px;
`

const RoomDisplay = ({ roomObjects, room }: Props) => {
  return (
    <Svg viewBox="0 0 100 100">
      <image href={room.imageUrl} x="0" y="0" width="100" height="100"></image>
    </Svg>
  )
}

export default RoomDisplay

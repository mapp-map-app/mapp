import React from 'react'
import { RoomObject, Room } from '../../../types/types'
import styled from 'styled-components'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

type Props = {
  roomObjects: RoomObject[]
  room: Room
}

const Svg = styled.svg`
  border: 1px solid;
  border-radius: 5px;
`

const RoomDisplay = ({ roomObjects, room }: Props) => {
  const {
    publicRuntimeConfig: { apiUrl },
  } = getConfig()
  let translatePosition = (
    evt: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => ({ x: 0, y: 0 })
  const setRef = (ref: SVGSVGElement) => {
    if (ref) {
      const svg: SVGSVGElement = ref
      const point: DOMPoint = svg.createSVGPoint()
      translatePosition = (
        evt: React.MouseEvent<SVGSVGElement, MouseEvent>
      ) => {
        point.x = evt.clientX
        point.y = evt.clientY

        const cursorPoint = point.matrixTransform(svg.getScreenCTM()!.inverse())
        return { x: cursorPoint.x, y: cursorPoint.y }
      }
    }
  }
  const createRoomObject = async (
    evt: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const position = translatePosition(evt)
    await fetch(`${apiUrl}/rooms/${room.id}/room-objects`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: 'new object',
        position,
        imageUrl: '',
      }),
    })
  }
  const router = useRouter()
  const editRoomObject = (roomObjectId: string) => (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => {
    event.stopPropagation()
    event.preventDefault()
    router.push(`/room/${room.id}/room-object/${roomObjectId}`)
  }

  return (
    <Svg viewBox="0 0 100 100" ref={setRef} onClick={createRoomObject}>
      <image href={room.imageUrl} x="0" y="0" width="100" height="100" />
      {roomObjects.map((roomObject) => (
        <g key={roomObject.id}>
          <image
            href={roomObject.imageUrl}
            x={roomObject.position.x}
            y={roomObject.position.y}
            width="2"
            height="2"
          />
          <circle
            onClick={editRoomObject(roomObject.id)}
            cx={roomObject.position.x}
            cy={roomObject.position.y}
            r="1"
            fillOpacity="0"
            strokeWidth="2px"
            stroke="black"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </Svg>
  )
}

export default RoomDisplay

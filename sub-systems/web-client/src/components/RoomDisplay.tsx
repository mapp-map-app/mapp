import React, { createRef, useEffect, useState, useLayoutEffect } from 'react';
import { RoomObject, Room } from '../../../types/types';
import styled from 'styled-components';
import RoomObjectDisplay from './RoomObjectDisplay';
import { put } from '../utils/fetch-helpers';

type Props = {
  roomObjects: RoomObject[];
  room: Room;
};

const Svg = styled.svg`
  border: 1px solid;
  border-radius: 5px;
`;

const RoomDisplay = ({ roomObjects, room }: Props) => {
  const svg = createRef<SVGSVGElement>();
  const translatePosition = (x: number, y: number) => {
    if (svg.current) {
      const point: DOMPoint = svg.current.createSVGPoint();
      point.x = x;
      point.y = y;

      const cursorPoint = point.matrixTransform(
        svg.current.getScreenCTM()!.inverse()
      );
      return { x: cursorPoint.x, y: cursorPoint.y };
    }
    return { x: 0, y: 0 };
  };
  const createRoomObject = async (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    const position = translatePosition(event.clientX, event.clientY);
    await put(`/rooms/${room.id}/room-objects`, {
      title: 'new object',
      position,
      imageUrl: '',
    });
  };
  const [scale, setScale] = useState(1);
  useEffect(() => {
    setScale(svg.current!.clientWidth / room.size);
  }, [svg.current?.clientWidth]);

  return (
    <Svg
      viewBox={`0 0 ${room.size} ${room.size}`}
      ref={svg}
      onContextMenu={createRoomObject}
    >
      <image href={room.imageUrl} x="0" y="0" width="100%" height="100%" />
      {roomObjects.map((roomObject) => (
        <RoomObjectDisplay
          key={roomObject.id}
          roomObject={roomObject}
          scale={scale}
          translateClientPosition={translatePosition}
        />
      ))}
    </Svg>
  );
};

export default RoomDisplay;

import React, { useState, useContext, useEffect } from 'react';
import { RoomObject } from '../../../types/types';
import { useRouter } from 'next/router';
import Draggable, { DraggableEvent } from 'react-draggable';
import { put } from '../utils/fetch-helpers';

type Props = {
  roomObject: RoomObject;
  scale: number;
  translateClientPosition: (x: number, y: number) => { x: number; y: number };
};

const RoomObjectDisplay = ({
  roomObject,
  scale,
  translateClientPosition,
}: Props) => {
  const router = useRouter();
  const editRoomObject = () => {
    router.push(`/room/${roomObject.roomId}/room-object/${roomObject.id}`);
  };
  const updateRoomObject = (roomObject: RoomObject) =>
    put(
      `/rooms/${roomObject.roomId}/room-objects/${roomObject.id}`,
      roomObject
    );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>(
    roomObject.position
  );
  useEffect(() => {
    setPosition(roomObject.position);
  }, [roomObject.position]);

  const drag = () => {
    setIsDragging(() => true);
  };

  const handleStop = (event: DraggableEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isDragging) {
      editRoomObject();
    } else {
      const mouseEvent = event as MouseEvent;
      const position = translateClientPosition(mouseEvent.x, mouseEvent.y);
      updateRoomObject({
        ...roomObject,
        position,
      });
      setPosition(position);
    }
    setIsDragging(() => false);
  };

  return (
    <Draggable
      scale={scale}
      onStop={handleStop}
      onDrag={drag}
      position={position}
    >
      <g>
        <image
          href={roomObject.imageUrl}
          transform="translate(-1,-1)"
          width="2"
          height="2"
        />
        <circle
          r="1"
          fillOpacity="0"
          strokeWidth="1px"
          stroke="black"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </Draggable>
  );
};

export default RoomObjectDisplay;

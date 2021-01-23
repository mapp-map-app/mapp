import styled from 'styled-components';
import React from 'react';
import { Room } from 'mapp-types';
import Editable from './Editable';
import Id from './styles/Id';
import { put } from '../utils/fetch-helpers';

type Props = {
  room: Room;
};

const Container = styled.div`
  display: flex;
  > * {
    margin: 5px;
  }
`;

const RoomHeader = ({ room }: Props) => {
  const updateRoom = (key: string) => async (value: any) => {
    await put(`/rooms/${room.id}`, {
      ...room,
      [key]: value,
    });
  };

  return (
    <Container>
      <Id>{room.id}</Id>
      <Editable value={room.title} onChange={updateRoom('title')} />
      <Editable value={room.description} onChange={updateRoom('description')} />
      <Editable value={room.imageUrl} onChange={updateRoom('imageUrl')} />
      <Editable type="number" value={room.size} onChange={updateRoom('size')} />
    </Container>
  );
};

export default RoomHeader;

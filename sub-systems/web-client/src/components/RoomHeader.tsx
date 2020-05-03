import styled from 'styled-components';
import getConfig from 'next/config';
import React from 'react';
import { Room } from '../../../types/types';
import Editable from './Editable';
import Id from './styles/Id';
import { swrFetch } from '../utils/fetch-helpers';

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
  const {
    publicRuntimeConfig: { apiUrl },
  } = getConfig();

  const updateRoom = async (room: Room) => {
    await swrFetch(`${apiUrl}/rooms/${room.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(room),
    });
  };

  const updateTitle = (title: string) =>
    updateRoom({
      ...room,
      title,
    });

  const updateDescription = (description: string) =>
    updateRoom({
      ...room,
      description,
    });
  const updateImage = (imageUrl: string) =>
    updateRoom({
      ...room,
      imageUrl,
    });

  return (
    <Container>
      <Id>{room.id}</Id>
      <Editable value={room.title} onChange={updateTitle} />
      <Editable value={room.description} onChange={updateDescription} />
      <Editable value={room.imageUrl} onChange={updateImage} />
    </Container>
  );
};

export default RoomHeader;

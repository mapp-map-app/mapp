import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { put } from '../utils/fetch-helpers';

interface Props {}
const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
`;
const createRoom = async () => {
  await put('/rooms', {
    title: 'new room',
    description: 'description goes here',
    size: 100,
  });
};

const CreateRoomButton: FunctionComponent<Props> = () => {
  return <Button onClick={createRoom}>{'Create Room'}</Button>;
};

export default CreateRoomButton;

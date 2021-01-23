import getConfig from 'next/config';
import { NextPage, NextPageContext } from 'next';
import Editable from '../../../../components/Editable';
import Id from '../../../../components/styles/Id';
import GotoRoomLink from '../../../../components/GotoRoomLink';
import { swrFetch, put } from '../../../../utils/fetch-helpers';
import { RoomObject, Room } from 'mapp-types';

interface Props {
  roomObject: RoomObject;
  room: Room;
}

const RoomObjectPage: NextPage<Props> = ({ roomObject, room }) => {
  const updateRoomObject = async (updatedRoomObject: RoomObject) => {
    await put(
      `/rooms/${room.id}/room-objects/${roomObject.id}`,
      updatedRoomObject
    );
  };

  const updateTitle = (title: string) =>
    updateRoomObject({
      ...roomObject,
      title,
    });

  const updateImage = (imageUrl: string) =>
    updateRoomObject({
      ...roomObject,
      imageUrl,
    });
  return (
    <>
      <Id>{roomObject.id}</Id>
      <p>{`(${roomObject.position.x},${roomObject.position.y})`}</p>
      <Editable value={roomObject.title} onChange={updateTitle} />
      <Editable value={roomObject.imageUrl} onChange={updateImage} />
      <hr />
      <GotoRoomLink room={room}>{'Return to room'}</GotoRoomLink>
    </>
  );
};
RoomObjectPage.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { roomId, roomObjectId },
  } = ctx;
  const roomPromise = swrFetch(`/rooms/${roomId}`);
  const roomObjectPromise = swrFetch(
    `/rooms/${roomId}/room-objects/${roomObjectId}`
  );

  const [room, roomObject] = await Promise.all([
    roomPromise,
    roomObjectPromise,
  ]);
  return {
    roomObject,
    room,
  };
};

export default RoomObjectPage;

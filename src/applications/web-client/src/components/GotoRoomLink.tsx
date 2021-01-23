import { Room } from '../../../types/types';
import { FunctionComponent, PropsWithChildren, Children } from 'react';
import Link from 'next/link';

interface Props {
  room: Room;
}

const GotoRoomLink: FunctionComponent<PropsWithChildren<Props>> = ({
  room,
  children,
}) => <Link href={`/room/${room.id}`}>{children}</Link>;

export default GotoRoomLink;

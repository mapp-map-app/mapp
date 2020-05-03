export interface RoomObject {
  id: string
  roomId: string
  position: {
    x: number
    y: number
  }
  imageUrl: string
  title: string
}

export interface Room {
  id: string
  description: string
  title: string
  imageUrl: string
}

export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomsList {
  roomNumber: string;
  roomTypes: string;
  amenities: string;
  price: number;
  photos: string;
  checkintime: Date;
  checkouttime: Date;
  rating: number;
}

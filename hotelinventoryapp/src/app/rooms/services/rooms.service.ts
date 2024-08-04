import { Injectable } from '@angular/core';
import { RoomsList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  getRooms(): RoomsList[] {
    let roomsList = [
      {
        roomNumber: 1,
        roomTypes: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.google.com/room1.jpg',
        checkintime: new Date('11-Nov-2021'),
        checkouttime: new Date('12-Nov-2021'),
        rating: 4.583763,
      },
      {
        roomNumber: 2,
        roomTypes: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.google.com/room2.jpg',
        checkintime: new Date('11-Nov-2021'),
        checkouttime: new Date('12-Nov-2021'),
        rating: 3.457734,
      },
      {
        roomNumber: 3,
        roomTypes: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: 'https://images.google.com/room1.jpg',
        checkintime: new Date('11-Nov-2021'),
        checkouttime: new Date('12-Nov-2021'),
        rating: 2.6825,
      },
    ];

    return roomsList;
  }
}

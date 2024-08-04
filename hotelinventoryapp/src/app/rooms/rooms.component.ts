import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomsList[] = [];

  title = 'Rooms List';

  selectedRoom!: RoomsList;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List Updated';
  }

  addRoom() {
    console.log('Room Added');
    const room: RoomsList = {
      roomNumber: 4,
      roomTypes: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.google.com/room4.jpg',
      checkintime: new Date('11-Nov-2021'),
      checkouttime: new Date('12-Nov-2021'),
      rating: 4.583763,
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  selectRoom(room: RoomsList) {
    console.log(room);
    this.selectedRoom = room;
  }

  ngOnInit(): void {
    this.roomList = [
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
  }
}

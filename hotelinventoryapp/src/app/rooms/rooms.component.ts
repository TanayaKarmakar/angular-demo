import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

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

  constructor(private roomsService: RoomsService) {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List Updated';
  }

  addRoom() {
    console.log('Room Added');
    const room: RoomsList = {
      roomNumber: '4',
      roomTypes: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.google.com/room4.jpg',
      checkintime: new Date('11-Nov-2021'),
      checkouttime: new Date('12-Nov-2021'),
      rating: 4.583763,
    };

    //this.roomList.push(room);
    //this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = [...this.roomList, data];
    });
  }

  editRoom() {
    const room: RoomsList = {
      roomNumber: '3',
      roomTypes: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.google.com/room4.jpg',
      checkintime: new Date('11-Nov-2021'),
      checkouttime: new Date('12-Nov-2021'),
      rating: 4.583763,
    };
    this.roomsService
      .editRoom(room)
      .subscribe((data) => (this.roomList = data));
  }

  selectRoom(room: RoomsList) {
    console.log(room);
    this.selectedRoom = room;
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngAfterViewInit(): void {
    //console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
  }

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((data) => {
      console.log(data);
    });

    console.log(this.headerComponent);

    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
}

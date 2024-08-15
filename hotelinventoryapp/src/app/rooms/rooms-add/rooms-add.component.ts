import { Component } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css',
})
export class RoomsAddComponent {
  room: RoomsList = {
    amenities: '',
    checkintime: new Date(),
    checkouttime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
    roomTypes: '',
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  addRoom() {
    this.roomService.addRoom(this.room).subscribe((data) => {
      console.log(data);
      this.successMessage = 'Room added successfully';
    });
  }
}

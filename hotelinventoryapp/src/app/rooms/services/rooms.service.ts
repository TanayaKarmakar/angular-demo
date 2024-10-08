import { Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  //getRooms$ = this.http.get<RoomsList[]>('/api/rooms').pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  addRoom(room: RoomsList) {
    // const headers = new HttpHeaders({
    //   token: '12345dhvhd30930',
    // });
    return this.http.post<RoomsList>('/api/rooms', room);
  }

  editRoom(room: RoomsList) {
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
  }

  getRooms(): Observable<RoomsList[]> {
    const headers = new HttpHeaders({
      token: '12345dhvhd30930',
    });

    return this.http.get<RoomsList[]>('/api/rooms', {
      headers,
    });
    // let roomsList = [
    //   {
    //     roomNumber: 1,
    //     roomTypes: 'Deluxe Room',
    //     amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //     price: 500,
    //     photos: 'https://images.google.com/room1.jpg',
    //     checkintime: new Date('11-Nov-2021'),
    //     checkouttime: new Date('12-Nov-2021'),
    //     rating: 4.583763,
    //   },
    //   {
    //     roomNumber: 2,
    //     roomTypes: 'Deluxe Room',
    //     amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //     price: 1000,
    //     photos: 'https://images.google.com/room2.jpg',
    //     checkintime: new Date('11-Nov-2021'),
    //     checkouttime: new Date('12-Nov-2021'),
    //     rating: 3.457734,
    //   },
    //   {
    //     roomNumber: 3,
    //     roomTypes: 'Private Suite',
    //     amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //     price: 15000,
    //     photos: 'https://images.google.com/room1.jpg',
    //     checkintime: new Date('11-Nov-2021'),
    //     checkouttime: new Date('12-Nov-2021'),
    //     rating: 2.6825,
    //   },
    // ];

    // return roomsList;
  }

  getPhotos() {
    const photoUrl = 'https://jsonplaceholder.typicode.com/photos';
    const request = new HttpRequest('GET', photoUrl, {
      reportProgress: true,
    });

    return this.http.request(request);
  }
}

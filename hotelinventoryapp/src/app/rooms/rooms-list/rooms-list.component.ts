import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent {
  @Input()
  rooms: RoomsList[] = [];

  @Output()
  roomSelected = new EventEmitter<RoomsList>();

  selectRoom(room: RoomsList): void {
    console.log('Selected Room ', room);
    this.roomSelected.emit(room);
  }

  clickMe() {
    console.log('Clicked');
  }
}

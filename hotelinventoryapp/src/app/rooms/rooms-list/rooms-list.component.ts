import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input()
  rooms: RoomsList[] = [];

  @Input()
  title: string = '';

  @Output()
  roomSelected = new EventEmitter<RoomsList>();

  selectRoom(room: RoomsList): void {
    console.log('Selected Room ', room);
    this.roomSelected.emit(room);
  }

  clickMe() {
    console.log('Clicked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}

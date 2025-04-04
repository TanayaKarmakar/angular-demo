import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsAddComponent,
    RoomsBookingComponent,
    RoomsListComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
  exports: [
    RoomsComponent,
    RoomsAddComponent,
    RoomsBookingComponent,
    RoomsListComponent,
    RoomsRoutingModule,
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {
        title: 'Rooms',
      },
    },
  ],
})
export class RoomsModule {}

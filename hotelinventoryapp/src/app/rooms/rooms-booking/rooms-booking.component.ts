import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css',
})
export class RoomsBookingComponent implements OnInit {
  id!: string;

  id$!: Observable<number>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   console.log(params);
    //   this.id = params['id'];
    // });

    this.id$ = this.router.params.pipe(map((params) => params['id']));
  }
}

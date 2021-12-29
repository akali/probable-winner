import { Component, OnInit } from '@angular/core';
import {HotelItem, HotelService} from "applications/hotelreview/src/app/hotel/services/hotel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'hr-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(200)),
    ]),
    trigger('clickCity', [
      state('open', style({
        color: 'gray'
      })),
      state('closed', style({
        color: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DetailComponent implements OnInit {
  hotel: HotelItem | null = null;
  isClicked: boolean = false;

  constructor(private hotelService: HotelService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('hotel_id');
    if (hotelId == null || this.hotelService.getById(hotelId as string) == null) {
      this.router.navigate(['/404']);
    }
    this.hotel = this.hotelService.getById(hotelId as string) as HotelItem;
  }

}

import { Component, OnInit } from '@angular/core';
import {HotelService} from "applications/hotelreview/src/app/hotel/services/hotel.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'hr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hotels = this.hotelService.getHotels();

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const query = this.route.snapshot.paramMap.get('query');
    if (query !== null) {
      this.hotels = this.hotels.filter(this.hotelService.hasQuery(query))
    }
  }

  onNavigateClick(id: string) {
    this.router.navigate([id])
  }
}

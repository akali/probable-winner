import { Injectable } from '@angular/core';

export interface HotelVote {
  voter: string;
  rating: number;
}

export interface HotelItem {
  id: string;
  name: string;
  desc: string;
  rating: number;
  votes: HotelVote[];
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
}

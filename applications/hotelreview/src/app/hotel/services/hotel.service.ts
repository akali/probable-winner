import { Injectable } from '@angular/core';

export type HotelRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface HotelVote {
  voter: string;
  rating: HotelRating;
}

export interface HotelItem {
  id: string;
  name: string;
  desc: string;
  city: string;
  image: string;
  votes: HotelVote[];
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: HotelItem[] = [{
    id: "1",
    name: "Hotel Duman",
    desc: "Featuring an indoor swimming pool, a spa, a bowling alley and a restaurant, this large hotel is centrally located in Astana. The 4-star Hotel Duman provides free private parking.",
    city: "Nur-Sultan",
    image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/118985615.webp?k=4abc7cd4798d8e7868c3374a2560a198abc72b8026fa9570816d2cd7042757ee&o=&s=1",
    votes: [],
  }, {
    id: "2",
    name: "Hotel Duman",
    desc: "Featuring an indoor swimming pool, a spa, a bowling alley and a restaurant, this large hotel is centrally located in Astana. The 4-star Hotel Duman provides free private parking.",
    city: "Nur-Sultan",
    image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/118985615.webp?k=4abc7cd4798d8e7868c3374a2560a198abc72b8026fa9570816d2cd7042757ee&o=&s=1",
    votes: [],
  }]

  getHotelRating(hotel: HotelItem): number {
    return hotel.votes.map(vote => vote.rating)
      .map(rating => rating as unknown as number)
      .reduce((prev, cur) => prev + cur, 0)
      / hotel.votes.length
  }

  getHotels(): HotelItem[] {
    return this.hotels;
  }

  constructor() { }

  hasQuery(query: string): (hotel: HotelItem) => boolean {
    return (hotel: HotelItem): boolean => {
      return hotel.name.indexOf(query) !== -1 ||
        hotel.city.indexOf(query) !== -1 ||
        hotel.desc.indexOf(query) !== -1 ||
        hotel.image.indexOf(query) !== -1;
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {CommentItem, CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";
import {Router} from "@angular/router";
import {HotelCardComponent} from "libraries/ui/src/lib/hotel-card/hotel-card/hotel-card.component";
import {HotelRating, HotelService} from "applications/hotelreview/src/app/hotel/services/hotel.service";

@Component({
  selector: 'hr-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() hotelId: string = '';

  constructor(
    private hotelService: HotelService,
    private commentService: CommentService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onDone(text: string) {
    const commentItem: CommentItem = {
      hotelId: this.hotelId,
      commentId: '1',
      author: this.authService.getCurrentUsername(),
      text: text,
      votes: [],
    }
    this.commentService.createComment(commentItem);
  }

  onRatingDone(rating: HotelRating) {
    this.hotelService.vote(this.hotelService.getById(this.hotelId), this.authService.getCurrentUsername(), rating);
  }
}

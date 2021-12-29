import {Component, Input, OnInit} from '@angular/core';
import {CommentItem, CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";

@Component({
  selector: 'hr-comment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() hotelId = '';
  comments: CommentItem[] = [];

  constructor(
    private commentService: CommentService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.comments = this.commentService.commentsByHotelId(this.hotelId);
  }

  onCommentDeleteClick(commentId: string) {
  }

  ownComment(comment: CommentItem) {
    return this.commentService.ownComment(comment);
  }

  getRating(comment: CommentItem) {
    return this.commentService.commentRating(comment);
  }

  onCommentEditClick(commentId: string) {

  }

  onLike(commentId: string) {
    this.commentService.voteComment(commentId, this.authService.getCurrentUsername(), 1);
  }

  onDislike(commentId: string) {
    this.commentService.voteComment(commentId, this.authService.getCurrentUsername(), -1);
  }
}

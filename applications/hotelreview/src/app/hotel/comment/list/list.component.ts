import {Component, Input, OnInit} from '@angular/core';
import {CommentItem, CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";
import {Router} from "@angular/router";

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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.comments = this.commentService.commentsByHotelId(this.hotelId);
  }

  onCommentDeleteClick(commentId: string) {
    this.commentService.deleteComment(commentId);
  }

  ownComment(comment: CommentItem) {
    return this.commentService.ownComment(comment);
  }

  getRating(comment: CommentItem) {
    return this.commentService.commentRating(comment);
  }

  onCommentEditClick(commentId: string) {
    this.router.navigate(['hotel', 'comment', commentId])
  }

  onLike(commentId: string) {
    this.commentService.voteComment(commentId, this.authService.getCurrentUsername(), 1);
  }

  onDislike(commentId: string) {
    this.commentService.voteComment(commentId, this.authService.getCurrentUsername(), -1);
  }
}

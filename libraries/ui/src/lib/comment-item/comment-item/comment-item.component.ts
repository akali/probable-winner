import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentVote} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";

@Component({
  selector: 'ui-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() author = 'author';
  @Input() comment = 'comment';
  @Input() showButtons = false;
  @Input() rating = 0;
  @Input() votes: CommentVote[] = [];
  @Output() onCommentDeleteClick = new EventEmitter<void>()
  @Output() onCommentEditClick = new EventEmitter<void>();
  @Output() onLikeClick = new EventEmitter<void>();
  @Output() onDislikeClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  negativeVotes() {
    return this.votes.filter(vote => vote.value === -1).length;
  }

  positiveVotes() {
    return this.votes.filter(vote => vote.value === 1).length;
  }
}

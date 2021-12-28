import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() author = 'author';
  @Input() comment = 'comment';
  @Output() onCommentDeleteClick = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }
}

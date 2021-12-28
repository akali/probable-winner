import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";

@Component({
  selector: 'hr-comment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() hotelId = '';

  constructor(
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
  }

}

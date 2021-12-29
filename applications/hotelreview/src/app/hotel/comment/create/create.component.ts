import {Component, Input, OnInit} from '@angular/core';
import {CommentItem, CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'hr-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() hotelId: string = '';

  constructor(private commentService: CommentService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onDone(text: string) {
    const commentItem:CommentItem = {
      hotelId: this.hotelId,
      commentId: '1',
      author: this.authService.getCurrentUsername(),
      text: text,
      votes: [],
    }
    this.commentService.createComment(commentItem);
  }
}

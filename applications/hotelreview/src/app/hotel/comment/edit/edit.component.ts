import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {CommentItem, CommentService} from "applications/hotelreview/src/app/hotel/comment/services/comment.service";

@Component({
  selector: 'hr-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  comment?: CommentItem;
  content: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentService,
    ) { }

  ngOnInit(): void {
    const commentId = this.route.snapshot.paramMap.get('comment_id');
    console.log(commentId);
    if (commentId === null || this.commentService.getCommentById(commentId) === null) {
      this.router.navigate(['/']);
    } else {
      this.comment = <CommentItem>this.commentService.getCommentById(commentId);
    }
  }

  onDone(content: string) {
    if (this.comment !== undefined) {
      this.comment.text = content;
      this.commentService.saveComment(this.comment);
      this.router.navigate(['search'])
    }
  }

  onDelete() {
    this.commentService.deleteComment(this.comment?.commentId);
  }
}

import { Injectable } from '@angular/core';
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";

export interface CommentVote {
  voter: string;
  value: -1 | 1;
}

export interface CommentItem {
  hotelId: string;
  commentId: string;
  author: string;
  votes: CommentVote[];
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: CommentItem[] = [{
    hotelId: "1",
    commentId: "1",
    author: "Zhanel",
    votes: [],
  }]
  commentRating(commentItem: CommentItem): number {
    return commentItem.votes.reduce((prev, cur): number => {
      return prev + cur.value;
    }, 0)
  }

  voteSingleComment(comment: CommentItem, voter: string, value: -1 | 1): CommentItem {
    const votes = comment.votes.filter(vote => vote.voter === voter);
    if (votes.length == 0) {
      comment.votes.push({
        voter: voter,
        value: value,
      })
    } else {
      comment.votes = votes.map(vote => {
        vote.value = value;
        return vote;
      })
    }
    return comment;
  }

  constructor(authService: AuthService) { }

  voteComment(commentId: string, voter: string, value: -1 | 1) {
    this.comments =
      this.comments
        .filter(comment => comment.commentId == commentId)
        .map(comment => this.voteSingleComment(comment, voter, value));
  }
}

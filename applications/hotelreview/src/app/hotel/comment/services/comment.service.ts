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
  text: string;
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
    text: "Liked so much",
    votes: [{
      voter: "akali",
      value: 1,
    }],
  }, {
    hotelId: "1",
    commentId: "2",
    author: "akali@g.co",
    text: "Agree",
    votes: [{
      voter: "Zhanel",
      value: -1,
    }],
  },]
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

  constructor(private authService: AuthService) {
    this.comments = this.loadComments();
  }

  private loadComments() {
    let comments = localStorage.getItem('comments');
    if (comments === null) {
      comments = JSON.stringify(this.comments);
    }
    return JSON.parse(comments);
  }

  private saveComments() {
    const comments = JSON.stringify(this.comments);
    localStorage.setItem('comments', comments);
  }

  voteComment(commentId: string, voter: string, value: -1 | 1) {
    this.comments =
      this.comments
        .map(comment => comment.commentId == commentId ? this.voteSingleComment(comment, voter, value) : comment);
    this.saveComments();
  }

  commentsByHotelId(hotelId: string): CommentItem[] {
    return this.comments.filter(comment => comment.hotelId === hotelId);
  }

  ownComment(comment: CommentItem): boolean {
    return comment.author === this.authService.getCurrentUsername();
  }

  getCommentById(commentId: string): CommentItem | null {
    const filtered = this.comments.filter(comment => comment.commentId === commentId);
    if (filtered.length === 0) return null;
    return filtered[0];
  }

  saveComment(comment: CommentItem) {
    this.comments = this.comments.map(cur => cur.commentId === comment.commentId ? comment : cur);
    this.saveComments();
  }

  deleteComment(commentId: string | undefined) {
    if (commentId === undefined) return;
    this.comments = this.comments.filter(cur => cur.commentId !== commentId);
    this.saveComments();
  }
}

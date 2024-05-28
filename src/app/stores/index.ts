import { defineStore } from 'pinia';
import type { Comment } from '@/entities/comment';
import { 
  getCommentsMock, 
  addCommentMock, 
  updateCommentMock, 
  deleteCommentMock, 
} from '@/entities/comment/model/commentApi';

export const useCommentsStore = defineStore('comment', {
  state: () => ({
    comments: [] as Comment[],
  }),
  actions: {
    fetchComments() {
      this.comments = getCommentsMock();
    },
    addComment(newComment: Comment) {
      addCommentMock(newComment);
      this.comments.push(newComment);
    },
    updateComment(updatedComment: Comment) {
      updateCommentMock(updatedComment);
      const index = this.comments.findIndex(comment => comment.id === updatedComment.id);
      if (index !== -1) {
        this.comments[index] = updatedComment;
      }
    },
    deleteComment(commentId: number) {
      deleteCommentMock(commentId);
      this.comments = this.comments.filter(comment => comment.id !== commentId);
    },
    upvoteComment(commentId: number) {
      const comment = this.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.upvotes = (comment.upvotes || 0) + 1;
        updateCommentMock(comment);
      }
    },
    downvoteComment(commentId: number) {
      const comment = this.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.downvotes = (comment.downvotes || 0) + 1;
        updateCommentMock(comment);
      }
    },
  },
});


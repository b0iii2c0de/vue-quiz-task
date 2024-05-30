import type { Comment } from './comment';

// Функция для сортировки комментариев по рейтингу
export const sortCommentsByRating = (comments: Comment[]): Comment[] => {
  return comments.sort((a, b) => {
    const aRating = (a.upvotes || 0) - (a.downvotes || 0);
    const bRating = (b.upvotes || 0) - (b.downvotes || 0);
    return bRating - aRating;
  });
};


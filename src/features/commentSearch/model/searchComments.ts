import type { Comment } from '@/entities/comment';

export const searchComments = (comments: Comment[], query: string): Comment[] => {
  if (!query) return comments;
  return comments.filter((comment) => 
    comment.author.toLowerCase().includes(query.toLowerCase()) ||
    comment.content.toLowerCase().includes(query.toLowerCase())
  );  
};
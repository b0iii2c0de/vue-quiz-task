export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  replies: Comment[];
  upvotes?: number;
  downvotes?: number;
  avatarUrl?: string;
}

export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  replies: Comment[];
}

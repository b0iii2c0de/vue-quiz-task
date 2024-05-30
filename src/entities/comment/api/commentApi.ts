import type { Comment } from '../model/comment';
import { comments } from './commentMock';

// Функции для работы с мокой комментариев
export const getCommentsMock = (): Comment[] => {
  return comments;
};

export const getCommentByIdMock = (id: number): Comment | undefined => {
  return comments.find((comment) => comment.id === id);
};

export const addCommentMock = (comment: Comment): void => {
  comment.id = comments.length + 1;
  comments.push(comment);
};

export const updateCommentMock = (comment: Comment): void => {
  const existingComment = comments.find((c) => c.id === comment.id);
  if (existingComment) {
    Object.assign(existingComment, comment);
  }
};

export const deleteCommentMock = (id: number): void => {
  const index = comments.findIndex((comment) => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
  }
};

// Функции для работы с реальным API (пока не реализованы)
export const getComments = (): Promise<Comment[]> => {
  // TODO: Реализовать запрос к API для получения комментариев
  return Promise.resolve([]);
};

export const getCommentById = (id: number): Promise<Comment | undefined> => {
  // TODO: Реализовать запрос к API для получения комментария по id
  return Promise.resolve(undefined);
};

export const addComment = (comment: Comment): Promise<void> => {
  // TODO: Реализовать запрос к API для добавления комментария
  return Promise.resolve();
};

export const updateComment = (comment: Comment): Promise<void> => {
  // TODO: Реализовать запрос к API для обновления комментария
  return Promise.resolve();
};

export const deleteComment = (id: number): Promise<void> => {
  // TODO: Реализовать запрос к API для удаления комментария
  return Promise.resolve();
};

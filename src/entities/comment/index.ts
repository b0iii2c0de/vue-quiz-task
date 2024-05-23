export * from './model/comment'; // Экспорт типов Comment и других моделей
export * from './model/commentApi'; // Экспорт функций для работы с комментариями (getCommentsMock, getCommentByIdMock и т.д.)
export { default as CommentItem } from './ui/CommentItem.vue';
export { default as CommentList } from './ui/CommentList.vue';
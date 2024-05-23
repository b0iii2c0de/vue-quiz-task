<script setup lang="ts">
import { ref } from 'vue';
/*  Внешние модули могут использовать только публичный API, что упрощает поддержку и расширение системы. Импорт только через "точку входа" */
import type { Comment } from '@/entities/comment/index'; 
import { addCommentMock } from '@/entities/comment/index'; 
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';


const author = ref('');
const content = ref('');

const addComment = () => {
  const newComment: Comment = {
    id: 0,
    author: author.value,
    content: content.value,
    timestamp: new Date(),
    replies: [],
  };
  addCommentMock(newComment);
  author.value = '';
  content.value = '';
};
</script>

<template>
  <div>
    <Input v-model="author" placeholder="Your name" />
    <Textarea v-model="content" placeholder="Your comment"></Textarea>
    <Button @click="addComment">Add Comment</Button>
  </div>
</template>

<style scoped>
input, textarea {
  display: block;
  margin-bottom: 10px;
}
</style>
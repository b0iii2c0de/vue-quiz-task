<script setup lang="ts">
  import { ref } from 'vue';
  import type { Comment } from '@/entities/comment';
  import { deleteCommentMock } from '@/entities/comment';
  import { Button } from '@/shared/ui/button';

  const props = defineProps<{ comment: Comment }>();

  const deleteComment = () => {
    deleteCommentMock(props.comment.id);
  };
</script>

<template>
  <div>
    <Button @click="deleteComment">Delete Comment</Button>
  </div>
</template>
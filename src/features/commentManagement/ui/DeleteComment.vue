<script setup lang="ts">
  import type { Comment } from '@/entities/comment';
  import { deleteCommentMock } from '@/entities/comment';
  import { Button } from '@/shared/ui/button';

  const props = defineProps<{ comment: Comment }>();
  const emit = defineEmits(['delete']);

  const deleteComment = () => {
    deleteCommentMock(props.comment.id);
    emit('delete', props.comment);
  };
</script>

<template>
  <div>
    <Button @click="deleteComment">Delete Comment</Button>
  </div>
</template>
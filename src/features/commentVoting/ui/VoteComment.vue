<script setup lang="ts">
  import type { Comment } from '@/entities/comment';
  import { updateCommentMock } from '@/entities/comment';
  import { Button } from '@/shared/ui/button';

  const props = defineProps<{ comment: Comment }>();
  
  const upvote = () => {
    const updateComment: Comment = {
      ...props.comment,
      upvotes: (props.comment.upvotes || 0) + 1,
    };
    updateCommentMock(updateComment);
  };

  const downvote = () => {
    const updateComment: Comment = {
      ...props.comment,
      downvotes: (props.comment.downvotes || 0) + 1,
    };
    updateCommentMock(updateComment);
  };
</script>

<template>
  <div>
    <Button @click="upvote">Upvote</Button>
    <Button @click="downvote">Downvote</Button>
    <span>{{ props.comment.upvotes || 0 }} Upvotes</span>
    <span>{{ props.comment.downvotes || 0 }} Downvotes</span>
  </div>
</template>
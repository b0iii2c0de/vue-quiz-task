<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Comment } from '@/entities/comment/model/comment';
  import { getCommentsMock } from '@/entities/comment/model/commentApi';
  import CommentItem from './CommentItem.vue';
  import { EditComment, DeleteComment } from '@/features/commentManagement';
  import { VoteComment } from '@/features/commentVoting';

  const comments = ref<Comment[]>([]);

  onMounted(() => {
    comments.value = getCommentsMock();
  });

  const renderComments = (comments: Comment[]) => {
    return comments.map(comment => (
      <li :key="comment.id">
        <CommentItem :comment="comment" />
        <VoteComment :comment="comment" />
        <EditComment :comment="comment" />
        <DeleteComment :comment="comment" />
        <ul v-if="comment.replies.length">
          { renderComments(comment.replies) }
        </ul>
      </li>
    ));
  };
</script>

<template>
  <div>
    <ul>
      { renderComments(comments.value) }
    </ul>  
  </div>
</template>

<!-- <style scoped>
  ul {
    list-style-type: none;
    padding-left: 20px;
  }
</style> -->
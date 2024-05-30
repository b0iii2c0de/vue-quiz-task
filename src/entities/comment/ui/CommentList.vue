<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import type { Comment } from '@/entities/comment/model/comment';
  import { getCommentsMock } from '@/entities/comment/model/commentApi';
  import CommentItem from './CommentItem.vue';
  import { EditComment, DeleteComment } from '@/features/commentManagement';
  import { VoteComment } from '@/features/commentVoting';
  import { sortCommentsByRating } from '../model/sortComments';

  const comments = ref<Comment[]>([]);

  onMounted(() => {
    comments.value = getCommentsMock();
  });

  const sortedComments = computed(() => sortCommentsByRating(comments.value));
</script>

<template>
  <div>
    <ul>
        <li v-for="comment in sortedComments" :key="comment.id">
          <CommentItem :comment="comment" />
          <VoteComment :comment="comment" />
          <EditComment :comment="comment" />
          <DeleteComment :comment="comment" />
          <ul v-if="comment.replies.length">
            <li v-for="reply in comment.replies" :key="reply.id">
              <CommentItem :comment="reply" />
              <VoteComment :comment="reply" />
              <EditComment :comment="reply" />
              <DeleteComment :comment="reply" />
            </li>
          </ul>
        </li>
    </ul>  
  </div>
</template>

<!-- <style scoped>
  ul {
    list-style-type: none;
    padding-left: 20px;
  }
</style> -->
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import type { Comment } from '@/entities/comment';
  import { getCommentsMock } from '@/entities/comment';
  import { CommentList } from '@/entities/comment';
  import { AddComment } from '@/features/commentManagement';
  import { searchComments, SearchComments } from '@/features/commentSearch';

  const comments = ref<Comment[]>([]);

  onMounted(() => {
    comments.value = getCommentsMock();
  });

  const searchQuery = ref('');

  const filteredComments = computed(() => searchComments(
    comments.value, 
    searchQuery.value
  ));
</script>

<template>
  <div>
    <h1>Comments</h1>
    <SearchComments v-model:query="searchQuery" />
    <AddComment />
    <CommentList :comments="filteredComments" />
  </div>
</template>

<style scoped>
</style>


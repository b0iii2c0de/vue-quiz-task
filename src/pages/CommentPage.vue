<script setup lang="ts">
  import { CommentList } from '@/entities/comment';
  import { AddComment } from '@/features/commentManagement';
</script>

<template>
  <div>
    <h1>Comments</h1>
    <AddComment />
    <CommentList />
  </div>
</template>

<style scoped>
</style>


<script setup lang="ts">
  import { ref } from 'vue';
  import { updateCommentMock } from '@/entities/comment';
  import type { Comment } from '@/entities/comment';
  import { Textarea } from '@/shared/ui/textarea';
  import { Button } from '@/shared/ui/button';

  const props = defineProps<{ comment: Comment }>();
  
  const content = ref(props.comment.content);

  const updateComment = () => {
    const updatedComment: Comment = {
      ...props.comment,
      content: content.value,
    };
    updateCommentMock(updatedComment);
  };
</script>

<template>
  <div>
    <Textarea v-model="content" placeholder="Your comment"></Textarea>
    <Button @click="updateComment">Update Comment</Button>
  </div>  
</template>

<!-- <style scoped>
  textarea {
    display: block;
    margin-bottom: 10px;
  }
</style> -->
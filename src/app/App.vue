<script lang="ts">
import { defineComponent } from 'vue';
import CommentPage from '@/pages/CommentPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    CommentPage,
  },
});
</script>

<template>
  <div class="app">
    <CommentPage />
  </div>
</template>

<!-- <style scooped>
.app {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style> -->


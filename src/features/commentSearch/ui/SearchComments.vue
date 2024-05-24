<script setup lang="ts">
  import { ref } from 'vue';
  import { Input } from '@/shared/ui/input';

  const searchQuery = ref('');

  const emit = defineEmits(['update:query']);

  const updateQuery = () => {
    emit('update:query', searchQuery.value);      
  };
</script>

<template>
  <div>
    <Input 
      v-model="searchQuery" 
      @input="updateQuery" 
      placeholder="Search comments" 
    />
  </div>
</template>

<!-- <style scoped>
  input {
    display: block;
    margin-bottom: 10px;
  }
</style> -->
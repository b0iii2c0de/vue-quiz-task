<script setup lang="ts">
  import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card';
  import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
  import { Button } from '@/shared/ui/button';
  import type { Comment } from '@/entities/comment/model/comment';
  import { formatDate } from '../lib/dateUtils';
  // import { Reply } from 'lucide-vue-next'; // icon to use 

  const props = defineProps<{ comment: Comment }>();
</script>

<template>
  <Card>
    <CardHeader>
      <Avatar>
        <AvatarImage :src="props.comment.avatarUrl ?? ''" alt="User avatar"/>
        <AvatarFallback v-if="!props.comment.avatarUrl">{{ props.comment.author.charAt(0) }}</AvatarFallback>
      </Avatar>
      <CardTitle>{{ props.comment.author }}</CardTitle>  
    </CardHeader>  
    <CardContent>
      <p>{{ props.comment.content }}</p>
      <p>{{ formatDate(props.comment.timestamp) }}</p>
    </CardContent>
    <CardFooter>
      <Button @click="$emit('reply', props.comment)">Reply</Button>
      <Button @click="$emit('edit', props.comment)">Edit</Button>
      <Button @click="$emit('delete', props.comment)">Delete</Button>
    </CardFooter> 
  </Card>      
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card';
  import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
  import { Button } from '@/shared/ui/button';
  import type { Comment } from '@/entities/comment/model/comment';
  // import { Reply } from 'lucide-vue-next'; // icon to use 

  const props = defineProps<{ comment: Comment }>();
</script>

<template>
  <Card>
    <CardHeader>
      <Avatar>
        <AvatarImage src="@/app/assets/orca.jpg" alt="User avatar"/>
        <AvatarFallback>{{ props.comment.author.charAt(0) }}</AvatarFallback>
      </Avatar>
      <CardTitle>{{ props.comment.author }}</CardTitle>  
    </CardHeader>  
    <CardContent>
      <p>{{ props.comment.content }}</p>
    </CardContent>
    <CardFooter>
      <Button @click="reply">Reply</Button>
      <Button @click="edit">Edit</Button>
      <Button @click="delete">Delete</Button>
    </CardFooter> 
  </Card>      
</template>

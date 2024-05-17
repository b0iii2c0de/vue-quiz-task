<script setup lang="ts">
import { Button } from '@/shared/ui/button';
import { Avatar } from '@/shared/ui/avatar';

let greeting = 'Полёт нормальный!';
let log = () => console.log(greeting);

</script>

<template>
  <h1 class="text-center text-4xl">
    {{ greeting }}
  </h1>
  <Button 
    variant="outline" 
    size="xs" 
    class="bg-orange-500 bg-background text-foreground" 
    @click="log"
  >{{ greeting }}</Button>
  <Avatar shape="square" size="sm" />
</template>
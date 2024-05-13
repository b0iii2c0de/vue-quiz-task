<script setup lang="ts">
import { Button } from '@/shared/ui/button';

let greeting = 'Полёт нормальный!';
let log = () => console.log(greeting);

</script>

<template>
  <h1 class="text-slate-900 text-center text-4xl">
    {{ greeting }}
  </h1>
  <Button 
    variant="outline" 
    size="xs" 
    class="bg-orange-500" 
    @click="log"
  >{{ greeting }}</Button>
</template>
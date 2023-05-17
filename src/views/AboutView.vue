<template>
   <div class="about">
      <h1>This {{ name }} {{ count }} {{ nodeenv}}</h1>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
   </div>
</template>

<script>
import { useMeta } from 'vue-meta';
import { useCounterStore } from '@/stores/counter';

export default {
   setup() {
      useMeta({
         title: 'ABOUT',
         htmlAttrs: { lang: 'en', amp: true },
      });
   },
   computed: {
      count() {
         return useCounterStore().count;
      },
      name() {
         return useCounterStore().name;
      },
      nodeenv() {
         return process.env.NODE_ENV;
      },
   },
   methods: {
      increment() {
         useCounterStore().increment();
      },
      decrement() {
         useCounterStore().decrement();
      },
   },
};
</script>
<style lang="scss" scoped>
h1 {
   color: $font-color-light;
}
@media (min-width: 1024px) {
   .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
   }
}
</style>

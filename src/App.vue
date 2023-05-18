<template>
   <metainfo>
      <template v-slot:title="{ content }">{{ content }} - Metatron</template>
   </metainfo>
   <RouterView />
</template>

<script>
import { useMeta } from 'vue-meta';
import { RouterView } from 'vue-router';

export default {
   setup() {
      useMeta({
         title: 'hello',
         htmlAttrs: { lang: 'en', amp: true },
      });
   },
   components: {
      RouterView,
   },
};
</script>

<style scoped>

</style>

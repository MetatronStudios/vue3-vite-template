<template>
   <div>
      <MetatronMenuLayout />
      <router-view></router-view>
      <MetatronFooterLayout />
   </div>
</template>

<script>
import MetatronMenuLayout from './components/MenuLayout.vue';
import MetatronFooterLayout from './components/FooterLayout.vue';

export default {
   name: 'MetatronLayout',
   components: {
      MetatronMenuLayout,
      MetatronFooterLayout,
   },
   data() {
      return {

      };
   },
};
</script>

<style lang="scss" scoped>

</style>

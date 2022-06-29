<template>
  <div
    id="defaultLayout"
    class="white my-0 mx-auto py-8 px-4"
  >
    <AppBar />
    <slot />
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppBar,
  },
  data: () => ({}),
};
</script>

// <style lang="scss">
// #defaultLayout {
//   min-height: 100%;
// }
// </style>

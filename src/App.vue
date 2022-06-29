<template>
  <v-app>
    <v-main>
      <v-container
        id="container"
        class="pa-0"
        fluid
      >
        <component :is="layout">
          <router-view />
        </component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      const layout = this.$route.meta.layout;
      return layout ? () => import(`@/layouts/${layout}.vue`) : 'div';
    },
  },
};
</script>

<style lang="scss">
#container {
  min-height: 100%;
}
</style>

<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="My web logo"
          class="web-logo"
          width="55"
          :src="myLogoImage"
        />
      </router-link>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        class="ml-4"
        centered
        dark
        hide-slider
        optional
      >
        <v-tab
          class="body-1 font-weight-black"
          href="/dog"
          to="/dog"
        >
          Dog
        </v-tab>

        <v-tab
          class="body-1 font-weight-black"
          href="/cat"
          to="/cat"
        >
          Cat
        </v-tab>
      </v-tabs>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBarComponent',
  data () {
    return {
      tab: '',
      myLogoImage: require('@/assets/logo.png')
    }
  }
};
</script>

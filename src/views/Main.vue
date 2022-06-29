<template>
  <v-row
    id="page-not-found"
    class="ma-8"
    :class="$vuetify.breakpoint.smAndDown ? 'align-content-center' : ''"
  >
    <v-col
      class="text-center align-self-center"
      cols="12"
      md="6"
    >
      <div>
        <img
          class="greeting-img"
          alt="Greeting Image"
          src="@/assets/greeting.png"
        >
      </div>
    </v-col>
    <v-col
      :class="$vuetify.breakpoint.smAndDown ? 'text-center decrease-mt-6' : ''"
      class="align-self-center"
      cols="12"
      md="6"
    >
      <GreetingUserComponent />
    </v-col>
  </v-row>
</template>

<script>
import GreetingUserComponent from '@/components/GreetingUser.vue'

export default {
  name: 'MainView',
  components: {
    GreetingUserComponent,
  },
};
</script>


<style lang="scss" scoped>
img.greeting-img {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  padding: 16px;
}
</style>

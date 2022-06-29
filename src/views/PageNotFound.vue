<template>
  <v-row
    id="page-not-found"
    class="ma-0"
    :class="$vuetify.breakpoint.smAndDown ? 'align-content-center' : ''"
  >
    <v-col
      class="text-center align-self-center"
      cols="12"
      md="6"
    >
      <div>
        <img
          alt="Page not found"
          src="@/assets/404-not-found.gif"
        >
      </div>
    </v-col>
    <v-col
      :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
      class="align-self-center mt-4"
      cols="12"
      md="6"
    >
      <div>
        <div
          :class="$vuetify.breakpoint.smAndDown ? '' : 'display-1'"
          class="display-1 decrease-mt-4"
        >
          ขออภัย ไม่พบหน้าที่คุณต้องการ
        </div>
        <div class="grey--text text--darken-2 my-2">
          กรุณาตรวจสอบลิ้งค์ที่คุณเข้ามา หรือ กลับสู่เว็บไซต์
        </div>
        <v-btn
          class="mt-6 font-weight-bold"
          outlined
          rounded
          large
          @click="goBack"
        >
          กลับสู่เว็บไซต์
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageNotFoundView',
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
#page-not-found {
  background-color: var(--v-primary-base);
  min-height: 100vh;
  img {
    width: 450px;
    margin-left: auto;
  }
  .decrease-mt-4 {
    margin-top: -16px;
  }
  .decrease-mt-6 {
    margin-top: -24px;
  }
}
</style>

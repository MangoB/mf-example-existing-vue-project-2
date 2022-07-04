<template>
  <div>
    <div
      :class="$vuetify.breakpoint.smAndDown ? '' : 'display-1'"
      class="display-1 primary--text decrease-mt-4"
    >
      Hello คุณ{{ name || 'นิรนาม' }}
    </div>
    <div class="grey--text my-2">
      นี่คือหน้าแรกของ App
    </div>
    <v-text-field
      v-model="name"
      class="mt-8"
      label="กรุณาใส่ชื่อของคุณ"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'GreetingUserComponent',
  data: () => ({
    name: '',
  }),
}
</script>

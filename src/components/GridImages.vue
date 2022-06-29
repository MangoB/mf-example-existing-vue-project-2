<template>
  <v-row>
    <v-col
      v-for="indexColumn in 9"
      :key="indexColumn"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="imageList[indexColumn - 1]"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              v-if="imageList[indexColumn - 1]"
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
            <span v-else/>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'GridImageComponent',
  props: {
    imageList: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

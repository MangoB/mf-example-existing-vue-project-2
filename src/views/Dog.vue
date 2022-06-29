<template>
  <GridImages :imageList="dogImageList" />
</template>

<script>
import Axios from 'axios';
import GridImages from '@/components/GridImages.vue'

export default {
  name: 'DogView',
  components: {
    GridImages,
  },
  data: () => ({
    dogApiUrl: 'https://dog.ceo/api/breeds/image/random/9',
    dogImageList: [],
  }),
  async mounted() {
    await Axios.get(
      this.dogApiUrl,
    ).then((result) => {
      this.dogImageList = result.data.message || []
    }).catch(() => {
      this.dogImageList = []
    });
  },

};
</script>
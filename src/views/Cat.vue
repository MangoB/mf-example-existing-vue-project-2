<template>
  <GridImages :imageList="catImageList" />
</template>

<script>
import Axios from 'axios';
import GridImages from '@/components/GridImages.vue'

export default {
  name: 'CatView',
  components: {
    GridImages,
  },
  data: () => ({
    catApiUrl: 'https://api.thecatapi.com/v1/images/search?limit=9',
    catImageList: [],
  }),
  async mounted() {
    await Axios.get(
      this.catApiUrl,
    ).then((result) => {
      this.catImageList = result.data.map(({ url }) => url)
    }).catch(() => {
      this.catImageList = []
    });
  },

};
</script>
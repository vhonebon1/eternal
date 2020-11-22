<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PhotoContainer',
  computed: {
    ...mapGetters({
      imageBatch: 'getImageBatch'
    }),
    images () {
      return this.imageBatch()
    }
  }
}
</script>

<template lang="pug">
  .photo-container
    .photo-container__photos
      img(v-for='image in images' :src='image')
</template>

<style scoped lang="stylus">
@import './../assets/styles/*'

  .photo-container
    width: 100vw

    &__photos
      display: flex
      flex-wrap: wrap
      align-items: flex-start

    img 
      display: block
      width: 100%

      +media-breakpoint-up(lg)
        width: 50%

</style>
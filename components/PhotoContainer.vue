<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PhotoContainer'
}
</script>

<template lang="pug">
  .photo-container
    img(:src='require(`@/assets/images/bang.jpg`)')

</template>

<style scoped lang="stylus">
@import './../assets/styles/*'

.photo-container
  background: ETERNAL.colours.darkest-grey

</style>
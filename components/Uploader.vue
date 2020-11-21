<script>
import Nav from './Nav'

export default {
  name: 'Uploader',
  components: {
    Nav
  },
  data() {
    return {
      file: ''
    }
  }
}
</script>

<template lang='pug'>
  .uploader HEY
    Nav

</template>

<style lang='stylus'>
@import './../assets/styles/*'

</style>
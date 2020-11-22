<script>
import Nav from './../components/Nav'
import uploader from './../components/Uploader'

export default {
  name: 'Upload',
  components: {
    Nav
  }
}
</script>

<template lang='pug'>
  .upload
    .upload__content
      uploader
      Nav
</template>

<style lang='stylus'>
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .upload
    display: flex
    height: 100vh

    &__content
      width: 100vw
      background-image: url('~assets/images/cash.jpg')
      display: flex
      flex-direction: column
      justify-content space-around
  
</style>
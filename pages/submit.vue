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
      .upload__content--box
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
      background-repeat: repeat
      display: flex
      flex-direction: column
      justify-content space-around

      &--box
        width: 80vw
        height: calc(80vh - 55px)
        margin: 0 auto
        display: flex
        flex-direction: column
        justify-content: space-around
        background: ETERNAL.colours.darkest-grey
        opacity: 0.95
        padding: 15px
        text-align: center
        border-radius: 10px

        +media-breakpoint-up(lg)
          width: 50vw
          height: 50vh
          padding: 30px
  
</style>
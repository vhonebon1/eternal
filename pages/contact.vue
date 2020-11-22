<script>
import Nav from './../components/Nav'

export default {
  name: 'Contact',
  components: {
    Nav
  }
}
</script>

<template lang='pug'>
  .contact
    .contact__content
      .contact__content--enquiry
        .contact__content--text For all enquiries:
        .contact__content--email eternalatpeoples@gmail.com
    Nav
  
</template>

<style scoped lang='stylus'>
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .contact
    height: 100vh
    width: 100vw
    background-image: url('~assets/images/bang.jpg')
    background-repeat: repeat
    display: flex
    flex-direction: column
    justify-content: space-around

    &__content
      width: 80vw
      min-width: 200px
      height: 80vh
      margin: 0 auto
      display: flex
      flex-direction: column
      justify-content: space-around
      background: ETERNAL.colours.darkest-grey
      opacity: 0.95
      padding: 30px
      text-align: center
      border-radius: 10px
      font-family: 'Stalinist One', cursive
      color: ETERNAL.colours.yellow

      +media-breakpoint-up(md)
        min-width: 550px

      +media-breakpoint-up(lg)
        width: 50vw
        height: 50vh

      &--text
        font-size: 1em
        margin-bottom: 10px

        +media-breakpoint-up(md)
          font-size: 2em

      &--email
        font-size: 0.6em

        +media-breakpoint-up(md)
          font-size: 1.2em

</style>
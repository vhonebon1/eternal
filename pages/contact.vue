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
        div
          .contact__content--text For all enquiries:
          .contact__content--email 
            .contact__content--email__line eternalatpeoples
            .contact__content--email__line @gmail.com
    Nav
  
</template>

<style scoped lang='stylus'>
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .contact
    display: flex
    height: -webkit-fill-available

    +media-breakpoint-up(sm)
      height: 100vh

    &__content
      width: 100vw
      background-image: url('~assets/images/bang.jpg')
      background-repeat: repeat
      display: flex
      flex-direction: column
      justify-content space-around

      &--enquiry
        width: 80%
        height: calc(80% - 55px)
        margin: 0 auto
        display: flex
        flex-direction: column
        justify-content: space-around
        background: ETERNAL.colours.darkest-grey
        opacity: 0.95
        padding: 15px
        text-align: center
        border-radius: 10px
        font-family: 'Stalinist One', cursive
        color: ETERNAL.colours.yellow

        +media-breakpoint-up(lg)
          width: 50vw
          height: 50vh
          padding: 30px

      &--text
        font-size: 1.2em
        line-height: 1.3em
        margin-bottom: 20px

        +media-breakpoint-up(md)
          font-size: 2em

      &--email
        font-size: 0.7em
        line-height: 0.9em

        +media-breakpoint-up(md)
          font-size: 1.2em

        &__line
          margin-bottom: 10px

</style>
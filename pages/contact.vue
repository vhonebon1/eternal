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
      .contact__content--email For all enquiries: eternal@peoples.com
    Nav
  
</template>

<style scoped lang='stylus'>
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .contact
    height: 100vh
    background-image: url('~assets/images/bang.jpg')
    display: flex
    flex-direction: column
    justify-content: space-around

    &__content
      width: 50vw
      height: 50vh
      margin: 0 auto
      display: flex
      flex-direction: column
      justify-content: space-around
      background: ETERNAL.colours.darkest-grey
      opacity: 0.92
      padding: 30px
      text-align: center
      border-radius: 10px

      &--email
        font-size: 2em
        font-family: 'Stalinist One', cursive
        color: ETERNAL.colours.yellow

</style>
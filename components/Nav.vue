<script>

export default {
  name: 'Nav',
  data () {
    return {
      windowWidth: 0
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })  
  },
  computed: {
    buttonText() {
      return this.windowWidth < 600 ? 'Submit' : 'Submit photos'
    }
  }
}
</script>

<template lang="pug">
  .nav
    .nav__buttons
      nuxt-link.nav__buttons--button(to='/photos') Home
      nuxt-link.nav__buttons--button(to='/submit') {{ buttonText }}
      nuxt-link.nav__buttons--button(to='/contact') Contact

</template>

<style scoped lang="stylus">
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .nav
    position: fixed
    bottom: 0 
    left: 0
    height: 55px
    width: 100vw
    display: flex
    justify-content: space-around
    background-color: rgba(149,249,68,0.6)
    font-family: 'Stalinist One', cursive

    +media-breakpoint-up(md)
      justify-content: flex-end

    &__buttons
      display: flex

      &--button
        position: relative
        background-color: ETERNAL.colours.acid-green
        border: 2px solid ETERNAL.colours.acid-green
        border-radius: 6.25rem
        height: 2rem
        line-height: 1.8rem
        font-weight: 400
        padding: 0 0.5rem
        min-width: 60px
        color: ETERNAL.colours.darkest-grey
        margin: 12px
        display: inline-block
        transition: .2s
        text-align: center
        outline: none
        cursor: pointer
        text-decoration: none
        opacity: 1
        font-size: 0.55em

        +media-breakpoint-up(md)
          height: 2.5rem
          line-height: 2.3rem
          min-width: 105px
          margin: 8px
          font-size: 1em
          padding: 0 1.7rem

</style>
<script>

export default {
  name: 'Nav'
}
</script>

<template lang="pug">
  .nav
    .nav__buttons
      nuxt-link.button(to='/photos') Home
      nuxt-link.button(to='/upload') Upload photos
      nuxt-link.button(to='/contact') Contact

</template>

<style scoped lang="stylus">
@import './../assets/styles/*'

  .nav
    position: fixed
    bottom: 0 
    left: 0
    height: 55px
    width: 100vw
    display: flex
    justify-content: flex-end
    background-color: rgba(149,249,68,0.6)

    .button
      position: relative
      background-color: ETERNAL.colours.acid-green
      border: 2px solid ETERNAL.colours.acid-green
      border-radius: 6.25rem
      height: 2.5rem
      line-height: 2.3rem
      font-weight: 400
      padding: 0 1.7rem
      min-width: 105px
      color: ETERNAL.colours.darkest-grey
      margin: 8px
      display: inline-block
      transition: .2s
      text-align: center
      outline: none
      cursor: pointer
      text-decoration: none
      opacity: 1

</style>
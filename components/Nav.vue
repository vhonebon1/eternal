<script>
export default {
  name: 'Nav'
}
</script>

<template lang='pug'>
    h1 yo

</template>

<style lang='stylus'>
  .navthing
    position: fixed
    bottom: 0
    left: 0
    width: 100vw
    height: 30px
    background: white

    .button
      display: block
      position: relative
      background-color: blue
      border: 2px solid blue
      border-radius: rem-calc(100px)
      height: rem-calc(40px)
      min-width: 105px
      color: white
      margin: 0
      display: inline-block
      transition: 0.2s
      text-align: center
      outline: none
      cursor pointer
      text-decoration none

</style>
<script>
export default {
  name: 'PhotoContainer'
}
</script>

<template lang="pug">
  .photo-container
    img.photo-container__top(:src='require(`@/assets/images/grey-top.png`)')
    .photo-container__body
      .photo-container__inner
        .photo-container__inner--left
        .photo-container__inner--right
          img(:src='require(`@/assets/images/bang.jpg`)')

</template>

<style scoped lang="stylus">
@import './../assets/styles/*'

.photo-container
  background: ETERNAL.colours.darkest-grey
  padding: 30px

  &__body
    height: 800px
    margin: auto
    background: ETERNAL.colours.darker-grey

  &__top
    display: block
    width: 105.5%

  &__inner
    display: flex
    justify-content: space-between

    &--left
      flex: 0 0 30%

    &--right
      flex: 0 0 70%

      img 
        margin: 0

</style>
<script>
export default {
  name: 'Overlay'
}
</script>

<template lang="pug">
  .overlay
    .overlay__image--desktop
      img.overlay__image--additional(src="~/assets/images/top.png")
      nuxt-link(to='/photos')
        img.overlay__image--main(src="~/assets/images/eternal-desktop.png")
      img.overlay__image--additional(src="~/assets/images/bottom.png")
    .overlay__image--mobile
      img.overlay__image--spacer(src="~/assets/images/top.png")
      nuxt-link(to='/photos')
        img.overlay__image--main(src="~/assets/images/eternal-mobile.png")
    img.overlay__image--spacer(src="~/assets/images/spacer.png")
</template>

<style scoped lang="stylus">
@import './../assets/styles/*'

.overlay
  z-index: 1

  &__image
    position: relative

    &--desktop
      display: none 

      +media-breakpoint-up(lg)
        display: block

    &--mobile
      display: block 

      +media-breakpoint-up(lg)
        display: none

    &--spacer
      height: auto
      display: block

      +media-breakpoint-up(md)
        min-height: 100px

    &--main
      &:hover
        cursor: pointer
  img
    width: 100%
    display: block

</style>

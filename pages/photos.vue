<script>
import PhotoContainer from './../components/PhotoContainer'
import Nav from './../components/Nav'

export default {
  name: 'photos',
  components: {
    PhotoContainer,
    Nav
  },
  data () {
    return {
      showNav: false,
      scrollPosition: 0
    }
  },
  mounted () {
    var isScrolling
    window.addEventListener('scroll', () => {
      this.handleScroll()

      isScrolling = setTimeout(() => {
        this.handleStopScroll()
      }, 300)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {  
      this.showNav = true
    },
    handleStopScroll () {
      this.showNav = false
    }
  }
}
</script>

<template lang='pug'>
  .photos
    photo-container
    Nav(v-if='this.showNav')

</template>
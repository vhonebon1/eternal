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
      showNav: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {  
      this.showNav = true
    }
  }
}
</script>

<template lang='pug'>
  .photos
    photo-container
    Nav(v-if='this.showNav')

</template>
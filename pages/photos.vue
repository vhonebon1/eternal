<script>
import PhotoContainer from './../components/PhotoContainer'
import Nav from './../components/Nav'

var AWS = require('aws-sdk')

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

    AWS.config.update(this.config)

    let that = this

    this.s3.listObjects(this.params, function (err, data) {
      if (err) throw err
      const imagePaths = data.Contents.map(image => that.buildUrl(image.Key)).reverse()
      that.$store.commit('add', imagePaths)
    })
    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {  
      this.showNav = true
    },
    buildUrl (key) {
      return `https://${process.env.AWS_BUCKET_VH}.s3.${process.env.AWS_REGION_VH}.amazonaws.com/${key}`
    }
  },
  computed: {
    s3 () {
      return new AWS.S3()
    },
    config () {
      return {
        accessKeyId: `${process.env.AWS_ACCESS_KEY_ID_VH}`, 
        secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY_VH}`, 
        region: `${process.env.AWS_REGION_VH}`
      }
    },
    params () {
      return {
        Bucket: `${process.env.AWS_BUCKET_VH}`,
        Delimiter: '/',
      }
    }
  }
}
</script>

<template lang='pug'>
  .photos
    photo-container
    Nav(v-if='this.showNav')

</template>
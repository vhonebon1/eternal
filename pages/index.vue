<script>
import Overlay from './../components/Overlay'

var AWS = require('aws-sdk')

export default {
  components: {
    Overlay
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
  },
  methods: {
    buildUrl (key) {
      return `https://${process.env.AWS_BUCKET_VH}.s3.${process.env.AWS_REGION_VH}.amazonaws.com/${key}`
    }
  },
  mounted () {
    AWS.config.update(this.config)

    let that = this

    this.s3.listObjects(this.params, function (err, data) {
      if (err) throw err
      const imagePaths = data.Contents.map(image => that.buildUrl(image.Key)).reverse()
      that.$store.commit('add', imagePaths)
    })
  }
}
</script>

<template lang='pug'>
  overlay
</template>
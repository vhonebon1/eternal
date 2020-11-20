<script>
import Overlay from './../components/Overlay'

export default {
  components: {
    Overlay
  },
  mounted () {
    var AWS = require('aws-sdk')
    AWS.config.update({
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID_VH}`, 
      secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY_VH}`, 
      region: `${process.env.AWS_REGION_VH}`
    })

    var s3 = new AWS.S3()

    var params = { 
      Bucket: `${process.env.AWS_BUCKET_VH}`,
      Delimiter: '/',
    }

    let that = this

    s3.listObjects(params, function (err, data) {
      if (err) throw err
      const imagePaths = data.Contents.map(image => `https://${process.env.AWS_BUCKET_VH}.s3.${process.env.AWS_REGION_VH}.amazonaws.com/${image.Key}`)
      that.$store.commit('add', imagePaths)
    })
  }
}
</script>

<template lang='pug'>
  overlay
</template>
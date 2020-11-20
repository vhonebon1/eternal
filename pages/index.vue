<script>
import Overlay from './../components/Overlay'

export default {
  components: {
    Overlay
  },
  mounted () {
    var AWS = require('aws-sdk')
    AWS.config.update({
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`, 
      secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`, 
      region: `${process.env.AWS_REGION}`
    })

    var s3 = new AWS.S3()

    var params = { 
      Bucket: `${process.env.AWS_BUCKET}`,
      Delimiter: '/',
    }

    let that = this

    s3.listObjects(params, function (err, data) {
      if (err) throw err
      console.log(data)
    })
  }
}
</script>

<template lang='pug'>
  overlay
</template>
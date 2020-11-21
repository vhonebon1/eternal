
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import S3 from 'aws-s3'
 
export default {
  components: {
    Dropzone
  },
  methods: {
    uploadFile(fieldName, files) {
      let file = files[0]
      this.S3Client
        .uploadFile(file, this.newFileName)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
  },
  computed:{
    config () {
      return {
        bucketName: `${process.env.AWS_BUCKET_VH}`,
        region: `${process.env.AWS_REGION_VH}`,
        accessKeyId: `${process.env.AWS_ACCESS_KEY_ID_VH}`,
        secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY_VH}`,
        s3Url: 'https://eternal-peoples.s3.eu-west-2.amazonaws.com'
      }
    },
    S3Client () {
      return new S3(this.config)
    },
    newFileName () {
      return Math.random().toString().slice(2)
    }
  }
}
</script>

<template lang="pug">
  input(type='file' @change='uploadFile("image", $event.target.files)')
</template>
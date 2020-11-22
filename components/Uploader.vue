
<script>
import S3 from 'aws-s3'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
 
export default {
  name: 'Uploader',
  data () {
    return {
      showSuccess: false,
      isLoading: false
    }
  },
  components: {
    FadeLoader
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
      return `pending/${Math.random().toString().slice(2)}`
    }
  },
  methods: {
    uploadFile(fieldName, files) {
      this.isLoading = true
      let file = files[0]
      this.S3Client
        .uploadFile(file, this.newFileName)
        .then(data => this.handleSuccess())
        .catch(err => console.error(err))
    },
    handleSuccess () {
      this.showSuccess = true
      this.isLoading = false
      setTimeout(() => this.showSuccess = false, 3000)
    }
  }
}
</script>

<template lang="pug">
  .uploader
    .uploader__title
      h1 Submit an Eternal photo
      h3(v-if='!showSuccess && !isLoading') Your photo will be uploaded to the site once it has been approved
    .uploader__spinner(v-if='isLoading')
      FadeLoader
    input(v-if='!showSuccess && !isLoading' type='file' multiple="multiple" @change='uploadFile("image", $event.target.files)')
    .uploader__success(v-if='showSuccess') Thanks! Your photo has been sent to the moderator :)
</template>

<style scoped lang='stylus'>
@import './../assets/styles/*'
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap')

  .uploader
    align-items: center
    color: ETERNAL.colours.yellow
    font-family: 'Stalinist One', cursive

    &__title
      margin-bottom: 20px

    &__success
      width: 50%
      margin: 20px auto

    &__spinner
      display: block
      height: 20px
      width: 20px
      margin: 0 auto

</style>
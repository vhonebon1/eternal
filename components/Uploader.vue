<script>
import axios from 'axios'

export default {
  name: 'Uploader',
  data() {
    return {
      file: ''
    }
  },
  methods: {
    submitFile () {
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/single-file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<template lang='pug'>
  .uploader HEY
    <input type="file" id="file" ref="file" v-on:change="onFileChange()"/>

</template>

<style lang='stylus'>
@import './../assets/styles/*'

</style>
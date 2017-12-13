<template>
<div>Hello world</div>
</template>

<script>
  import auth from '../auth'
  import ssosetup from '../auth/openIdConnect'

  export default {

   beforeCreate: function () {
      console.log("Login is not mounted yet :Nand!");
      ssosetup();
    },
    mounted() {
      console.log("Login component mounted") // I'm text inside the component.
    },
     data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        // We need to pass the component's this context
        // to properly make use of http in the auth service
         auth.login(this, credentials, 'secretquote')
        // look for call back on this. see for life cycle hooks
      }
    }

  }
</script>




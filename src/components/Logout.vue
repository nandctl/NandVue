<template>
  <p>I'm text inside the logout routers component.</p>
</template>

<script>
  export default {

    beforeMount() {
      console.log(`this.$el doesn't exist yet, but it will soon!`)
    } ,
    mounted() {
      console.log(this.$el.textContent) // I'm text inside the component.
    }
  }
</script>

<template>
    <ViewApp></ViewApp>
</template>

<script>
import ViewApp from '@/Views/ViewApp.vue';
export default {
  name: 'App',
  components: {
    ViewApp
  }
}
</script>

<style lang="scss">
* {
  padding: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>

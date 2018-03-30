<template>
  <div id="app" @click="hideSelect">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    hideSelect () {
      $('.user_info_dropdown').css('display', 'none')
      $('.nav_msg_dropdown').css('display', 'none')
    }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: left;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
#app {
    overflow-y: auto;
}
</style>

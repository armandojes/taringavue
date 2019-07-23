<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
  import headerApp from './components/Header'

  export default {
      components: {headerApp},
      data(){
        return {
          data: 'armando de jesus'
        }
      }
  }
</script>

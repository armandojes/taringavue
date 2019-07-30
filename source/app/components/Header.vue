<template lang="html">
  <header class="header">
    <container>
      <div class="header_int">
        <router-link to="/" class="logo">
          Taringa vue
        </router-link>
        <div class="menu_container">
          <router-link class="link" to="/">Shouts</router-link>
          <router-link class="link" to="/posts">Posts</router-link>
        </div>
      </div>
    </container>
  </header>
</template>

<style lang="css" scoped>
  .header{
    background: #fff;
    box-shadow: 5px 0px 10px gray;
  }
  .header_int{
    display: flex;
    align-items: center;
    height: 40px;
  }
  .logo{
    color: #00abff;
    font-size: 1.8em;
    text-align: center;
    text-decoration: none;
  }
  .menu_container{
    margin-left: 20px;
    display: flex;
  }
  .link{
    margin-left: 10px;
    display: block;
    color: #00abff;
    text-decoration: none;
    border: 1px solid #00abff;
    padding: 2px 8px;
    border-radius: 5px;
  }
  .link:first-of-type{
    margin-right: 0px;
  }
</style>

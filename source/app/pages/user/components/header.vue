<template lang="html">
  <container>
    <div class="content" :style="computedBackground">
      <div class="content_primary" >
        <img class="picture" :src="avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN5-8VbO_nDDSPdMRrqBxKwnYKRj0Lm8Qd-PyuuCf9XgRIUzM'" alt="">
        <div class="data">
          <h2 class="name" >{{fullname}}</h2>
          <h3>@{{username}}</h3>
          <h3>mexico</h3>
        </div>
      </div>
      <div class="menu">
        <router-link class="link" :to="`/user/${username}`">posts</router-link>
        <router-link class="link" :to="`/user/${username}/comments`">comentarios</router-link>
      </div>
    </div>

  </container>
</template>

<script>
export default {
  name: 'HeaderUser',
  props: ['username', 'avatar', 'background', 'lastname', 'firstname'],
  computed: {
    computedBackground (){
      return this.background
      ? {backgroundImage: `url(${this.background})`}
      //? `background: '${this.background}'`
      : '';
    },
    fullname (){
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>

<style lang="css" scoped>
  .content{
    background: #fff;
    border-radius: 5px;
    padding: 20px 0px;
    background-position: center;
    background-size: cover;
  }
  .content_primary{
    display: flex;
    justify-content: center;
  }
  .picture{
    width: 100px;
  }
  .name{
    font-size: 1.5em;
    font-weight: bold;
  }
  .data{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5%;
  }
  .menu{
    padding-left: 10px;
  }
  .link{
    color: #000;
    text-shadow: 0px 0px 5px #fff;
  }
</style>

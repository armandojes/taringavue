<template lang="html">
  <div class="item">
    <div class="header">
      <img :src="avatar" class="avatar">
      <span class="name">{{username}}</span>
    </div>
    <img :src="picture" alt="" class="picture">
    <div class="bottom">
      {{created}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shout',
  props:['picture', 'username', 'avatar', 'created'],

}
</script>

<style lang="css" scoped>
  .item{
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #fff;
  }
  .picture{
    display: block;
    margin: 10px auto;
  }
  .header{
    display: flex;
    align-items: center;
  }
  .avatar{
    width: 30px;
    margin-right: 10px;
  }
  .bottom{
    font-size: .9em;
    color: gray;
  }
</style>

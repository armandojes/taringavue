<template lang="html">
  <item-wrapper>
      <router-link :to="'/post/' + id" class="content">
        <img  class="picture" :src="url_image">
        <div class="title">
          {{title}}
        </div>
      </router-link>
  </item-wrapper>
</template>

<script>
import ItemWrapper from './ItemWrapper'
export default {
  props: ['title', 'summary', 'id'],
  name: 'Item',
  components: {ItemWrapper},
  computed: {
    url_image(){
      return this.summary.images.amount
      ? this.summary.images.slice[0].url
      : 'https://www.taringa.net/article_background.svg';
    }
  }
}
</script>

<style lang="css" scoped>
  .content{
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    display: block;
    color: #000;
    text-decoration: none;
  }
  .content{
    height: 100%;
    box-sizing: border-box;
  }
  .picture{
    display: block;
    margin: auto;
    min-height: 200px;
  }
  .title{
    text-align: center;
    padding: 15px 0px;
  }
  @media screen and (max-width:100px) {
    .picture{
      min-height: 150px;
    }
  }
  @media screen and (max-width:700px) {
    .picture{
      min-height: 100px;
    }
  }
</style>

<template lang="html">
  <div name="page">
    <loading-page v-if="loading"></loading-page>
    <container v-if="!loading && this.data">
      <div class="content">
        <div class="title">
          {{data.title}}
        </div>
        <div class="body" v-html="body"></div>
        <div class="autor">
          by <router-link :to="`/user/${data.owner.username}`">{{data.owner.username}}</router-link>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import api from '../../api';
import {Converter} from 'showdown';

const converter = new Converter();

export default {
  name: 'post',
  data () {
    return {
      loading: false,
      data: null,
    }
  },
  methods:{
  },
  computed: {
    body (){
      if (this.loading === false){
        const content = this.data.content.map( item => {
          if (item.type === 'markdown') return converter.makeHtml(item.body);
          if (item.type === 'html') return item.body;
          return `<img src="${item.url}" style="margin: 10px 0px" />`;
        })
        return content.join(' ');
      }
      return '';
    }
  },
  async mounted (){
    this.loading = true;
    const response = await api.post.get_single(this.$route.params.id);
    this.data = response;
    this.loading = false;
  }
}
</script>

<style lang="css" scoped>
  .content{
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    max-width: 800px;
    margin: auto;
  }
  .title{
    border-bottom: 2px solid #cdcdcd;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .body img{
    margin: 10px auto;
    display: block;
  }
  .autor{
    border-top: 1px solid #cdcdcd;
    padding-top: 10px;
    margin-top: 10px;
  }
</style>

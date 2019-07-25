<template lang="html">
  <div name="page">
    <loading-page v-if="loading"></loading-page>
    <container v-if="!loading && this.data">
      <div class="content">
        <div class="title">
          {{data.title}}
        </div>
        <div class="body" v-html="body"></div>
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
    convert () {

    }
  },
  computed: {
    body (){
      if (this.loading === false){
        console.log(this.data.content)
        const content = this.data.content.map( item => {
          return item.type === "markdown"
          ? converter.makeHtml(item.body)
          : `<img src="${item.url}" style="margin: 10px 0px" />`
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
</style>

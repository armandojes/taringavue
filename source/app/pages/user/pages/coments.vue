<template lang="html">
  <container>
    <div class="content">
      <div class="comments_container" v-if="comments">
        <div class="comment"
          v-for="comment in comments">
          <div  v-html="comment.body"></div>
          <div class="meta" >creado: {{comment.created}}</div>
        </div>
      </div>
      <div class="loading" v-if="loading">Cargando comentarios...</div>
    </div>
  </container>
</template>

<script>
import api from '../../../api'


export default {
  name: 'ComentUser',
  data (){
    return {
      comments: null,
      loading: false,
    }
  },
  methods: {
    async load_comments () {
      this.loading  = true;
      const response = await api.user.get_comments(this.$route.params.username);
      this.comments = response.items;
      this.loading = false;
    }
  },
  mounted (){
    this.load_comments();
  }
}

</script>

<style lang="css" scoped>

  .comments_container{
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .loading{
    background: #fff;
    border-radius: 5px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .comment{
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    min-width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .meta{
    color: gray;
    font-size: .9em;
    margin-top: 10px;
  }
</style>

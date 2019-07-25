<template lang="html">
  <div>
    <Loading-page v-if="loading && !items.length"></Loading-page>
    <container v-if="items.length">
      <div class="content">
        <item v-for="item in items" v-bind="item"></item>
      </div>
      <loading-after v-if="loading"></loading-after>
    </container>
  </div>
</template>

<script>
import api from '../../api'
import Item from '../../components/item'

export default {
  name: 'Posts',
  components: {Item},
  data () {
    return {
      items: [],
      page: 0,
      loading: false,
    }
  },

  methods: {
    async load_posts(){
      this.loading = true;
      const posts = await api.post.get_list(this.page + 1);
      this.items = this.items.concat(posts.items);
      this.page = this.page + 1;
      this.loading = false;
    },
    handleScroll (){
      console.log('scroled');

      if(this.loading) return null;

      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      if( (scrolled + viewportHeight + 10) < fullHeight) return null;
      this.load_posts();
    }
  },
  mounted () {
    this.load_posts();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="css" scoped>
  .content{
    display: flex;
    flex-wrap: wrap;
  }
</style>

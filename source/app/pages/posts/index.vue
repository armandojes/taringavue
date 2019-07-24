<template lang="html">
  <div>
    <Loading-page v-if="loading"></Loading-page>
    <container v-if="items.length">
      <div class="content">
        <item v-for="item in items" v-bind="item"></item>
      </div>
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
    }
  },
  mounted () {
    this.load_posts();
  }
}
</script>

<style lang="css" scoped>
  .content{
    display: flex;
    flex-wrap: wrap;
  }
</style>

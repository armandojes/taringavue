<template lang="html">
  <div class="">
    <Loading-page v-if="loading && !items.length" />
    <container v-if="items.length">
      <div class="list_content">
        <shout
          v-for="shout in items"
          :picture="shout.summary.images.slice[0].url"
          :username="shout.owner.username"
          :avatar="shout.owner.avatar"
          :created="shout.created"
        />
      </div>
      <loading-after v-if="loading"/>
    </container>
  </div>
</template>

<script>
import Shout from './components/item'
import api from '../../api'

export default {
  components: {Shout,},
  name: 'shouts',
  data (){
    return {
      items: [],
      loading: false,
      page: 0,
    }
  },
  methods: {
    async load_shouts (){
      this.loading = true;
      const response = await api.shout.get_list(this.page + 1);
      this.items = this.items.concat(response.items);
      this.page = this.page + 1;
      this.loading = false;

    },
    handleScroll (){
      if(this.loading) return null;

      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      if( (scrolled + viewportHeight + 10) < fullHeight) return null;
      this.load_shouts();
    }
  },
  mounted (){
    window.addEventListener('scroll', this.handleScroll);
    this.load_shouts();
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="css" scoped>
  .list_content{
    max-width: 700px;
    margin: auto;
  }
</style>

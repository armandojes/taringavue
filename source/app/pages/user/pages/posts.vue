<template lang="html">
  <container>
    <div class="content">
      <div class="posts_container" v-if="data">
        <item v-for="item in data.items" v-bind="item"></item>
      </div>
      <div class="loading" v-if="loading">cargando posts...</div>
    </div>
  </container>
</template>

<script>
import api from '../../../api'
import Item from '../../../components/Item'

export default {
  components: {Item},
  name: 'PostUser',
  data (){
    return {
      data: null,
      loading: false,
    }
  },
  methods: {
    async load_data () {
      this.loading  = true;
      const response = await api.user.get_user_post(this.$route.params.username);
      this.data = response;
      this.loading = false;
    }
  },
  mounted (){
    this.load_data();
  }
}
</script>

<style lang="css" scoped>

  .posts_container{
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

</style>

<template lang="html">
  <div name="user" role="page">
    <loading-page v-if="loading && !data"></loading-page>
    <template v-if="data">
      <header-user
        :background="data.background"
        :lastname="data.lastname"
        :firstname="data.firstname"
        :avatar="data.avatar"
        :username="data.username">
      </header-user>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import api from '../../api';
import HeaderUser from './components/Header';

export default {
  components: {HeaderUser},
  data (){
    return {
      data: null,
      loading: false,
    }
  },
  methods: {
    async load_data () {
      this.loading  = true;
      const response = await api.user.get_single(this.$route.params.username);
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
</style>

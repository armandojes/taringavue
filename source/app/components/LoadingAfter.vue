<template lang="html">
  <div class="content">
    <img src="/public/images/icons/loader.gif" class="loader" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loadingafther'
}
</script>

<style lang="css" scoped>
  .content{
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader{
    width: 30px;
  }
</style>

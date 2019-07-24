<template lang="html">
  <container>
    <div class="content_">
      <img src="/public/images/icons/preloader.gif" />
    </div>
  </container>
</template>

<script>
export default {
  name: 'LoadingPage'
}
</script>

<style lang="css" scoped>
  .content_{
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

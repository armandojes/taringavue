<template lang="html">
  <div class="item_wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrappedItems'
}
</script>

<style lang="css" scoped>
  .item_wrapper{
    padding: 10px;
    box-sizing: border-box;
    width: 25%;
  }
  @media screen and (max-width:700px) {
    .item_wrapper{
      width: 33%;
    }
  }
  @media screen and (max-width:550px) {
    .item_wrapper{
      width: 50%;
      padding: 5px;
    }
  }
</style>

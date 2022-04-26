<template>
  <h2>购物车</h2>
  <app-docker :currentIndex="1"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'CartPage',
  components: {
    AppDocker
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <h2>订单</h2>
  <app-docker :currentIndex="1"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'OrderPage',
  components: {
    AppDocker
  }
}
</script>

<style lang="scss" scoped>

</style>

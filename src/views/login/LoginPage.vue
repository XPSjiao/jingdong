<template>
  <h2>登录</h2>
  <app-docker :currentIndex="1"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'LoginPage',
  components: {
    AppDocker
  }
}
</script>

<style lang="scss" scoped>

</style>

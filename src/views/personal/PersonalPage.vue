<template>
  <h2>我的</h2>
  <router-link to="login">
    <h2>登录</h2>
  </router-link>
  <app-docker :currentIndex="1"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'PersonalPage',
  components: {
    AppDocker
  }
}
</script>

<style lang="scss" scoped>

</style>

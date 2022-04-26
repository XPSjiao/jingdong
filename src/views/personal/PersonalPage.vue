<template>
  <h2>我的</h2>
  <app-docker :currentIndex="1"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'MyPage',
  components: {
    AppDocker
  }
}
</script>

<style lang="scss" scoped>

</style>

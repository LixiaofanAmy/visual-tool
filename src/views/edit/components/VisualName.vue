<template>
  <div class="visual-name">{{visualName}}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VisualName',
  computed: {
    ...mapState(['visualName'])
  }
}
</script>

<style scoped>
.visual-name {
  position: absolute;
  left: 0;
  height: 55px;
  padding: 0 20px;
  line-height: 55px;
  font-size: 16px;
}
</style>
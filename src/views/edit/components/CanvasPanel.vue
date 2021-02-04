<template>
  <div class="canvas-panel">
    <component-box v-for="(component, index) in components" :key="index" :component="component" :index="index"></component-box>
  </div>
</template>

<script>
import ComponentBox from './ComponentBox'
export default {
  name: 'CanvasPanel',
  components: {
    ComponentBox
  },
  computed: {
    components () {
      return this.$store.state.components
    }
  }
}
</script>

<style scoped>
</style>
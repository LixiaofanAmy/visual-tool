<template>
  <div class="z-index">
    <span
      v-for="component in components"
      :key="component.zIndex"
      @click="changeLayer(component)"
    >{{component.typeName}}</span>
  </div>
</template>

<script>
export default {
  name: 'LayerTool',
  computed: {
    components() {
      return this.$store.state.components
    }
  },
  methods: {
    changeLayer(component) {
      const index = this.components.indexOf(component)
      this.$store.commit('changeBoxActivated', index)
    }
  }
}
</script>

<style>
</style>
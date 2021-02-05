<template>
  <vue-drag-resize 
    class="red"
    :w="component.boxWidth" 
    :h="component.boxHeight" 
    :x="component.boxLeft" 
    :y="component.boxTop" 
    :isActive="component.active"
    :z="index"
    @activated="onActivated"
    @deactivated="onDeactivated"
    @resizing="onResizing"
    @dragging="onDragging"
    ></vue-drag-resize>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
export default {
  name: 'EditBox',
  props: ['component', 'index'],
  components: {
    VueDragResize
  },
  computed: {
    currentIndex () {
      return this.$store.state.currentIndex
    }
  },
  methods: {
    onActivated () {
      this.$store.commit('changeBoxActivated', this.index)
    },
    onDeactivated () {
      this.$store.commit('changeBoxDeactivated', this.index)
    },
    onResizing (newRect) {
      this.$store.commit('changeBoxWidth', newRect.width)
      this.$store.commit('changeBoxHeight', newRect.height)
    },
    onDragging (newRect) {
      this.$store.commit('changeBoxLeft', newRect.left)
      this.$store.commit('changeBoxTop', newRect.top)
    }
  }
}
</script>

<style scoped>
.red {
  background: red
}
</style>
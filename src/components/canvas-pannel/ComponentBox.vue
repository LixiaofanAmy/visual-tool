<template>
  <vue-drag-resize 
    :w="component.boxWidth" 
    :h="component.boxHeight" 
    :x="component.boxLeft" 
    :y="component.boxTop" 
    :isActive="component.active"
    :z="zIndex"
    :parentLimitation="true"
    @activated="onActivated"
    @deactivated="onDeactivated"
    @resizing="onResizing"
    @dragging="onDragging"
    >
    <slot></slot>
  </vue-drag-resize>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VueDragResize from 'vue-drag-resize'
export default {
  name: 'EditBox',
  props: ['component', 'index'],
  components: {
    VueDragResize
  },
  computed: {
    ...mapState(['components']),
    zIndex () {
      return this.components.length - this.index - 1
    }
  },
  methods: {
    ...mapMutations([
      'changeBoxActivated', 
      'changeBoxDeactivated', 
      'changeBoxWidth', 
      'changeBoxHeight', 
      'changeBoxLeft', 
      'changeBoxTop', 
      'changeTimeline'
    ]),
    onActivated () {
      this.changeBoxActivated(this.index)
    },
    onDeactivated () {
      this.changeBoxDeactivated(this.index)
    },
    onResizing (newRect) {
      this.changeBoxWidth(newRect.width)
      this.changeBoxHeight(newRect.height)
      this.changeTimeline()
    },
    onDragging (newRect) {
      this.changeBoxLeft(newRect.left)
      this.changeBoxTop(newRect.top)
      this.changeTimeline()
    }
  }
}
</script>

<style scoped>
</style>
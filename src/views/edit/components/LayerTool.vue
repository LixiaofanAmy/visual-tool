<template>
  <div class="z-index">
    <vuedraggable v-model="_components">
      <div
        v-for="(component, index) in _components"
        :key="index"
        @click="changeLayer(component)"
      >{{component.typeName}}</div>
    </vuedraggable>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import vuedraggable from 'vuedraggable'
export default {
  name: 'LayerTool',
  components: {
    vuedraggable
  },
  computed: {
    ...mapState(['components']),
    _components: {
      get() {
        return this.components
      },
      set(v) {
        this.changeComponents(v)
      }
    }
  },
  methods: {
    ...mapMutations(['changeComponents', 'changeBoxActivated']),
    changeLayer(component) {
      const index = this.components.indexOf(component)
      this.changeBoxActivated(index)
    }
  }
}
</script>

<style scoped>
</style>
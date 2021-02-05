<template>
  <div class="z-index">
    <vuedraggable v-model="components">
      <transition-group>
        <div
          v-for="component in components"
          :key="component.zIndex"
          @click="changeLayer(component)"
        >{{component.typeName}}</div>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";
export default {
  name: 'LayerTool',
  components: {
    vuedraggable
  },
  computed: {
    components: {
      get () {
        return this.$store.state.components
      },
      set (v) {
        this.$store.commit('changeComponents', v)
      }
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
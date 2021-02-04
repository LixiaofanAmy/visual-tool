<template>
  <div class="func-button">
    <a-button size="small" type="primary" @click="addComponent('basicHistogram')">添加基础柱状图</a-button>
    <a-button size="small" type="primary" @click="addComponent('basicBarChart')">添加基础柱状图</a-button>
    <a-button size="small" :disabled="current > 0 ? false : true" @click="revoke">撤销</a-button>
    <a-button size="small" :disabled="timeline.length - 1 > current ? false : true" @click="redo">重做</a-button>
  </div>
</template>

<script>
import charts from '@/components-libs/charts'
import { Button } from 'ant-design-vue'
export default {
  name: 'FuncButton',
  components: {
    AButton: Button,
  },
  computed: {
    components () {
      return this.$store.state.components
    },
    timeline () {
      return this.$store.state.timeline
    },
    current () {
      return this.$store.state.current
    }
  },
  methods: {
    addComponent (componentName) {
      this.$store.commit('addComponent', {...charts[componentName]})
    },
    revoke () {
      this.$store.commit('revoke')
    },
    redo () {
      this.$store.commit('redo')
    }
  }
}
</script>

<style scoped>
</style>
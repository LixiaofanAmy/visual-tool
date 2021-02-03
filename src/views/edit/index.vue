<template>
  <div class="edit">
    <a-button type="primary" @click="addComponent('basicHistogram')">添加基础柱状图</a-button>
    <a-button type="primary" @click="addComponent('basicBarChart')">添加基础柱状图</a-button>
    <a-button :disabled="current > 0 ? false : true" @click="revoke">撤销</a-button>
    <a-button :disabled="timeline.length - 1 > current ? false : true" @click="redo">重做</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import charts from '@/components-libs/charts'
export default {
  name: 'edit',
  components: {
    AButton: Button
  },
  computed: {
    timeline () {
      return this.$store.state.timeline
    },
    current () {
      return this.$store.state.current
    }
  },
  methods: {
    addComponent (componentName) {
      this.$store.commit('addComponent', charts[componentName])
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
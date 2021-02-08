<template>
  <div class="func-button">
    <a-space>
      <a-button size="small" :disabled="current > 0 ? false : true" @click="revoke">撤销</a-button>
      <a-button size="small" :disabled="timeline.length - 1 > current ? false : true" @click="redo">重做</a-button>
      <a-button size="small" type="primary" @click="addComponent('basicHistogram')">基础柱状图</a-button>
      <a-button size="small" type="primary" @click="addComponent('basicBarChart')">基础折线图</a-button>
    </a-space>
  </div>
</template>

<script>
import charts from '@/components-libs/charts'
import { Space, Button } from 'ant-design-vue'
export default {
  name: 'FuncButton',
  components: {
    ASpace: Space,
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
      this.$store.commit('addComponent', {...charts[componentName], id: Date.now()})
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
.func-button {
  text-align: center;
  line-height: 55px;
}
</style>
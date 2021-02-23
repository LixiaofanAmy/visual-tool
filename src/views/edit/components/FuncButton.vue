<template>
  <div class="func-button">
    <a-space>
      <a-button size="small" :disabled="current > 0 ? false : true" @click="revoke">撤销</a-button>
      <a-button
        size="small"
        :disabled="timeline.length - 1 > current ? false : true"
        @click="redo"
      >重做</a-button>
      <a-button size="small" type="primary" @click="_addComponent('basicHistogram')">基础柱状图</a-button>
      <a-button size="small" type="primary" @click="_addComponent('basicLineChart')">基础折线图</a-button>
      <a-button size="small" type="primary" @click="_addComponent('basicPieChart')">基础饼图</a-button>
    </a-space>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import charts from '@/components-libs/charts'
import { Space, Button } from 'ant-design-vue'
export default {
  name: 'FuncButton',
  components: {
    ASpace: Space,
    AButton: Button
  },
  computed: {
    ...mapState(['timeline', 'current'])
  },
  methods: {
    ...mapMutations(['addComponent', 'revoke', 'redo']),
    _addComponent(componentName) {
      this.addComponent({ ...charts[componentName], id: Date.now() })
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
<template>
  <div class="edit">
    <a-button type="primary" @click="addComponent('basicHistogram')">添加基础柱状图</a-button>
    <a-button type="primary" @click="addComponent('basicBarChart')">添加基础柱状图</a-button>
    <a-button :disabled="actions.length === 0 ? true : false" @click="revoke">撤销</a-button>
    <a-button :disabled="revokeActions.length === 0 ? true : false" @click="redo">重做</a-button>
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
    actions () {
      return this.$store.state.actions
    },
    revokeActions () {
      return this.$store.state.revokeActions
    }
  },
  methods: {
    addComponent (componentName) {
      this.$store.commit('saveAction', {name: 'addComponent', params: charts[componentName]})
      this.$store.commit('addComponent', charts[componentName])
    },
    revoke () {
      this.$store.commit('revokeAction')
    },
    redo () {
      this.$store.commit('redoAction')
    }
  }
}
</script>

<style scoped>
</style>
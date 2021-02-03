<template>
  <div class="edit">
    <a-button size="small" type="primary" @click="addComponent('basicHistogram')">添加基础柱状图</a-button>
    <a-button size="small" type="primary" @click="addComponent('basicBarChart')">添加基础柱状图</a-button>
    <a-button size="small" :disabled="current > 0 ? false : true" @click="revoke">撤销</a-button>
    <a-button size="small" :disabled="timeline.length - 1 > current ? false : true" @click="redo">重做</a-button>
    <a-input size="small" placeholder="宽" v-model="boxWidth" />
    <a-input size="small" placeholder="高" v-model="boxHeight" />
    <a-input size="small" placeholder="左" v-model="boxLeft" />
    <a-input size="small" placeholder="上" v-model="boxTop" />
    <edit-box :component="currentComponent"></edit-box>
  </div>
</template>

<script>
import { Button, Input } from 'ant-design-vue'
import charts from '@/components-libs/charts'
import EditBox from './components/EditBox'
export default {
  name: 'edit',
  components: {
    AButton: Button,
    AInput: Input,
    EditBox
  },
  computed: {
    timeline () {
      return this.$store.state.timeline
    },
    current () {
      return this.$store.state.current
    },
    currentComponent () {
      return this.$store.state.currentComponent
    },
    boxWidth: {
      get () {
        return this.$store.state.currentComponent.boxWidth
      },
      set (v) {
        this.$store.commit('changeBoxWidth', v)
      }
    }
  },
  data () {
    return {
      boxHeight: '',
      boxLeft: '',
      boxTop: ''
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
  },
  mounted () {
    this.$store.commit('changeCurrentComponent', charts['basicHistogram'])
  }
}
</script>

<style scoped>
</style>
<template>
  <div class="box-attributes">
    <a-input size="small" placeholder="宽" v-model="boxWidth" />
    <a-input size="small" placeholder="高" v-model="boxHeight" />
    <a-input size="small" placeholder="左" v-model="boxLeft" />
    <a-input size="small" placeholder="上" v-model="boxTop" />
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'
export default {
  name: 'BoxAttributes',
  components: {
    AInput: Input
  },
  computed: {
    boxWidth: {
      get () {
        return this.$store.state.currentComponent.boxWidth
      },
      set (v) {
        this.$store.commit('changeBoxWidth', v)
      }
    },
    boxHeight: {
      get () {
        return this.$store.state.currentComponent.boxHeight
      },
      set (v) {
        this.$store.commit('changeBoxHeight', v)
      }
    },
    boxLeft: {
      get () {
        return this.$store.state.currentComponent.boxLeft
      },
      set (v) {
        this.$store.commit('changeBoxLeft', v)
      }
    },
    boxTop: {
      get () {
        return this.$store.state.currentComponent.boxTop
      },
      set (v) {
        this.$store.commit('changeBoxTop', v)
      }
    }
  }
}
</script>

<style scoped>
</style>
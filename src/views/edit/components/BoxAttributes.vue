<template>
  <div class="box-attributes" @mousedown.stop>
    <div>位置大小</div>
    <a-input size="small" placeholder="宽" v-model.number="boxWidth" />
    <a-input size="small" placeholder="高" v-model.number="boxHeight" />
    <a-input size="small" placeholder="左" v-model.number="boxLeft" />
    <a-input size="small" placeholder="上" v-model.number="boxTop" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Input } from 'ant-design-vue'
export default {
  name: 'BoxAttributes',
  components: {
    AInput: Input
  },
  computed: {
    ...mapState(['currentIndex', 'components']),
    boxWidth: {
      get () {
        if (this.currentIndex !== -1) {
          return this.components[this.currentIndex].boxWidth
        } else {
          return ''
        }
      },
      set (v) {
        this.changeBoxWidth(v)
      }
    },
    boxHeight: {
      get () {
        if (this.currentIndex !== -1) {
          return this.components[this.currentIndex].boxHeight
        } else {
          return ''
        }
      },
      set (v) {
        this.changeBoxHeight(v)
      }
    },
    boxLeft: {
      get () {
        if (this.currentIndex !== -1) {
          return this.components[this.currentIndex].boxLeft
        } else {
          return ''
        }
      },
      set (v) {
        this.changeBoxLeft(v)
      }
    },
    boxTop: {
      get () {
        if (this.currentIndex !== -1) {
          return this.components[this.currentIndex].boxTop
        } else {
          return ''
        }
      },
      set (v) {
        this.changeBoxTop(v)
      }
    }
  },
  methods: {
    ...mapMutations(['changeBoxWidth', 'changeBoxHeight', 'changeBoxLeft', 'changeBoxTop'])
  }
}
</script>

<style scoped>
</style>
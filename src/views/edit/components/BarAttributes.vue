<template>
  <div class="bar-attributes" @mousedown.stop>
    <div>柱状图样式</div>
    <div>
      <div>柱间距</div>
      <a-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
      <a-input-number v-model="inputValue" :min="0" :max="1" :step="0.01" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Slider, InputNumber } from 'ant-design-vue'
export default {
  name: 'BarAttributes',
  components: {
    ASlider: Slider,
    AInputNumber: InputNumber
  },
  data () {
    return {
      inputValue: 0.5
    }
  },
  watch: {
    inputValue (v) {
      this.setSpacing(v)
      this.changeTimeline()
    }
  },
  methods: {
    ...mapMutations(['setSpacing', 'changeTimeline'])
  }
}
</script>

<style scoped>
</style>
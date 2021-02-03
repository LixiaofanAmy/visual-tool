<template>
  <div class="component-box" :style="componentStyle">
    组件
  </div>
</template>

<script>
export default {
  name: 'EditBox',
  props: ['component'],
  computed: {
    componentStyle () {
      return {
        width: this.component.boxWidth + 'px',
        height: this.component.boxHeight + 'px',
        left: this.component.boxLeft + 'px',
        top: this.component.boxTop + 'px'
      }
    }
  }
}
</script>

<style scoped>
.component-box {
  position: absolute;
  background: red;
}
</style>
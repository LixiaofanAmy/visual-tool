<template>
  <div class="edit">
    <func-button></func-button>
    <box-attributes></box-attributes>
    <canvas-panel></canvas-panel>
  </div>
</template>

<script>
import FuncButton from './components/FuncButton'
import BoxAttributes from './components/BoxAttributes'
import CanvasPanel from './components/CanvasPanel'
export default {
  name: 'edit',
  components: {
    FuncButton,
    BoxAttributes,
    CanvasPanel
  }
}
</script>

<style scoped>
</style>
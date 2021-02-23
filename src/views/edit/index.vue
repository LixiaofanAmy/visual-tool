<template>
  <layout-box>
    <template v-slot:editHeader>
      <visual-name></visual-name>
      <func-button></func-button>
    </template>
    <template v-slot:editContainerLeft>
      <layer-tool></layer-tool>
    </template>
    <template v-slot:editContainerMain>
      <canvas-body></canvas-body>
    </template>
    <template v-slot:editContainerRight>
      <box-attributes></box-attributes>
      <bar-attributes></bar-attributes>
    </template>
  </layout-box>
</template>

<script>
import LayoutBox from './components/LayoutBox'
import VisualName from './components/VisualName'
import FuncButton from './components/FuncButton'
import LayerTool from './components/LayerTool'
import CanvasBody from './components/CanvasBody'
import BoxAttributes from './components/BoxAttributes'
import BarAttributes from './components/BarAttributes'
export default {
  name: 'edit',
  components: {
    LayoutBox,
    VisualName,
    FuncButton,
    LayerTool,
    CanvasBody,
    BoxAttributes,
    BarAttributes
  }
}
</script>

<style scoped>
</style>
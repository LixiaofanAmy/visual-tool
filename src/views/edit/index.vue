<template>
  <div class="edit">
    <div class="edit-header">
      <func-button></func-button>
    </div>
    <div class="edit-container">
      <div class="edit-container-left">
        <layer-tool></layer-tool>
      </div>
      <div class="edit-container-main">
        <canvas-body></canvas-body>
      </div>
      <div class="edit-container-right">
        <box-attributes></box-attributes>
      </div>
    </div>
  </div>
</template>

<script>
import FuncButton from './components/FuncButton'
import BoxAttributes from './components/BoxAttributes'
import LayerTool from './components/LayerTool'
import CanvasBody from './components/CanvasBody'
export default {
  name: 'edit',
  components: {
    FuncButton,
    BoxAttributes,
    LayerTool,
    CanvasBody
  }
}
</script>

<style scoped>
.edit {
  width: 100%;
  height: 100%;
}
.edit-header {
  height: 55px;
  border-bottom: 1px solid #DEDEDE;
}
.edit-container {
  display: flex;
  height: calc(100% - 56px);
}
.edit-container-left {
  width: 199px;
  height: 100%;
  border-right: 1px solid #DEDEDE;
  overflow: auto;
}
.edit-container-main {
  width: calc(100% - 500px);
  height: 100%;
  overflow: auto;
}
.edit-container-right {
  width: 299px;
  height: 100%;
  border-left: 1px solid #DEDEDE;
  overflow: auto;
}
</style>
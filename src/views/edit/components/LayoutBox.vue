<template>
  <div class="edit">
    <div class="edit-header">
      <slot name="editHeader"></slot>
    </div>
    <div class="edit-container">
      <div class="edit-container-left">
        <slot name="editContainerLeft"></slot>
      </div>
      <div class="edit-container-main">
        <slot name="editContainerMain"></slot>
      </div>
      <div class="edit-container-right">
        <slot name="editContainerRight"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutBox'
}
</script>

<style scoped>
.edit {
  width: 100%;
  height: 100%;
}
.edit-header {
  position: relative;
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
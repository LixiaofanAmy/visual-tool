<template>
  <div class="edit">
    <func-button></func-button>
    <box-attributes></box-attributes>
    <component-box :component="currentComponent"></component-box>
  </div>
</template>

<script>
import charts from '@/components-libs/charts'
import FuncButton from './components/FuncButton'
import ComponentBox from './components/ComponentBox'
import BoxAttributes from './components/BoxAttributes'
export default {
  name: 'edit',
  components: {
    FuncButton,
    ComponentBox,
    BoxAttributes
  },
  computed: {
    currentComponent () {
      return this.$store.state.currentComponent
    }
  },
  mounted () {
    this.$store.commit('changeCurrentComponent', charts['basicHistogram'])
  }
}
</script>

<style scoped>
</style>
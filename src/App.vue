<template>
  <div id="app">
    <top-header />
    <pricing-banner></pricing-banner>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from './components/TopHeader.vue';
import PricingBanner from './components/PricingBanner.vue';

@Component({
  components: {
    TopHeader,
    PricingBanner,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('./assets/css/styles.css');

#app {
  font-family: 'Barlow', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

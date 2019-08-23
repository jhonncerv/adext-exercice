<template>
    <div class="card">
        <div class="card__header">asd</div>
        <div class="card__body">asd</div>
        <div class="card__footer">asd</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PricingCard extends Vue {
  @Prop() private info!: object;
}
</script>

<style lang="scss">
    
</style>
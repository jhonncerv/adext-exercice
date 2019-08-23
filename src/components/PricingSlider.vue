<template>
    <div class="slider">
        <VueTinySlider>
             <div>
                 Slider item #1
                 <pricing-card :info="1"></pricing-card>
                 <img src="../assets/img/phone.png" alt="">
                 </div>
            <div>Slider item #2</div>
            <div>Slider item #3</div>
            <div>Slider item #4</div>
            <div>Slider item #5</div>
            <div>Slider item #6</div>
        </VueTinySlider>
      
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PricingCard from './PricingCard.vue';
import VueTinySlider from 'vue-tiny-slider';

@Component({
    components : {
        PricingCard,
        VueTinySlider,
    },
})
export default class PricingSlider extends Vue {

}
</script>

<style lang="scss">
@import 'tiny-slider/src/tiny-slider.scss';
    .slider {
        min-height: 400px;

        &__slide {
            flex-basis: 25%;
        }
    }
</style>
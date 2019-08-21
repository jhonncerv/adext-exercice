<template>
    <div class="slider">
        <carousel centerMode :paginationEnabled="false" :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 3 Content
            </slide>
        </carousel>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingBanner extends Vue {}
</script>

<style lang="scss">
    .slider {
        min-height: 400px;
    }
    .VueCarousel {
        &-slide {
            background: #ffffff;
            min-height: 300px;
        }
    }
</style>
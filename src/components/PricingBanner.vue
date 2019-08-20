<template>
    <div class="banner">
        <div class="banner__video">
            <img class="banner__video__fondo" src="./../assets/img/phone.png" alt="video promotional">
            <div class="banner__video__play">
                <p class="banner__video__text">Watch Demo</p>
                <img class="banner__video__btn" src="./../assets/img/play_btn.svg" alt="play btn promotional">
            </div>
        </div>
        <div class="banner__details">
            <img class="banner__details__fondo" src="./../assets/img/ilustración-pricing.png" alt="video promotional">

        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingBanner extends Vue {}
</script>

<style lang="scss">
    .banner {
        &__video {
            background: #000000;
            height: 56px;
            overflow: hidden;
            position: relative;
            width: 100%;
            
            &__fondo {
                left: 50%;
                opacity: .42;
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &__play {
                align-items: center;
                display: flex;
                height: 100%;
                margin: 0 34px;
                justify-content: flex-end;
                position: relative;
            }

            &__text {
                color: #ffffff;
                font-weight: 600;
                margin: 0;
                margin-right: 8px;
                text-align: center;
                width: 124px;
            }

            &__btn {
                width: 42px;
            }
        }
    }
</style>
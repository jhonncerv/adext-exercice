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
            <div class="banner__details__wrap">
                <h2 class="banner__details__titulo">CHOOSE AN ADEXT AI PLAN</h2>  
                <h2 class="banner__details__titulo banner__details__titulo--blanco">THAT FITS YOUR GOALS</h2>
                <p class="banner__details__text">Don´t know which plan you should go for?</p>
                <p class="banner__details__text banner__details__text--blanco">You can try Adext AI for free selecting the FREE PLAN, plus you don’t need a credit card! The only thing you do need is to have a monthly ad spend that doesn’t go below $2,500 USD or exceeds $5,000 USD.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingBanner extends Vue {}
</script>

<style lang="scss">
    %fondo {
        left: 50%;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .banner {
        &__video {
            background: #000000;
            height: 56px;
            overflow: hidden;
            position: relative;
            width: 100%;
            
            &__fondo {
                @extend %fondo;
                opacity: .42;
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

        &__details {
            background: #151C24;
            height: 213px;
            overflow: hidden;
            position: relative;

            &__fondo {
                @extend %fondo;

                opacity: .39;
                width: 1984px;
            }

            &__wrap {
                margin: 0 24px;
                position: relative;
            }
            
            &__titulo {
                color: #6149FB;
                font: 400 20px Arial;
                line-height: 48px;
                margin: 0;

                &--blanco {
                    color: #ffffff;
                    margin-top: -24px;
                }
            }

            &__text {
                font-size: 15px;
                line-height: 22px;
                margin: 0;
                color: #6149FB;

                &--blanco {
                    color: #ffffff;
                }
            }
        }
    }
</style>
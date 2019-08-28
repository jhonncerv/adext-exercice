<template>
    <div class="banner">
        <img class="banner__fondo" src="./../assets/img/ilustración-pricing.png" alt="video promotional">
        <div class="banner__video">
            <img class="banner__video__fondo" src="./../assets/img/phone.png" alt="video promotional">
            <div class="banner__video__play">
                <p class="banner__video__text">Watch Demo</p>
                <img class="banner__video__btn" src="./../assets/img/play_btn.svg" alt="play btn promotional">
            </div>
        </div>
        <div class="banner__details">
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
        background: #151C24;
        position: relative;
        overflow: hidden;

        @media only screen and (min-width: 1024px) {
            display: flex;
            flex-flow: row-reverse;
            justify-content: flex-end;
            height: 274px;
            padding: 26px 100px;
            box-sizing: border-box;
        }

        &__video {
            background: #000000;
            height: 56px;
            overflow: hidden;
            position: relative;
            width: 100%;

            @media only screen and (min-width: 1024px) {
                border-radius: 50%;
                right: 0;
                min-width: 202px;
                height: 202px;
                max-width: 200px;
                flex: 1;
            }
            
            &__fondo {
                @extend %fondo;
                opacity: .42;

                @media only screen and (min-width: 1024px) {
                    width: auto;
                    height: 100%;
                }
            }

            &__play {
                align-items: center;
                display: flex;
                height: 100%;
                margin: 0 34px;
                justify-content: flex-end;
                position: relative;

                @media only screen and (min-width: 1024px) {
                    flex-flow: column-reverse;
                    justify-content: center;
                    margin: 10px 0 0;
                }
            }

            &__text {
                color: #ffffff;
                font-weight: 600;
                margin: 0;
                margin-right: 8px;
                text-align: center;
                width: 124px;

                @media only screen and (min-width: 1024px) {
                    margin: 9px 0 0;
                }
            }

            &__btn {
                width: 42px;

                @media only screen and (min-width: 1024px) {
                    width: 50px;
                }
            }
        }

        &__fondo {
            @extend %fondo;

            opacity: .39;
            width: 1984px;
        }

        &__details {
            height: 213px;

            @media only screen and (min-width: 1024px) {
                flex: 2;
                max-width: 70%;
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

                @media only screen and (min-width: 1024px) {
                    font-size: 35px;
                }

                &--blanco {
                    color: #ffffff;
                    margin-top: -24px;

                    @media only screen and (min-width: 1024px) {
                        margin: 0 0 15px;
                    }
                }
            }

            &__text {
                font-size: 15px;
                line-height: 22px;
                margin: 0;
                color: #6149FB;

                @media only screen and (min-width: 1024px) {
                    font-size: 16px;
                    margin-bottom: 9px;
                }

                &--blanco {
                    color: #ffffff;
                }
            }
        }
    }
</style>
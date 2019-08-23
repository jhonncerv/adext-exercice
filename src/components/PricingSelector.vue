<template>
    <div class="selector">
        <div class="selector__fondo">
            <h1 class="selector__titulo">CHOOSE A PLAN THAT FITS YOU</h1>
        </div>
        <div class="selector__radios">
            <div class="selector__radio">
                <input id="d-option_1" type="radio" name="discount" class="selector__input" value="montly">
                <label class="selector__label" for="d-option_1">Pay monthly</label>
            </div>
            <div class="selector__radio">
                <input id="d-option_2" type="radio" name="discount" class="selector__input" value="biannually" checked>
                <label class="selector__label" for="d-option_2">Pay biannually<br class="selector__br">15% OFF</label>
            </div>
            <div class="selector__radio">
                <input id="d-option_3" type="radio" name="discount" class="selector__input" value="annually">
                <label class="selector__label" for="d-option_3">Pay annually<br class="selector__br">25% OFF</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingSelector extends Vue {}
</script>

<style lang="scss">
    .selector {
        &__fondo {
            background: #ffffff;

            @media only screen and (min-width: 1024px) {
                background: none;
            }
        }

        &__titulo {
            color: #3B3B3B;
            font-size: 20px;
            font-family: Arial;
            font-weight: 400;
            margin: 0 41px;
            padding-top: 8px;

            @media only screen and (min-width: 1024px) {
                padding-top: 22px;
                padding-bottom: 26px;
                text-align: center;
            }
        }

        &__radios {
            display: flex;
            justify-content: space-between;
            padding: 20px 17px;

            @media only screen and (min-width: 1024px) {
                width: 600px;
                padding: 0;
                margin: 0 auto;
            }
        }

        &__radio {
            display: flex;
            padding-right: 5px;
        }

        &__input {
            margin: 0 8px 0 0;
            width: 10.5px;
        }
        
        &__label {
            color: #9496A2;
            font-size: 12px;
            font-family: Arial;
        }

        @media only screen and (min-width: 1024px) {
            &__br {
                display: none;
            }
        }
    }
</style>
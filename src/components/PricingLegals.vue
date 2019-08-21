<template>
    <div class="legals">
      <div class="legals__block">
        <img class="legals__icon" src="./../assets/img/Shape.png" alt="lock legalities">
        <h3 class="legals__title">Your Information is Safe</h3>
        <p class="legals__text">
          We will not sell or rent your personal contact information for any marketing purposes whatsoever.
        </p>
      </div>
      <div class="legals__block">
        <img class="legals__icon" src="./../assets/img/shield.svg" alt="shield legalities">
        <h3 class="legals__title">Secure Checkout</h3>
        <p class="legals__text">
          All information is encrypted and transmitted without risk using a Secure Sockets Layer protocol. You can trust us!
        </p>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingLegals extends Vue {}
</script>

<style lang="scss">
.legals {
  display: flex;
  margin: 0 26px;

  &__block {
    align-items: center;
    display: flex;
    flex: 1;
    flex-flow: column;

    &:first-child {
      margin-right: 30px;
    }
  }
  
  &__icon {
    width: 15px;
    margin: 0 0 10px;
  }

  &__title {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    margin: 0 0 6px;
    width: 100%;

    @media only screen and (min-width: 350px) {
      font-size: 14px;
    }
  }

  &__text {
    font-size: 9px;
    line-height: 12px;

    @media only screen and (min-width: 350px) {
      font-size: 10px;
    }
  }
}
</style>
<template>
    <div class="legals">
      <div class="legals__block">
        <div class="legals__icon">
          <img class="legals__img" src="./../assets/img/Shape.png" alt="lock legalities">
        </div>
        <div class="legals__wrapper">
          <h3 class="legals__title">Your Information is Safe</h3>
          <p class="legals__text">
            We will not sell or rent your personal contact information for any marketing purposes whatsoever.
          </p>
        </div>
      </div>
      <div class="legals__block">
        <div class="legals__icon">
          <img class="legals__img" src="./../assets/img/shield.svg" alt="shield legalities">
        </div>        
        <div class="legals__wrapper">
          <h3 class="legals__title">Secure Checkout</h3>
          <p class="legals__text">
            All information is encrypted and transmitted without risk using a Secure Sockets Layer protocol. You can trust us!
          </p>
        </div>
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
  padding: 0 26px;
  max-width: 605px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
      margin: 0 auto 16px;
  }

  @media only screen and (min-width: 1024px) {
      margin: 0 auto 16px;
  }

  &__block {
    align-items: center;
    display: flex;
    flex: 1;
    flex-flow: column;

    &:first-child {
      margin-right: 30px;
    }

    @media only screen and (min-width: 1024px) {
        flex-flow: row;
    }
  }
  
  &__icon {
    width: 15px;
    margin: 0 0 10px;
    display: flex;

    @media only screen and (min-width: 1024px) {
        background: #ffffff;
        padding: 10px 11px;
        border-radius: 50%;
        min-width: 21px;
        width: 21px;
        margin: 0 12px 0 0;
    }
  }

  &__img {
    width: 100%;
  }

  &__title {
    color: #3B3B3B;
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
    color: #5E6571;
    font-size: 9px;
    line-height: 12px;

    @media only screen and (min-width: 350px) {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &__wrapper {
      max-width: 225px;
      min-height: 73px;
    }
  }
}
</style>
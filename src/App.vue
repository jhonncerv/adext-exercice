<template>
  <div id="app">
    <top-header />
    <pricing-banner></pricing-banner>
    <pricing-selector></pricing-selector>
    <div class="legals">
      <div class="legals__block">
        <img class="legals__icon" src="./assets/img/Shape.png" alt="lock legalities">
        <h3 class="legals__title">Your Information is Safe</h3>
        <p class="legals__text">
          We will not sell or rent your personal contact information for any marketing purposes whatsoever.
        </p>
      </div>
      <div class="legals__block">
        <img class="legals__icon" src="./assets/img/shield.svg" alt="shield legalities">
        <h3 class="legals__title">Secure Checkout</h3>
        <p class="legals__text">
          All information is encrypted and transmitted without risk using a Secure Sockets Layer protocol. You can trust us!
        </p>
      </div>
    </div>
    <div class="quote">
      <div class="quote__wrap">
        <img class="quote__icon quote__icon--left" src="./assets/img/quotes-open.svg" alt="quotes open">
        <img class="quote__icon" src="./assets/img/quotes-close.svg" alt="quotes close">
        <div class="quote__box">
          <p class="quote__text">
            Adext is becoming very much like Google and Facebook in the sense that if you're not using their technology, then you're simply not as competitive.
          </p>
          <div class="quote__source">
            <p class="quote__person">Antonio Rallo<br>Co-Founder </p>
            <span class="quote__division"></span>
            <img class="quote__logo" src="./assets/img/KIO_Networks.svg" alt="kio networks logo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from './components/TopHeader.vue';
import PricingBanner from './components/PricingBanner.vue';
import PricingSelector from './components/PricingSelector.vue';

@Component({
  components: {
    TopHeader,
    PricingBanner,
    PricingSelector,
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

.quote {
  background: #ffffff;
  padding: 30px 0;

  &__wrap {
    background: #F9FBFF;
    border: 1px solid #6149FB;
    border-radius: 3px;
    margin: 0 18px;
    position: relative;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 40px;

    &--left {
      right: auto;
      left: 0;
      transform: translate(-50%, -50%);
    }
  }

  &__box {
    margin: 12px 39px;
  }

  &__text {
    color: #221C62;
    font-size: 14px;
    line-height: 23px;
    margin: 0
  }

  &__source {
    display: flex;
    align-items: center;
  }

  &__person {
    color: #221C62;
    font-size: 14px;
    line-height: 17px;    
  }

  &__division {
    background: #8D99AE;
    height: 35px;
    margin: 0 20px;
    width: 1px;
  }

  &__logo {
    width: 39px;
  }
}
</style>

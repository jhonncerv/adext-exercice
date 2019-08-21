<template>
    <div class="quote">
      <div class="quote__wrap">
        <img class="quote__icon quote__icon--left" src="./../assets/img/quotes-open.svg" alt="quotes open">
        <img class="quote__icon" src="./../assets/img/quotes-close.svg" alt="quotes close">
        <div class="quote__box">
          <p class="quote__text">
            Adext is becoming very much like Google and Facebook in the sense that if you're not using their technology, then you're simply not as competitive.
          </p>
          <div class="quote__source">
            <p class="quote__person">Antonio Rallo<br>Co-Founder </p>
            <span class="quote__division"></span>
            <img class="quote__logo" src="./../assets/img/KIO_Networks.svg" alt="kio networks logo">
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PricingQuote extends Vue {}
</script>

<style lang="scss">
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
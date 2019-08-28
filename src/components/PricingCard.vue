<template>
    <div class="card" :class="isActive && mobile ? 'card--active': ''">
        <div class="card__header" :class="extraClass">
            <div class="card__label" v-if="percent">
                <p class="card__label__percent">{{ percent }}</p>
                <p class="card__label__percent" v-if="percentDos">{{ percentDos }}</p>
            </div>
            <div class="card__header__wrap" :class="percent ? '':'card__header__wrap--space'">
                <h2 class="card__header__title">{{ title }}</h2>
                <p class="card__header__text">{{ textHeader }}</p>
                <div class="card__main">
                    <span class="card__main__dolar">$</span>
                    <h1 class="card__main__price">{{ header }}</h1>
                    <p class="card__main__currency">
                        USD<br>month
                    </p>
                </div>
                <p class="card__header__bottom">{{ headerBottom }}</p>
            </div>
        </div>
        <div class="accordion">
            <div class="accordion__hide" v-if="isActive || !mobile">
                <div class="card__body">
                    <div class="card__body__wrap" v-for="list in lists" :key="list.id">
                        <h4 class="card__body__title">{{ list.title }}</h4>
                        <ul class="card__body__list">
                            <template  v-for="element in list.elements">
                                <li :key="element" v-if="element" class="card__body__element">{{ element }}</li>
                                <li v-else :key="element" class="card__body__element card__body__element--nocheck">
                                    -
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="card__footer">
                    <a class="card__footer__button" :class="extraButtonClass" target="_blank" href="#">{{ buttonText }}</a>
                    <p class="card__footer__color">
                        {{ footerText}} <a class="card__footer__link" target="_blank" href="#">what's this?</a>
                    </p>
                    <p class="card__footer__text">
                        {{ footerSlogan }}
                    </p>
                </div>
            </div>
            <a class="accordion__btn" @click="isActive = !isActive" v-if="mobile">
                <span class="accordion__text">Details</span>
                <img src="./../assets/img/arrow.svg" alt="arrow down" class="accordion__img">
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PricingCard extends Vue {
    @Prop() private info!: any;

    private isActive = false;
    private mobile = window.innerWidth <= 700;

    get header() {
        return this.info.header;
    }

    get lists() {
        return this.info.lists;
    }

    get footerSlogan() {
        return this.info.footerSlogan;
    }

    get buttonText() {
        return this.info.buttonText;
    }

    get footerText() {
        return this.info.footerText;
    }

    get headerBottom() {
        return this.info.headerBottom;
    }

    get percent() {
        return this.info.percent;
    }

    get title() {
        return this.info.title;
    }

    get textHeader() {
        return this.info.textHeader;
    }

    get extraClass() {
        return this.info.extraClass;
    }

    get extraButtonClass() {
        return this.info.extraButtonClass;
    }

    get percentDos() {
        return this.info.percentDos;
    }

    public created() {
        addEventListener('resize', () => {
            this.mobile = window.innerWidth <= 700;
        });
    }
}
</script>

<style lang="scss">
    .card {
        background: #ffffff;
        border-radius: 5px;
        overflow: hidden;
        width: 250px;
        
        &--active {
            .card__header {
                background: #6149FB;

                .card__header__text,
                .card__header__title,
                .card__main__dolar,
                .card__main__price,
                .card__main__currency {
                    color: #ffffff;
                }

                .card__header__bottom {
                    color: #5EFF82;
                }
            }

            .card__body__list {
                list-style-image: url('../assets/img/check-active.svg');
            }
        }

        &__label {
            display: flex;

            &__percent {
                background: #3F2EA8;
                color: #ffffff;
                font-size: 14px;
                line-height: 17px;
                height: 19px;
                margin: 0 0 8px auto;
                text-align: center;
                padding: 3px;
                position: relative;
                width: 90px;

                &::before {
                    content: '';
                    border: 0 solid transparent;
                    border-top: 25px solid #3F2EA8;
                    border-left: 23px solid transparent;
                    height: 0;
                    position: absolute;
                    width: 0;
                    left: -23px;
                    top: 0;
                }

                & + .card__label__percent {
                    background: #FF922D;
                    margin-left: -5px;

                    &::before {
                        border-top-color: #FF922D;
                    }
                }
            }
        }
            
        &__main {
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;

            &__dolar {
                color: #3D4651;
                font-size: 30px;
                line-height: 36px;
                margin: 15px 5px 0 0;
            }

            &__price {
                color: #3D4651;
                font-size: 68px;
                line-height: 82px;
                font-weight: 400;
                margin: 0;
            }

            &__currency {
                color: #3D4651;
                font-size: 11px;
                line-height: 12px;
                margin: 25px 0 0;
            }
        }

        &__header {
            position: relative;

            &__wrap {
                margin: 0 auto;
                width: 190px;

                &--space {
                    margin-top: 33px;
                }
            }

            &__title {
                color: #3D4651;
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
                margin: 0;
            }

            &__text {
                color: #3D4651;
                font-size: 13px;
                line-height: 16px;
                margin: 0;
            }

            &__bottom {
                color: #624AFB;
                font-size: 14px;
                line-height: 17px;
                margin: 0;
                padding: 0 0 17px;
            }

            @media only screen and (min-width: 1024px) {
                &--purple {
                    background: #6149FB;

                    .card__header__text,
                    .card__header__title,
                    .card__main__dolar,
                    .card__main__price,
                    .card__main__currency {
                        color: #ffffff;
                    }

                    .card__header__bottom {
                        color: #5EFF82;
                    }
                }
            }

            &--bigWrap {
                .card__header__wrap {
                    width: 205px;
                }

                .card__main__dolar,
                .card__main__currency {
                    display: none;
                }

                .card__main__price {
                    font-size: 28px;
                }

                .card__header__bottom {
                    font-size: 12px;
                }
            }
        }
        
        &__body {
            border-top: 1px solid #C3CAD1;
            margin: 10px auto;
            padding: 10px 12px;
            width: 218px;

            &__title {
                color: #808891;
                font-size: 14px;
                font-weight: 400;
                margin: 0 0 14px;
            }

            &__list {
                list-style-image: url('../assets/img/check.svg');
                margin: 0 0 8px;
                padding: 0 0 0 23px;
            }

            &__element {
                color: #808891;
                font-size: 13px;
                line-height: 25px;
                padding: 0 0 0 5px;

                &--nocheck {
                    list-style: none;
                }
            }
        }

        &__footer {
            width: 205px;
            margin: 0 auto;

            &__button {
                background: #6149FB;
                border-radius: 5px;
                color: #ffffff;
                margin: 0 0 15px;
                display: block;
                line-height: 40.5px;
                text-align: center;
                text-decoration: none;
                font-size: 18px;
                text-transform: uppercase;

                @media only screen and (min-width: 1024px) {
                    &--disable {
                        background: #CFCFD7;
                    }
                }
            }

            &__color {
                color: #6149FB;
                margin: 0 0 20px;
                font-size: 14px;
            }

            &__link {
                color: #387CFF;
                font-size: 12px;
                line-height: 14px;
                margin: 0 0 0 5px;
            }

            &__text {
                font-size: 14px;
                margin: 0 0 39px;
            }
        }
    }

    .accordion {
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding: 13px 0;

        &__btn {
            display: flex;
            flex-flow: column;
            align-items: center;
            cursor: pointer;
        }

        &__text {
            color: #AEBACA;
            font-size: 14px;
            margin: 0 0 5px;
        }

        &__img {
            width: 28px;
        }
    }
</style>
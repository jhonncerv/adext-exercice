<template>
    <div class="slider">
        <VueTinySlider center :speed="400" :auto-width=true :controls=false :mouse-drag="true" :loop="false" gutter="20" :items="2" :responsive="responsive">
            <div><pricing-card :info="info[0]"></pricing-card></div>
            <div><pricing-card :info="info[1]"></pricing-card></div>
            <div><pricing-card :info="info[2]"></pricing-card></div>
        </VueTinySlider>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import PricingCard from './PricingCard.vue';
import VueTinySlider from 'vue-tiny-slider';

@Component({
    components : {
        PricingCard,
        VueTinySlider,
    },
})
export default class PricingSlider extends Vue {

    private info: any[] = [];
    private responsive = {
        768: {
            items: 3,
        },
        1024: {
            items: 3,
        },
    };
    private listOne: object = {
        id: 1,
        title: 'Ad Accounts',
        elements: [
            '1  Facebook Ad Account',
            '1  Google Ad Account',
            'Video Tutorial',
            null,
        ],
    };
    private listTwo: object = {
        id: 2,
        title: 'Support',
        elements: [
            null,
            null,
            'Email Support',
            null,
            null,
            null,
            null,
        ],
    };
    private listThree: object = {
        id: 3,
        title: 'Reporting',
        elements: [
            'Dashboard Reporting',
            'CSV Export',
        ],
    };
    private listFour: object = {
        id: 4,
        title: 'Ad Accounts',
        elements: [
            'Up to 5 Facebook Ad Accounts',
            'Up to 5 Google Ad Accounts',
            'Video Tutorial',
            null,
        ],
    };
    private listFive: object = {
        id: 5,
        title: 'Support',
        elements: [
            null,
            '24/5 Support',
            'Live Support',
            null,
            null,
            null,
            null,
        ],
    };
    private listSix: object = {
        id: 3,
        title: 'Reporting',
        elements: [
            'Dashboard Reporting',
            'Advanced Export',
        ],
    };
    private listSeven: object = {
        id: 4,
        title: 'Ad Accounts',
        elements: [
            'Flexible/Contact Us',
            'Platform Training ',
            'Live Demo',
            null,
        ],
    };
    private listEight: object = {
        id: 5,
        title: 'Support',
        elements: [
            'Personalized Onboarding ',
            '24/5 Support & Holiday',
            'Live Chat',
            'Phone',
            'Campaign Deployment Support',
            'Dedicated Support Team',
            'Performance Assessment ',
        ],
    };


    public created() {
        this.loadInfo();
    }

    private loadInfo(): void {
        this.info[0] = {
            percent: '15% OFF',
            extraClass: 'card__header--purple',
            title: 'ESSENTIAL',
            textHeader: 'Up to $2,500 monthly ad spend',
            header: '254',
            lists: [
                this.listOne,
                this.listTwo,
                this.listThree,
            ],
            footerSlogan: 'Enjoy all of Adext\'s potential',
            buttonText: 'GET STARTED',
            footerText: 'Explore AI only',
            headerBottom: 'Automate your performance',
        };
        this.info[1] = {
            percent: '15% OFF',
            percentDos: 'Most popular',
            title: 'PROFESSIONAL',
            textHeader: 'Up to $25,000 monthly ad spend ',
            header: '660',
            lists: [
                this.listFour,
                this.listFive,
                this.listThree,
            ],
            headerBottom: 'Performance power at scale',
            buttonText: 'START FREE TRY OUT',
            footerText: 'Explorer AI vs. No AI',
            footerSlogan: 'Try Adext vs your campaigns',
            extraButtonClass: 'card__footer__button--disable',
        };
        this.info[2] = {
            title: 'AGENCY / ENTERPRISE  ',
            textHeader: 'Flexible/Contact Us',
            header: 'Book Live Demo',
            extraClass: 'card__header--bigWrap',
            lists: [
                this.listSeven,
                this.listEight,
                this.listSix,
            ],
            headerBottom: 'Better performance, higher retention',
            buttonText: 'BOOK LIVE DEMO',
            footerText: 'Explorer AI vs. No AI ',
            footerSlogan: 'Try Adext vs your campaigns',
            extraButtonClass: 'card__footer__button--disable',
        };
    }
}
</script>

<style lang="scss">
@import 'tiny-slider/src/tiny-slider.scss';
    .slider {
        min-height: 400px;
        max-width: 842px;
        margin: 0 auto;
        margin-bottom: 21px;

        &__slide {
            flex-basis: 25%;
        }

        @media only screen and (min-width: 768px) {
            margin-bottom: 30px;
        }

        @media only screen and (min-width: 1024px) {
            margin-bottom: 50px;
        }
    }

</style>
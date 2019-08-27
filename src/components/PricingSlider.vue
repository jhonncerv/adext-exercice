<template>
    <div class="slider">
        <VueTinySlider :mouse-drag="true" :loop="false" gutter="20" :center=true :items="3">
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
    private listOne: Object = {
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

    public created() {
        this.loadInfo();
    }

    private loadInfo(): void {
        this.info[0] = {
            header: '200',
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
            header: '200',
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
        this.info[2] = {
            header: '200',
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
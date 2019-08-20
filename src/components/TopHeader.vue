<template>
    <header class="header">
        <img class="header__logo" alt="adext logo" src="../assets/img/Adext-logo-header.svg">
        
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TopHeader extends Vue {}
</script>

<style lang="scss">
    .header {
        background: #ffffff;

        &__logo {
            width: 100px;
        }
    }
</style>
<template>
    <header class="header">
        <img class="header__logo" alt="adext logo" src="./../assets/img/Adext-logo-header.svg">
        <div class="header__user">
            <img class="header__bell" src="./../assets/img/btn_notifications.svg" alt="notifications bell">
            <img class="header__profile-image" src="./../assets/img/profile_btn.svg" alt="user image">
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TopHeader extends Vue {}
</script>

<style lang="scss">
    .header {
        align-items: center;
        background: #ffffff;
        box-sizing: border-box;
        height: 35px;
        padding: 0 21px;
        display: flex;

        &__logo {
            width: 52px;
        }

        &__user {
            align-items: center;
            display: flex;
            flex: 1;
            justify-content: flex-end;
        }

        &__bell {
            margin-right: 23px;
            width: 13px;
        }

        &__profile-image {
            margin-right: 3px;
            width: 25px;
        }
    }
</style>
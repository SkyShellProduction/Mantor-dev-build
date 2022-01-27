<template>
    <div
        class="main-bg"
       :style="[
            `background: url(${mantorImg}) no-repeat center/70%, radial-gradient(112.93% 112.93% at 50% 106.72%, #2E4151 0%, #010007 100%)`,
        ]"
    >
        <img
            v-if="show"
            src="@/assets/images/partner/lines.svg"
            alt=""
            class="main-bg__abs"
        />
        <slot />
    </div>
</template>
<script>
export default {
     data () {
        return {
            mantorImg: require("@/assets/images/home/main-bg.png"),
        };
    },
    name: 'Background',
    props: {
        show: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="scss">
.main-bg {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%, 100%;
    &__abs {
        position: absolute;
        z-index: 0;
        right: 0;
        top: 157px;
    }
}
@media (max-width: 1140px) {
    .main-bg__abs{
        top: 108px;
    }
}
@media (max-width: 720px) {
    .main-bg__abs{
        position: static;
        margin-left: auto;
        padding-top: 50px;
        max-width: 321px;
        width: 100%;
    }
}
</style>
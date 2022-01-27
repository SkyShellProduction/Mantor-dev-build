<template>
   <header class="header" 
       :style="[`background: url(${headerImg}) no-repeat center/contain, radial-gradient(112.93% 112.93% at 50% 106.72%, #2E4151 0%, #010007 100%)`]">
       <Logo />
       <Nav />
        <svg width="100%" height="42" viewBox="0 0 1200 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="underline__element">
        <path d="M0 13H178.124L205.583 41H1200" stroke="white"/>
        <circle cx="178" cy="13" r="3" fill="white"/>
        <circle cx="178" cy="13" r="12.5" fill="url(#paint0_radial_2755_805)" fill-opacity="0.5" stroke="white"/>
        <defs>
        <radialGradient id="paint0_radial_2755_805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178 13) rotate(90) scale(13)">
        <stop stop-color="#0070FF"/>
        <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>
   </header>
</template>
<script>
import Nav from '@/components/common/Nav.vue';
export default {
    components: {
        Nav
    },
    data() {
        return {
            headerImg: require('@/assets/images/home/header-bg.png')
        }
    },
}
</script>
<style lang="scss">
    .header{
        padding-bottom: 12px;
        min-height: 300px;
    }
    .underline__element{
        display: block;
        margin-top: 18px;
    }
</style>
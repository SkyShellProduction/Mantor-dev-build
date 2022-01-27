<template>
    <Header />
    <Callback />
    <main class="main">
        <router-view v-slot="{ Component }">
            <transition name="left">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
    <Footer />
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Callback from "@/components/UI/Callback.vue";
export default {
    components: {
        Header,
        Footer,
        Callback,
    },
    
};
</script>
<style lang="scss">
.title {
    font-size: 48px;
    line-height: 59px;
    color: #fff;
}
.title-se {
    font-family: "Roboto";
    font-size: 26px;
    line-height: 36px;
    text-transform: uppercase;
}
.left-enter-active,
.left-leave-active {
    transition: opacity 0.5s linear;
}
.left-enter-active {
    opacity: 1;
}
.left-leave-active {
    opacity: 0;
}

@media (max-width: 1140px) {
    .title {
        font-size: 36px;
        line-height: 44px;
    }
    .title-se {
        font-size: 22px;
        line-height: 28px;
    }
}
@media (max-width: 720px) {
    .title {
        font-size: 24px;
        line-height: 29px;
    }
    .title-se {
        font-size: 19px;
        line-height: 24px;
    }
}
</style>
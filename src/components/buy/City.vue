<template>
    <div class="city" :style="[`background-image: url(${cityImg})`]">
        <div class="container">
            <div class="city__flex">
                <div class="city__left">
                    <h2 class="title-se city__title" @click="openBlock($event.target)">
                        Челябинск 
                       <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L15 1" stroke="#fff"/>
                        </svg>
                    </h2>
                   <div class="city__opener">
                        <div class="city__block" v-for="n in 4" :key="n">
                        <TextWithPillar>
                            <ul class="city__text">
                                <li>
                                    <strong
                                        >MANTOR Diesel (ИП Торман Я.В.)</strong
                                    >
                                </li>
                                <li>мантор.рф</li>
                                <li>
                                    <span>Адрес</span>Челябинск, Куйбышева 1-а
                                </li>
                                <li><span>Телефон</span> +7 (351) 009-09-09</li>
                                <li>
                                    <span>Эл. почта</span>mantor.chel@mail.ru
                                </li>
                            </ul>
                        </TextWithPillar>
                    </div>
                   </div>
                    <h2 class="title-se city__title" @click="openBlock($event.target)">
                        Екатеринбург 
                          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L15 1" stroke="#fff"/>
                        </svg>
                    </h2>
                   <div class="city__opener">
                        <div class="city__block" v-for="n in 2" :key="n">
                        <TextWithPillar>
                            <ul class="city__text">
                                <li>
                                    <strong
                                        >MANTOR Diesel (ИП Торман Я.В.)</strong
                                    >
                                </li>
                                <li>мантор.рф</li>
                                <li>
                                    <span>Адрес</span>Челябинск, Куйбышева 1-а
                                </li>
                                <li><span>Телефон</span> +7 (351) 009-09-09</li>
                                <li>
                                    <span>Эл. почта</span>mantor.chel@mail.ru
                                </li>
                            </ul>
                        </TextWithPillar>
                    </div>
                   </div>
                    <router-link
                        to="/partner"
                        class="city__link"
                        @click="$store.dispatch('setTabs', path.tabs)"
                        >{{ path.text }}</router-link
                    >
                </div>
                <ul class="city__right">
                    <li>Москва</li>
                    <li>Санкт-Петербург</li>
                    <li>Челябинск</li>
                    <li>Новосибирск</li>
                    <li>Екатеринбург</li>
                    <li>Иркутск</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cityImg: require("@/assets/images/buy/buy-bg.png"),
        };
    },
    props: {
        path: {
            type: Object,
            default: {
                text: "Стать официальным магазином mantor",
                tabs: true,
            },
        },
    },
    methods: {
        openBlock(e) {
            e.closest('.city__title').classList.toggle('active');
            e.nextElementSibling.classList.toggle('active');
        }
    }
};
</script>
<style lang="scss">

</style>
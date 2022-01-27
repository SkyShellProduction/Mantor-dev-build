<template>
    <div class="experience">
        <div class="container">
            <h2 class="title experience__title">Многолетний опыт MANTOR</h2>
            <TextWithPillar>
                <p class="experience__about">
                    Готовы представить Вам торговую марку MANTOR. Мы постоянно
                    работаем над улучшением качества продукции
                </p>
            </TextWithPillar>
            <div class="experience__grid">
                <div
                    class="experience__card"
                    v-for="(exp, i) in experience"
                    :key="i"
                >
                    <div class="experience__img">
                        <img :src="exp.img" alt="" />
                    </div>
                    <p class="experience__descr">{{ exp.descr }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            experience: [
                {
                    img: require("@/assets/images/home/experience01.png"),
                    descr: "Выбрали только лучшие производства в Китае",
                },
                {
                    img: require("@/assets/images/home/experience02.png"),
                    descr: "Проверили оборудование на соответсвие стандартам качества",
                },
                {
                    img: require("@/assets/images/home/experience03.png"),
                    descr: "Нашли производителей всех комплектующих",
                },
                {
                    img: require("@/assets/images/home/experience04.png"),
                    descr: "Вложились в дополнительное обучение персонала",
                },
                {
                    img: require("@/assets/images/home/experience05.png"),
                    descr: "Ввели двухуровневый контроль качества готовой продукции",
                },
            ],
        };
    },
};
</script>
<style lang="scss">

</style>
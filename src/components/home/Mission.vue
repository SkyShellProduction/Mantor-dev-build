<template>
    <div
        class="mission"
        :style="[`background: url(${missionImg}) no-repeat center/cover`]"
    >
        <div class="container">
            <div class="mission__block">
                <h2 class="title mission__title">Миссия</h2>
                <TextWithPillar>
                    <div class="mission__box">
                        <p class="mission__descr">
                            Торговая марка MANTOR позиционируется как
                            качественный продукт по доступной цене. Объединив
                            свои возможности со своим опытом
                        </p>
                        <p class="mission__descr">
                            Мы можем добиться улучшения нашего качества жизни и
                            новых достижений в работе.
                        </p>
                        <p class="mission__descr">
                            Меняем мир к лучшему вместе.
                        </p>
                    </div>
                </TextWithPillar>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            missionImg: require("@/assets/images/home/MissionCover.png"),
        };
    },
};
</script>
<style lang="scss">

</style>
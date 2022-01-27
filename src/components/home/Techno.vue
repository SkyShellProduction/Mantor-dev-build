<template>
    <div class="techno">
        <div class="container">
            <h2 class="title techno__title">Технологии</h2>
            <TextWithPillar>
                <p class="techno__descr">
                    Под торговой маркой MANTOR Вы можете встретить:
                </p>
            </TextWithPillar>
            <div class="techno__cards">
                <div class="techno__card">
                    <h3 class="techno__name">
                        Топливные инжекторы <br> Common Rail
                    </h3>
                    <div class="techno__rect"></div>
                    <img src="@/assets/images/home/techno01.png" alt="" />
                    <div class="techno__sphere">
                        <div
                            class="techno__sphere-item"
                            v-for="n in 40"
                            :key="n"
                        ></div>
                    </div>
                    <div class="techno__romb">
                        <div
                            class="techno__romb-item"
                            v-for="n in 4"
                            :key="n"
                        ></div>
                    </div>
                    <div class="techno__parallel"></div>
                </div>
                <div class="techno__card">
                    <h3 class="techno__name">
                        Насосы высокого и низкого <br> давления (ТННД, ТНВД)
                    </h3>
                    <div class="techno__rect"></div>
                    <img src="@/assets/images/home/techno02.png" alt="" />
                    <div class="techno__sphere">
                        <div
                            class="techno__sphere-item"
                            v-for="n in 40"
                            :key="n"
                        ></div>
                    </div>
                    <div class="techno__triangle"></div>
                </div>
                <div class="techno__card">
                    <h3 class="techno__name">
                        Запасные части <br />на двигатель ЯМЗ
                    </h3>
                    <div class="techno__rect"></div>
                    <img src="@/assets/images/home/techno03.png" alt="" />
                    <div class="techno__sphere">
                        <div
                            class="techno__sphere-item"
                            v-for="n in 40"
                            :key="n"
                        ></div>
                    </div>
                    <div class="techno__triangle"></div>
                    <div class="techno__trian">
                        <div
                            class="techno__trian-item"
                            v-for="n in 4"
                            :key="n"
                        ></div>
                    </div>
                </div>
            </div>
            <TextWithPillar>
                <div class="techno__box">
                    <p class="techno__descr">
                        Как отмечают сотрудники сервисных центров, данные
                        запчасти не уступают оригинальной продукции. Они имеют
                        высокие характеристики в соответствии с мировыми
                        стандартами. Вся продукция сертифицирована.
                    </p>
                    <p class="techno__descr">Вся продукция сертифицирована.</p>
                </div>
            </TextWithPillar>
        </div>
    </div>
</template>
<style lang="scss">

</style>
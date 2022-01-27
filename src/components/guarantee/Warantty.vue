<template>
    <div class="warantty" :style="[`background-image: url(${waranntyImg})`]">
        <div class="container">
           <div class="warantty__block">
                <h2 class="title warantty__title">Гарантия</h2>
            <TextWithPillar>
                <ul class="warantty__text">
                    <li>
                        На всю продукцию торговай марки <img src="@/assets/images/home/logo-text.svg" alt=""> установлена повышенная
                        гарантия 6 месяцев с даты продажи.
                    </li>
                    <li>
                        В случае наступления
                        гарантийного случая, клиент праве ообратиться в любой
                        сервисный центр, указанный в разделе «ПАРТНЁРЫ», или
                        непосредственно к самому продавцу с целью установления
                        причины выхода из строя запасной части. 
                    </li>
                    <li>
                        С правилами
                        гарантии и предоставления необходимых документов вы
                        можете ознакомиться в ГАРАНТИЙНОМ ТАЛОНЕ (прилагается к
                        каждому изделию) или на сайте ниже.
                    </li>
                </ul>
            </TextWithPillar>
            <ul class="warantty__list">
                <li class="warantty__item">Гарантийный талон</li>
                <li class="warantty__item">документация</li>
                <li class="warantty__item">правила гарантии</li>
            </ul>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            waranntyImg: require("@/assets/images/guarantee/warranty.png")
        }
    }
}
</script>
<style lang="scss">

</style>
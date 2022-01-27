<template>
    <div class="magazine">
        <div class="container">
            <h2 class="title magazine__title">
                Преимущества магазинов —партнеров MANTOR
            </h2>
            <TextWithPillar>
                <p class="magazine__descr">
                    Магазины, сотрудничающие с MANTOR, получают преимущества:
                </p>
            </TextWithPillar>
            <div class="magazine__cards">
                <div class="magazine__card">
                    <div class="magazine__image">
                        <img
                            src="@/assets/images/partner/sertificate.png"
                            alt=""
                        />
                    </div>
                    <p>Сертификат дилера</p>
                </div>
                <div class="magazine__card">
                    <div class="magazine__image">
                        <img
                            src="@/assets/images/partner/spec-price.png"
                            alt=""
                        />
                    </div>
                    <p>Специальные цена на продукцию</p>
                </div>
                <div class="magazine__card">
                    <div class="magazine__image">
                        <img src="@/assets/images/partner/support.png" alt="" />
                    </div>
                    <p>Продвижение и сопровождение</p>
                </div>
                <div class="magazine__card">
                    <div class="magazine__image">
                        <img
                            src="@/assets/images/partner/guarantee.png"
                            alt=""
                            class="magazine__image-spec"
                        />
                    </div>
                    <p>Оперативное выполнение гарантийных обязательств</p>
                </div>
            </div>
        </div>
    </div>
    <Certificate>
        <div class="certificate__cards">
            <div class="certificate__card">
                <h3 class="certificate__num">1</h3>
                <p class="certificate__descr">
                    Подать заявку и заключить договор на поставку продукции MANTOR с ООО «Тим Групп»
                </p>
            </div>
            <div class="certificate__card">
                <h3 class="certificate__num">2</h3>
                <p class="certificate__descr">
                   Осуществлять закупку продукции на сумму от 150000 рублей в месяц
                </p>
            </div>
        </div>
    </Certificate>
</template>
<script>
import Certificate from './Certificate.vue';
export default {
    components: {
        Certificate
    }
};
</script>
<style lang="scss">

</style>
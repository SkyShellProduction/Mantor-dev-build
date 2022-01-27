<template>
    <div class="centre ">
        <div class="container">
            <h2 class="magazine__title">
                Преимущества сервисных центров MANTOR
            </h2>
            <TextWithPillar>
                <p class="magazine__descr">
                    Магазины, сотрудничающие с MANTOR, получают преимущества:
                </p>
            </TextWithPillar>
            <div class="centre__cards">
                <div class="centre__left">
                    <img src="@/assets/images/partner/mechanics.png" alt="" />
                    <p class="centre__descr">
                        <strong>Специальные условия</strong>
                        на закупку запасных частей для ремонта форсунок
                    </p>
                </div>
                <div class="centre__right">
                    <div class="centre__item">
                        <img
                            src="@/assets/images/partner/sertificate.png"
                            alt=""
                        />
                        <p class="centre__text">Статус дилера</p>
                    </div>
                    <div class="centre__item">
                        <img src="@/assets/images/partner/support.png" alt="" />
                        <p class="centre__text">
                            Продвижение вашего сервисного центра
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Certificate page="Для сервисных центров"
        sertificateTitle="Три шага для получения дилерского сертификата"
    >
        <div class="certificate__cards centre__flex">
            <div class="certificate__card">
                <h3 class="certificate__num">1</h3>
                <p class="certificate__descr">
                    Подать заявку и предоставить список оборудования для
                    диагностики и ремонта форсунок Common Rail (с приложенными
                    фотографиями рабочих мест
                </p>
            </div>
            <div class="certificate__card">
                <h3 class="certificate__num">2</h3>
                <p class="certificate__descr">
                    Заключить договор на выполнение послегарантийного ремонта
                    форсунок системы Common Rail под товарным знаком MANTOR»
                </p>
            </div>
            <div class="certificate__card">
                <h3 class="certificate__num">3</h3>
                <p class="certificate__descr">
                    Заключить договор на поставку запасных частей для ремонта
                    форсунок Common Rail с ООО «Тим Групп» и осуществлять
                    закупку запасных частей на сумму от 30000 рублей в месяц
                </p>
            </div>
        </div>
    </Certificate>
</template>
<script>
import Certificate from "./Certificate.vue";
export default {
    components: {
        Certificate,
    },
};
</script>
<style lang="scss">

</style>
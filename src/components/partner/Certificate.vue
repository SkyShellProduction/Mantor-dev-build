<template>
   <Background>
        <div class="certificate">
        <div class="container">
            <h2 class="title certificate__title">
                {{ sertificateTitle }}
            </h2>
            <slot />
        <Modal :page="page"/>
        </div>
    </div>
   </Background>
</template>
<script>

export default {
    props: {
        sertificateTitle: {
            type: String,
            default: "Два шага для получения дилерского сертификата",
        },
        page: {
            type: String,
            default: 'для магазинов'
        }
    },
};
</script>
<style lang="scss">

</style>
<template>
    <div class="catalog-name">
        <div class="container" v-if="showExtraTitle">
            <h2 class="title spec__catalog-name">Каталог продукции</h2>
        </div>
        <div class="catalog-name__rel">
            <div class="container">
                <div class="catalog-name__block">
                    <slot name="title">
                        <h3 class="title-se">ИНЖЕКТОР (ФОРСУНКА) мультипликатор</h3>
                    </slot>
                    <div class="catalog-name__picture">
                        <slot name="image">
                            <img
                            src="@/assets/images/catalog/инжектор.png"
                            alt=""
                        />
                        </slot>
                    </div>
                </div>
            </div>
            <img
                src="@/assets/images/catalog/vector.png"
                alt=""
                class="catalog-name__img"
            />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showExtraTitle: {
            type: Boolean,
            default: false,
        },
    },
    name: 'CatalogName'
};
</script>
<style lang="scss">
.spec__catalog-name {
   color: #000;
    margin-bottom: 29px;
}
.catalog-name {
    background: #fff;
    padding: 34px 0 34.5px;
    position: relative;
    &__rel {
        position: relative;
    }
    &__img {
        position: absolute;
        width: 100%;
        top: 0;
        height: 96px;
        left: 0;
        object-fit: initial;
    }
    &__block {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 5;
        justify-content: space-between;
        gap: 30px;
        h3 {
            max-width: 329px;
            width: 100%;
        }
    }
    &__picture {
        margin-right: 63px;
        position: relative;
        top: 34px;
        background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(0, 112, 255, 0.5) 0%,
            rgba(0, 112, 255, 0) 100%
        );
    }
}
@media (max-width: 720px) {
    .catalog-name{
        &__picture{
            max-width: 150px;
            margin-right: 0;
            img{
                width: 100%;
            }
        }
    }
}
</style>
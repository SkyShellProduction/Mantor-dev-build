<template>
    <div class="catalog-specs">
        <div class="container">
            <div class="catalog-specs__block">
                <div class="catalog-specs__left">
                    <h3 class="catalog-specs__title" @click="openSpecs($event.target)">
                        топливная система bosh
                        <img src="@/assets/images/catalog/arrow-down.svg" alt="">
                    </h3>
                    <div class="catalog-specs__open">
                        <CatalogSpecs>
                            <slot name="table1"></slot>
                        </CatalogSpecs>
                    </div>
                </div>
                <div class="catalog-specs__right">
                    <h3 class="catalog-specs__title" @click="openSpecs($event.target)">
                        топливная система denso
                        <img src="@/assets/images/catalog/arrow-down.svg" alt="">
                    </h3>
                    <div class="catalog-specs__open">
                        <CatalogSpecs>
                            <slot name="table2"></slot>
                        </CatalogSpecs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CatalogSpecs from "./CatalogSpecs.vue";
export default {
    components: { CatalogSpecs },
    name: 'CatalogCommon',
    methods: {
        openSpecs (e) {
           e.closest('.catalog-specs__title').classList.toggle('active');
           e.closest('.catalog-specs__title').nextElementSibling.classList.toggle('active')
        }
    }
};
</script>
<style lang="scss">
.catalog-specs {
    padding: 33px 0 27.5px;
    &__block {
        margin: 0 39px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
    &__title {
        font-family: "Roboto";
        font-size: 24px;
        line-height: 100%;
        text-transform: uppercase;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            transition: 0.3s linear;
            display: none;
        }
        &.active img{
            transform: rotate(-180deg);
        }
    }
    &__open{
        transition: 0.3s linear;
        // padding-bottom: 10px;
    }
}
@media (max-width: 960px) {
    .catalog-specs{
        &__title{
            font-size: 20px;
        }
        &__block{
            margin: 0;
        }
    }
}
@media (max-width: 720px) {
    .catalog-specs{
        &__title{
            font-size: 16px;
        }
        &__block{
            grid-template-columns: repeat(1, minmax(280px, 350px));
            justify-content: center;
        }
        &__title img{
            display: block;
        }
        &__open{
            height: 0;
            overflow: hidden;
        }
        &__open.active{
            height: 100%;
        }
    }
}
</style>
<template>
    <div class="map">
        <h2 class="title map__spec-title">{{ titleMap }}</h2>
        <div class="map__main">
            <div class="map__google" ref="map"></div>
            <div class="map__block">
                <div class="container">
                    <div class="map__flex">
                        <h2 class="title map__title">{{ titleMap }}</h2>
                        <div class="map__search">
                            <input
                                type="text"
                                placeholder="Поиск по городу"
                                v-model="search"
                                class="map__input"
                            />
                            <img
                                src="@/assets/images/buy/search.png"
                                alt=""
                                class="map__search-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import initMap from "@/assets/js/map.js";
export default {
    mounted() {
        initMap(this.$refs.map);
    },
    props: {
        titleMap: {
            type: String,
            default: 'Магазины'
        }
    },
    data() {
        return {
            search: "",
        };
    },
};
</script>
<style lang="scss">

</style>
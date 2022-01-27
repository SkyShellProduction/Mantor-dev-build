<template>
    <div class="container">
        <div class="partner-tabs">
            <a href="#" 
            :class="['partner-tabs__link', getTabs ? 'active' : '']" 
            @click.prevent="$store.dispatch('setTabs', true)"
                >Для магазинов</a
            >
            <a href="#" 
            :class="['partner-tabs__link', !getTabs ? 'active' : '']" 
             @click.prevent="$store.dispatch('setTabs', false)"
                >Для сервисных центров</a
            >
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        getTabs () {
            return this.$store.getters.getTabs;
        }
    }
};
</script>
<style lang="scss">

</style>
<template>
    <div class="partner">
        <Tabs />
        <Magazine v-if="getTabs"/>
        <Centre v-if="!getTabs"/>
    </div>
</template>
<script>
import Centre from "@/components/partner/Centre.vue";
import Magazine from "@/components/partner/Magazine.vue";
import Tabs from "@/components/partner/Tabs.vue";
export default {
    components: {
        Tabs,
        Centre,
        Magazine,
    },
    computed: {
        getTabs () {
            return this.$store.getters.getTabs;
        }
    }
};
</script>
<style lang="scss">
    .partner{
       padding-top: 52px;
        background: #fff;
    }
</style>
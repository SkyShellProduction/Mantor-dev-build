<template>
   <div class="catalog">
        <Section01></Section01>
        <Section02></Section02>
        <Section03></Section03>
        <Section04></Section04>
        <Section05></Section05>
        <Section06></Section06>
        <Section07></Section07>
   </div>
</template>
<script>
import Section01 from '@/components/catalog/Section01.vue';
import Section02 from '@/components/catalog/Section02.vue';
import Section03 from '@/components/catalog/Section03.vue';
import Section04 from '@/components/catalog/Section04.vue';
import Section05 from '@/components/catalog/Section05.vue';
import Section06 from '@/components/catalog/Section06.vue';
import Section07 from '@/components/catalog/Section07.vue';

export default {
    components: {
        Section01, 
        Section02, 
        Section03, 
        Section04, 
        Section05, 
        Section06, 
        Section07, 
      

    },
    
}
</script>
<style lang="scss">
    .catalog{
       background: rgba(0, 0, 0, 0.1);;
    }
</style>
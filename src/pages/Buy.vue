<template>
   <div class="buy">
       <Map />
       <City />
   </div>
</template>
<script>
import Map from '@/components/buy/Map.vue';
import City from '@/components/buy/City.vue';
export default {
    components: { 
        Map,
        City
    
    },
    
}
</script>
<template>
   <div class="service">
       <Map titleMap="Сервисные центры"/>
       <City :path="path"/>
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
    data () {
        return {
            path: {
                text: 'Авторизация сервисного центра в вашем городе',
                tabs: false
            }
        }
    }
    
}
</script>
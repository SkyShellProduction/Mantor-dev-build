<template>
    <div class="home-page">
        <Mantor />
        <Experience />
        <Mission />
        <Techno />
    </div>
</template>
<script>
import Mantor from '@/components/home/Mantor.vue'
import Experience from '@/components/home/Experience.vue'
import Mission from '@/components/home/Mission.vue'
import Techno from '@/components/home/Techno.vue'
export default {
    components: {
        Mantor,
        Experience,
        Mission,
        Techno
    }
}
</script>
<template>
    <div class=" w-full pt-3 bg-gray-100">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>


<script>

import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        Navbar,
    }
}
</script>
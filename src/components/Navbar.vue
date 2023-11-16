<template>
    <!--Navbar -->
    <nav class="flex items-center justify-between w-4/5 px-2 py-2 mx-auto bg-white rounded-md shadow-md h-100 ">
        <img src="@/assets/logo.png" class="w-9 h-9 " alt="">
        <ul class="flex ">
            <router-link class="px-1 text-xs text-gray-400" :to="{ name: 'home' }">Home</router-link>
            <router-link class="px-1 text-xs text-gray-400" :to="{ name: 'CreatePost' }">Created</router-link>

        </ul>
    </nav>
</template>

<script>

</script>
<script setup>

    defineProps({
        image: String
    })

    const getImageUrl = (name) => {
        return new URL(`../../assets/deals/${name}`, import.meta.url).href
    }

</script>

<template>
    <div class="h-screen-70 w-full z-10">

     <img :src="getImageUrl(image)" alt="" class="w-full h-full object-cover">

        
    </div>
</template>


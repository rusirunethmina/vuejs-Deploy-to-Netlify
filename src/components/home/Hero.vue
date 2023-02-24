<script setup>
import { ref, onMounted } from 'vue'
</script>


<template>
    <section class="relative mt-20 h-half-screen md:h-screen md:mt-0">
        <img src="../../assets/hero.jpg" class="h-full w-full object-cover" alt="">

        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-900 z-10 md:bg-gradient-to-r">

            <div class="relative h-full w-ful">
                <div 
                class="absolute bottom-10
                 left-0 right-0 mx-auto w-max flex flex-col items-center 
                 md:items-start md:top-1/4 md:left-20 md:bottm-0 md:mx-0">

                    <h1 class="text-6xl font-extrabold text-white text-center md:text-7xl">
                        BE
                        <span class="text-green-400">ORGANIC</span> 
                    </h1>

                    <h1 class="md:mb-10 text-6xl font-extrabold text-white text-center md:text-7xl">
                        BE
                        <span class="text-green-400">HEALTHY</span> 
                    </h1>

                    <h1 class="text-6xl font-bold text-white text-center md:text-7xl">
                        100% 
                        <span class="text-green-400">Organic</span> 
                    </h1>

                    <div class="text-white px-3 py-2 mt-4 rounded-lg bg-gray-900 text-2xl font-bold text-center
                        sm:text-3xl
                        md:text-4xl">
                        Fresh & Natural Farm Food
                    </div>

                    <router-link :to="{name: 'shop'}" class="bg-gradient-to-r mt-4 from-emerald-500 to-green-600 px-4 py-2 rounded-full text-white font-bold hover:from-emerald-700 hover:to-green-800">
                        Shop Now
                    </router-link>

                    
                </div>
            </div>

        </div>
    </section>
</template>
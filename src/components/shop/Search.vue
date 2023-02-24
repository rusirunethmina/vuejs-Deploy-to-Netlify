<script setup>

import Categories from '../Categories.vue';

</script>

<template>
    <div class="max-w-2xl w-11/12 h-auto p-4 bg-white bg-opacity-50 backdrop-blur-lg mx-auto rounded-lg -mt-24 z-40 border border-slate-900 md:p-8">

        <Categories />

        <div class="flex items-center w-full mx-auto">

            <input type="text" class="bg-transparent text-sm text-slate-900 px-6 py-2 border-r-0 w-full border border-slate-600 rounded-l-full focus:outline-none" placeholder="Search foods">

            <button class="bg-emerald-500 px-6 py-2 text-sm border border-l-0 border-slate-600 rounded-r-full text-slate-900 cursor-pointer focus:outline-none">
                <font-awesome-icon  icon="fa-solid fa-magnifying-glass" />
            </button>

        </div>

    </div>
</template>
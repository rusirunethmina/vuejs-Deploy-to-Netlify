<script setup>

    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()

    const categories = ref([
        {title: 'all', img: 'all.jpg'},
        {title: 'vegetables', img: 'vegetables.jpg'},
        {title: 'fruits', img: 'fruits.jpg'},
        {title: 'meats', img: 'meats.jpg'},
    ])

    const currentCategory = computed(() => {
        return store.state.currentCategory
    })

    const changeCategory = (title) => {
        store.commit('toggleCategory', title)
        store.dispatch('filterProducts')
    }

    const getImageUrl = (name) => {
        return new URL(`../assets/category/${name}`, import.meta.url).href
    }

</script>

<template>
    
    <div class="flex items-center justify-center gap-4 mb-6">

        <div v-for="cat in categories" :key="cat" 

        :class="currentCategory == cat.title ? 'bg-gradient-to-t text-white' : ''"

        @click="changeCategory(cat.title)"

        class="flex flex-col items-center justify-center gap-2 p-2 rounded-lg cursor-pointer text-gray-800 from-emerald-500 to-green-600 hover:bg-gradient-to-t hover:text-white">

            <div class="w-12 h-12 rounded-full overflow-hidden md:w-14 md:h-14">
                <img class="w-full h-full object-cover" :src="getImageUrl(cat.img)" alt="">
            </div>

            <span class="text-xs md:text-sm capitalize font-bold">{{ cat.title }}</span>
        </div>
    </div>

</template>
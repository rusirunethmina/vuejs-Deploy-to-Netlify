<template>
    <section class="h-72 my-10">
        <div class="h-full w-full bg-slate-900 bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center text-white">

            <h5 class="text-lg font-semibold">
                Organic Foods
            </h5>

            <h1 class="text-3xl font-bold md:text-4xl lg:text-6xl">
                Healthty - Fresh - Delicious
            </h1>

            <router-link :to="{name: 'shop'}" class="mt-6 px-10 py-2 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-slate-900">
                Shop Now
            </router-link>

        </div>
    </section>
</template>

<style scoped>

    section {
        background-image: url('../../assets/cta.jpg');
        background-size: cover;
        background-position: center center;
    }

</style>
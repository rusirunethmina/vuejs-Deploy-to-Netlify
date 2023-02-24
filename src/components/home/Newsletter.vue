<template>
    <section class="h-48 mt-6 ">
        <div class="h-full w-full px-6 bg-slate-900 bg-opacity-10 backdrop-blur-sm flex flex-col items-center justify-center text-white">

            <h1 class="text-3xl font-bold md:text-4xl lg:text-6xl text-center">
                Stay In Touch With Updates
            </h1>

            <div class="flex items-center w-full max-w-2xl mx-auto mt-6">

                <input type="text" class="bg-transparent text-lg text-white px-6 py-2 border-r-0 w-full border-2 border-white rounded-l-full focus:outline-none" placeholder="Enter you email">

                <button class="bg-emerald-500 px-6 py-2 text-lg border-2 border-l-0 border-white rounded-r-full text-slate-900 cursor-pointer focus:outline-none">
                    Submit
                </button>

            </div>

        </div>
    </section>
</template>

<style scoped>

    section {
        background-image: url('../../assets/apples.jpg');
        background-size: cover;
        background-position: center center;
    }

</style>
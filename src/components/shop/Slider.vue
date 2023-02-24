<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { ref } from 'vue'
  import Slide from './Slide.vue'
  
  import "swiper/css";
  
  import { Pagination, Navigation, Autoplay } from "swiper";

  const modules = ref([
    Pagination, Navigation, Autoplay
  ])

  const slides = ref([
    'image_1.jpg',
    'image_2.jpg',
    'image_3.jpg',
    'image_4.jpg',
    'image_5.jpg',
    'image_6.jpg',
    'image_7.jpg',
    'image_8.jpg',
    'image_9.jpg',
    'image_10.jpg',
  ])
  
</script>


<template>
    
    <div class="h-screen-70 mt-20 -z-10 relative">
      <swiper
        :slidesPerView="1"
        :centeredSlides="true"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
        class="mt-20 z-10"
      >

        
        <swiper-slide v-for="slide in slides" :key="slide">

          <Slide :image="slide"/>

        </swiper-slide>

      </swiper>
    </div>
  </template>

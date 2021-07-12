<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>

  <!-- 
      <swiper
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
  -->
</template>


<script lang="ts">
  // Import Swiper Vue.js components → https://swiperjs.com/vue
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // import Swiper core and required modules
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';

  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Slide',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {

        /*
        function onSwiper(swiper) {
            console.log(swiper);
        }

        function onSlideChange() {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange
        }
        */
    }
    /*
    methods: {
      
    },
    */
});
</script>

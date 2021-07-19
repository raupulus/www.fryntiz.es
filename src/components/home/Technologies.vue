<template>
  <section class="bg-white py-20">
    <div class="container px-8 mx-auto sm:px-12 lg:px-20">
      <!--
        <h1
          class="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7"
        >
          Tecnologías Preferidas
        </h1>
        -->
      <div
        class="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8"
      >
        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/php.svg"
            alt="PHP"
            class="block object-contain h-12"
          />
        </div>
        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/laravel.svg"
            alt="Laravel"
            class="block object-contain h-9"
          />
        </div>
        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/javascript.svg"
            alt="Javascript"
            class="block object-contain h-9"
          />
        </div>
        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/vue.svg"
            alt="Vue"
            class="block object-contain h-7 lg:h-8"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/tailwindcss.svg"
            alt="Tailwind CSS"
            class="block object-contain h-9"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2"
        >
          <img
            src="@/assets/images/stack/postgresql.svg"
            alt="PostgreSQL"
            class="block object-contain h-9"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Technologies",

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
  },
  /*
    methods: {
      
    },
    */
});
</script>

<style scoped lang="scss">
</style>
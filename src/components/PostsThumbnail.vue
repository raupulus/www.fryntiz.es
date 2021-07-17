<template>
  <section class="relative w-full bg-white">
    <div
      class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"
    ></div>
    <div
      class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl"
    >
      <!--
        <h1
          class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"
        >
          <a href="#_">Aptitudes</a>
        </h1>
        <p class="text-lg font-medium text-gray-500 sm:text-2xl">
          Lista de aptitudes aquí...
        </p>
        -->
      <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        <div class="grid grid-cols-12 col-span-12 gap-7">
          <div
            class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
          >
            <a
              href="#_"
              class="block transition duration-200 ease-out transform hover:scale-110"
            >
              <img
                class="object-cover w-full shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/workstation.jpg"
              />
            </a>
            <div
              class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl"
            >
              <div
                class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block"
              >
                <span>Inspiration</span>
              </div>
              <h2 class="text-base font-bold sm:text-lg md:text-xl">
                <a href="#_">Best Workstations of the Year</a>
              </h2>
              <p class="mt-2 text-sm text-gray-500">
                Check out these inspiring workstations to get ideas on how to
                level-up your workstation.
              </p>
            </div>
          </div>

          <div
            class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
          >
            <a
              href="#_"
              class="block transition duration-200 ease-out transform hover:scale-110"
            >
              <img
                class="object-cover w-full shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/snacks.jpg"
              />
            </a>
            <div
              class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl"
            >
              <div
                class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block"
              >
                <span>Food</span>
              </div>
              <h2 class="text-base font-bold sm:text-lg md:text-xl">
                <a href="#_">Eating for Productivity</a>
              </h2>
              <p class="mt-2 text-sm text-gray-500">
                Learn how to be more disciplined in your diet and how you can
                eat to maximize productivity.
              </p>
            </div>
          </div>

          <div
            class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
          >
            <a
              href="#_"
              class="block transition duration-200 ease-out transform hover:scale-110"
            >
              <img
                class="object-cover w-full shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/book-design.jpg"
              />
            </a>
            <div
              class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl"
            >
              <div
                class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block"
              >
                <span>Resources</span>
              </div>
              <h2 class="text-base font-bold sm:text-lg md:text-xl">
                <a href="#_">A Design Mind-set</a>
              </h2>
              <p class="mt-2 text-sm text-gray-500">
                What does it mean to have a design mind-set? Learn how to
                improve your eye for design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostsThumbnail",

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
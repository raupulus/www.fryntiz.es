<template>
  <header>
    <div
      class="w-full bg-cover bg-center"
      style="
        height: 32rem;
        background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
      "
    >
      <div
        class="w-full flex items-center h-full w-full bg-gray-900 bg-opacity-50"
      >
        <div class="w-full text-center">
          <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
            Mis <span class="color-warning">Proyectos</span>
          </h1>

          <div class="text-center mt-2 mb-1">
            <span
              class="
                color-primary
                background-warning
                rounded
                text-1xl
                font-semibold
                uppercase
                md:text-2xl
                p-3
              "
            >
              {{ currentCategory.name }}
            </span>
          </div>

          <div class="my-3">
            <div>
              <form>
                <input type="text" name="search" />
                <button
                  class="
                    ml-2
                    px-4
                    py-2
                    bg-blue-600
                    text-white text-sm
                    uppercase
                    font-medium
                    rounded
                    hover:bg-blue-500
                    focus:outline-none focus:bg-blue-500
                  "
                >
                  Buscar
                </button>

                <button
                  class="
                    ml-2
                    px-4
                    py-2
                    bg-blue-600
                    text-white text-sm
                    uppercase
                    font-medium
                    rounded
                    hover:bg-blue-500
                    focus:outline-none focus:bg-blue-500
                  "
                >
                  Limpiar
                </button>
              </form>
            </div>
          </div>

          <nav class="w-9/10">
            <swiper
              :slidesPerView="5"
              :spaceBetween="0"
              :slidesPerGroup="5"
              :loop="true"
              :navigation="true"
              class="m-5 cursor-move"
            >
              <swiper-slide
                v-for="category in categories"
                :key="category.slug"
                class="background-primary p-2"
              >
                <button
                  class="
                    color-warning
                    background-secondary
                    color-secondary-hover
                    background-warning-hover
                    p-2
                    rounded
                    font-bold
                  "
                >
                  {{ category.name }}
                </button>
              </swiper-slide>

              <!--
              <swiper-slide class="background-warning">Slide 2</swiper-slide
              ><swiper-slide class="background-warning">Slide 3</swiper-slide
              ><swiper-slide class="background-warning">Slide 4</swiper-slide
              ><swiper-slide class="background-warning">Slide 5</swiper-slide
              ><swiper-slide class="background-warning">Slide 6</swiper-slide
              ><swiper-slide class="background-warning">Slide 7</swiper-slide
              ><swiper-slide class="background-warning">Slide 8</swiper-slide
              ><swiper-slide class="background-warning">Slide 9</swiper-slide>
              -->
            </swiper>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <div class="container mx-auto flex flex-wrap py-6">
    <!-- Posts -->
    <ElementList :datas="datas" />

    <!-- Sidebar -->
    <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Título Widget</p>
        <p class="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <a
          href="#"
          class="
            w-full
            bg-blue-800
            text-white
            font-bold
            text-sm
            uppercase
            rounded
            hover:bg-blue-700
            flex
            items-center
            justify-center
            px-2
            py-3
            mt-4
          "
        >
          ?¿?¿
        </a>
      </div>

      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        Más widgets...
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ElementList from "@/components/ElementList.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperCore, { Navigation, A11y } from "swiper";
import { useStore } from "vuex";
import { computed } from "vue";

SwiperCore.use([Navigation, A11y]);

// Import vuex map
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "ProjectList",
  components: {
    ElementList,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const store = useStore();

    const projects = store.state.projects;

    console.log("11111111", projects, projects.isLoading, "2222222222");

    const datas = [
      {
        id: 1,
        title: "Título? Poner sobre imagen?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Laravel", "PHP"],
        links: [
          {
            type: "twitter",
            name: "Twitter",
            url: "https://twitter.com/xxx",
          },

          {
            type: "gitlab",
            name: "Gitlab",
            url: "https://gitlab.com/xxx",
          },

          {
            type: "web",
            name: "Web",
            url: "https://web.com/xxx",
          },
        ],
      },

      {
        id: 2,
        title: "Título 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Python", "Django"],
        links: [
          {
            type: "twitter",
            name: "Twitter",
            url: "https://twitter.com/xxx",
          },
        ],
      },

      {
        id: 3,
        title: "Título 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Vuejs", "Tailwind"],
        links: [
          {
            type: "github",
            name: "Github",
            url: "https://github.com/xxx",
          },
        ],
      },

      {
        id: 4,
        title: "Título 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Angular", "typescript"],
        links: [
          {
            type: "gitlab",
            name: "Gitlab",
            url: "https://gitlab.com/xxx",
          },
        ],
      },

      {
        id: 5,
        title: "Título 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Angular", "typescript"],
        links: [
          {
            type: "web",
            name: "Web",
            url: "https://web.com/xxx",
          },
        ],
      },

      {
        id: 6,
        title: "Título 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Angular", "typescript"],
        links: [
          {
            type: "linkedin",
            name: "Linkedin",
            url: "https://linkedin.com/xxx",
          },
        ],
      },

      {
        id: 7,
        title: "Título 7",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Angular", "typescript"],
      },
    ];

    const categories = [
      {
        slug: "all",
        name: "Todos",
      },

      {
        slug: "laravel",
        name: "Laravel",
      },

      {
        slug: "php",
        name: "PHP",
      },

      {
        slug: "python",
        name: "Python",
      },

      {
        slug: "vuejs",
        name: "VueJS",
      },
      {
        slug: "javascript",
        name: "Javascript",
      },
      {
        slug: "Raspberry",
        name: "raspberry",
      },
      {
        slug: "arduino",
        name: "Arduino",
      },
    ];

    const filter = ref("");

    const currentCategory = ref({});

    if (categories && categories.length) {
      currentCategory.value = categories[0];
    }

    return {
      datas,
      categories,
      filter,
      currentCategory,
    };
  },
});
</script>

<style scoped lang="scss">
/*
.swiper-button-prev,
.swiper-button-next {
  color: $warning !important;
}
*/
</style>
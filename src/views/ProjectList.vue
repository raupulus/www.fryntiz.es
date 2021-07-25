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
        class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"
      >
        <div class="text-center">
          <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
            Mis <span class="underline text-blue-400">Proyectos</span>
          </h1>
          <button
            class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            Nombre categoría actual
          </button>

          <p class="my-3">
            <input type="text" name="search" />
            <button
              class="ml-2 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Buscar
            </button>

            <button
              class="ml-2 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Limpiar
            </button>
          </p>

          <nav
            class="w-full py-4 border-t border-b bg-gray-100"
            x-data="{ open: false }"
          >
            <div class="block sm:hidden">
              <a
                href="#"
                class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                @click="open = !open"
              >
                Topics
                <i
                  :class="open ? 'fa-chevron-down' : 'fa-chevron-up'"
                  class="fas ml-2"
                ></i>
              </a>
            </div>
            <div
              :class="open ? 'block' : 'hidden'"
              class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
            >
              <div
                class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2"
              >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Laravel</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >PHP</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Python</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Vuejs</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Javascript</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Raspberry</a
                >
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Arduino</a
                >

                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
                  >Todos</a
                >
              </div>
            </div>
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
          class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
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
import { defineComponent } from "vue";
import ElementList from "@/components/ElementList.vue";

export default defineComponent({
  name: "ProjectList",
  components: {
    ElementList,
  },

  setup() {
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
        image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
        tags: ["Angular", "typescript"],
      },
    ];

    return {
      datas,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
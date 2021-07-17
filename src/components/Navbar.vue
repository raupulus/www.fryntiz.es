<template>
  <nav
    class="box-navbar fixed w-full top-0 flex items-center justify-between flex-wrap p-2 navbar-main"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="@/assets/images/logo.png" alt="Logo Api Fryntiz" class="w-16" />
      &nbsp; &nbsp;
      <a href="#" class="navbar-site-title"> Raúl Caro Pastorino </a>
    </div>

    <div class="block lg:hidden">
      <button
        class="btn-toggle-nav-menu flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        @click="toggleMobileMenu()"
      >
        <svg
          class="h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      class="box-nav-menu-mobile w-full flex-grow text-center lg:flex lg:items-center lg:w-auto"
      :class="mobileMenuIsOpen ? '' : 'hidden'"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          v-for="(link, name) of links"
          :to="link"
          :key="name"
          @click="selectMenu(name)"
          class="navbar-menu-element block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          :class="menuSelected == name ? ' navbar-menu-element-current' : ''"
        >
          {{ name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",

  setup() {
    const menuSelected = ref("Home");
    const mobileMenuIsOpen = ref(false);
    const links = ref({
      Home: "/",
      Projects: "/projects",
      Jobs: "/jobs",
      Collaborations: "/collaborations",
      Hobbies: "/hobbies",
      Repositories: "/repositories",
      Services: "/services",
      About: "/about",
      Contac: "/contact",
    });

    /**
     * Conmuta el estado actual del menú para móviles.
     */
    const toggleMobileMenu = () => {
      mobileMenuIsOpen.value = !mobileMenuIsOpen.value;
    };

    /**
     * Cierra el menú para móviles.
     */
    const closeMobileMenu = () => {
      mobileMenuIsOpen.value = false;
    };

    /**
     * Selecciona una opción del menú.
     */
    const selectMenu = (name: string) => {
      closeMobileMenu();

      menuSelected.value = name;
    };

    return {
      menuSelected,
      links,
      mobileMenuIsOpen,

      // functions
      toggleMobileMenu,
      closeMobileMenu,
      selectMenu,
    };
  },

  //toggle → box-nav-menu-mobile
});
</script>

<style scoped lang="scss">
.box-navbar {
  width: 100%;
  background-color: red;
}

.navbar-main {
  background-color: $background-secondary;
  background-image: url("../assets/images/backgrounds/mosaic-1.png");
  z-index: 1;
}

.navbar-menu-element {
  margin-right: 4px;
  background: $blue;
  color: $white;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  text-shadow: 1px 1px 2px $black;
}

.navbar-menu-element-current {
  border-bottom: 3px solid $orange;
}

.navbar-site-title {
  font-size: 1.9rem;
  font-weight: bold;
  text-shadow: 2px 0 0 $blue, -2px 0 0 $blue, 0 2px 0 $blue, 0 -2px 0 $blue,
    1px 1px $blue, -1px -1px 0 $blue, 1px -1px 0 $blue, -1px 1px 0 $blue;
}

.btn-toggle-nav-menu svg {
  fill: #fff;
}
</style>

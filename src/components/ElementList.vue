<template>
  <section class="w-full md:w-2/3 flex flex-wrap content-between px-3">
    <ProjectCard v-for="data in datas" :data="data" :key="data.id" />
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "@/components/projects/ProjectCard.vue";

export default defineComponent({
  name: "ProjectList",
  components: { ProjectCard },

  props: {
    datas: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    console.log(props);
    //
  },
});
</script>

<style scoped lang="scss">
</style>
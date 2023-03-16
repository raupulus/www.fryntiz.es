<template>
  <div v-if="isOpen && (isOpen != 'false')" 
       :class="'alert-' + type + ' text-white px-6 py-4 border-0 rounded relative mb-4'" >
    
    <div class="alert-title">
        <span class="text-2xl font-bold">
            {{isOpen}}
            {{title}}
        </span>
    </div>

    <span class="text-xl inline-block mr-5 align-middle">
      <i class="fas fa-bell"></i>
    </span>

    <span class="inline-block align-middle mr-8">
        {{message}}
    </span>

    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" 
            v-on:click="closeAlert()">
      <span>×</span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'Alert',

    props: {
        open : {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'primary'
        },
        title: {
            type: String,
            default: null
        }
    },
  
    setup(props) {
        const isOpen  = ref(props.open);

        const closeAlert = () => {
            isOpen.value = false;
        }

        return {
            isOpen,
            closeAlert,
        }
    }
});
</script>

<style scoped lang="scss">
.alert-primary {
    background-color: $primary;
}

.alert-secondary {
    background-color: $secondary;
}

.alert-warning {
    background-color: $warning;
}

.alert-success {
    background-color: $success;
}

.alert-danger {
    background-color: $danger;
}
</style>
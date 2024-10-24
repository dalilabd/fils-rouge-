<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const messagError=computed(()=>store.getters.getmessageErreur)
</script>

<template>
  <div class="bg-white w-1/3 shadow-md rounded-lg border p-4 flex justify-center items-center flex-col gap-5">
    <img
      class="w-32"
      src="../../assets/icone/25-error-cross.gif"
      alt=""
    >
    <span class="text-red-600 text-lg">{{ messagError }}</span>
  </div>
</template>

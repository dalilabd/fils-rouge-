<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const messag=computed(()=>store.getters.getMessage)
</script>

<template>
  <div class="bg-slate-50 w-1/3 shadow-md rounded-lg border p-4 flex justify-center items-center flex-col gap-7">
    <img
      class="w-32"
      src="../../assets/icone/icone Success.gif"
      alt=""
    >
    <span class="text-green-500 text-lg">{{ messag }}</span>
  </div>
</template>

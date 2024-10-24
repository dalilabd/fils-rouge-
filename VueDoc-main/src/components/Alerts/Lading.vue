<script setup>
import { computed } from 'vue'
import Error from './Error.vue'
import Success from './Success.vue'
import { useStore } from 'vuex'

const store = useStore()

// get vlalue de messag Success
// eslint-disable-next-line camelcase
const messag_Success=computed(() => store.getters.getMessage)

// get vlalue de messag Error
// eslint-disable-next-line camelcase
const messag_Error=computed(() => store.getters.getmessageErreur)
</script>

<template>
  <div
    style="z-index: 1004;"
    class="bg-black/65 w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
  >
    <div
      v-if="messag_Success =='' && messag_Error ==''"
      class="bg-white w-1/3 shadow-md rounded-lg border p-6 flex justify-center items-center flex-col gap-7"
    >
      <img
        class="w-28 animate-spin ease-in-out delay-50"
        src="../../assets/icone/icone loading.avif"
        alt=""
      >
    </div>
    <Error v-else-if="messag_Error!==''" />
    <Success v-else-if="messag_Success !==''" />
  </div>
</template>

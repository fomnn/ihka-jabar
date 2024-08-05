<script lang="ts" setup>
const { fetchCabang } = useCabangStore()
const { fetchAdmin } = useAdminStore()

const isFetching = ref(false)

onMounted(async () => {
  isFetching.value = true
  await fetchCabang()
  await fetchAdmin()
  setTimeout(() => {
    isFetching.value = false
  }, 700)
})
</script>

<template>
  <div
    v-if="!isFetching"
    class="flex h-screen overflow-hidden"
  >
    <SuperadminSide class="w-2/12 peer hover:shadow-2xl top-0 transition-all duration-300 hover:bg-white rounded-2xl" />
    <div class="w-10/12 peer-hover:shadow shadow-xl transition-all duration-300">
      <div class="overflow-y-scroll h-screen px-10 py-4">
        <slot />
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-center h-screen"
  >
    <!-- <img src="/public/catLoading.gif" alt=""> -->
    <p class="text-lg font-semibold mt-4">
      Loading...
    </p>
  </div>
  <!-- <div /> -->
</template>

<style scoped>

</style>

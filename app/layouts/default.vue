<script lang="ts" setup>
const { fetchCabang } = useCabangStore()
const { fetchAllNews } = useBeritaStore()

const isFetching = ref(false)

onMounted(async () => {
  isFetching.value = true
  await fetchCabang()
  await fetchAllNews()
  setTimeout(() => {
    isFetching.value = false
  }, 700)
})
</script>

<template>
  <div class="">
    <UserHeader />
    <slot />
    <UserFooter />
  </div>
</template>

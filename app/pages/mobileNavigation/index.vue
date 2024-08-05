<script lang="ts" setup>
const router = useRouter()
const { cabangList } = storeToRefs(useCabangStore())

definePageMeta({
  name: 'MobileNavigation',
  layout: false,
})
</script>

<template>
  <div class="h-screen flex bg-cobalt-900 px-6 py-8 text-white">
    <div class="flex flex-col gap-2">
      <NuxtLink
        :to="{ name: 'Beranda' }"
        class="align-bottom"
      >
        Beranda
      </NuxtLink>
      <NuxtLink :to="{ name: 'About' }">
        Tentang
      </NuxtLink>
      <NuxtLink :to="{ name: 'Program' }">
        Program
      </NuxtLink>
      <NuxtLink :to="{ name: 'BeritaDaerah' }">
        Berita
      </NuxtLink>
      <div class="group relative items-center gap-1">
        BPC
        <nav
          class="flex flex-col gap-0.5 rounded-md px-2 py-2 *:text-nowrap"
        >
          <NuxtLink
            v-for="cabang in cabangList"
            :key="cabang.id"
            :to="{ name: 'BeritaCabang', params: { id: cabang.id } }"
            class="rounded-md pl-4 pr-10 hover:bg-sky-200 cursor-pointer"
          >
            {{ cabang.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
    <button
      class="text-white absolute top-4 right-4"
      @click="router.go(-1)"
    >
      <Icon
        name="material-symbols:close-rounded"
        class="text-3xl"
      />
    </button>
  </div>
</template>

<style scoped>

</style>

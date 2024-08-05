<script lang="ts" setup>
definePageMeta({
  name: 'PilihLogin',
})
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-8 -mt-4">
    <div class="flex flex-col gap-5 items-center">
      <img
        src="/img/logo.png"
        alt=""
      >
      <div class="text-center space-y-2">
        <h1 class="text-4xl font-serif">
          Pengurus IHKA Jawa Barat
        </h1>
        <p>Masuk sebagai</p>
      </div>
    </div>
    <div class="grid grid-cols-2  gap-5 justify-center items-stretch">
      <a
        href="http://localhost:5174"
        class="border flex flex-col items-center justify-end hover:border-slate-700 border-slate-300 transition-all duration-300 hover:scale-105 rounded-md text-center font-semibold px-16 py-8"
      >
        <Icon
          name="material-symbols:supervisor-account-rounded"
          class="text-5xl"
        />
        Badan Pimpinan Cabang (BPC)
      </a>
      <a
        href="http://localhost:5176"
        class="border flex flex-col items-center justify-end hover:border-slate-700 border-slate-300 transition-all duration-300 hover:scale-105 rounded-md text-center font-semibold px-16 py-8"
      >
        <Icon
          name="material-symbols:supervisor-account-rounded"
          class="text-5xl"
        />
        Badan Pimpinan Daerah (BPD) Jawa Barat
      </a>
      <a
        href="http://localhost:5175"
        class="border flex flex-col items-center justify-end hover:border-slate-700 border-slate-300 transition-all duration-300 hover:scale-105 rounded-md text-center font-semibold px-16 py-8"
      >
        <Icon
          name="clarity:administrator-solid"
          class="text-[2.5rem]"
        />
        Moderator BPC
      </a>
      <a
        href="http://localhost:5177"
        class="border flex flex-col items-center justify-end hover:border-slate-700 border-slate-300 transition-all duration-300 hover:scale-105 rounded-md text-center font-semibold px-16 py-8"
      >
        <Icon
          name="clarity:administrator-solid"
          class="text-[2.5rem]"
        />
        Moderator BPD Jawa Barat
      </a>
      <!-- <a href="#" class="cursor-not-allowed border flex flex-col items-center justify-end hover:border-slate-700 border-slate-300 transition-all duration-300 hover:scale-105 rounded-md text-center font-semibold px-16 py-8">
        <IcSharpSupervisedUserCircle class="text-5xl" />
        Super Admin
      </a> -->
    </div>
  </div>
</template>

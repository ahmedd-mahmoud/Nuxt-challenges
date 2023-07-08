<script setup></script>

<template>
  <vitePwaManifest />
  <div class="flex flex-col gap-12 items-center justify-center h-screen -m-4">
    <h1 class="text-6xl">Welcome to Mahran's shopping application</h1>
    <span class="text-sm">Best Prices in this market</span>
    <NuxtLink
      to="/home"
      class="bg-gray-500 px-16 py-4 rounded-full text-white mt-16 hover:bg-gray-400"
      >Start Shoping Now</NuxtLink
    >
  </div>
</template>

<style scoped></style>

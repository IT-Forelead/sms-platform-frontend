<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3">Settings</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <Contacts />
      </div>
      <div class="p-3">
        <SystemSettings />
      </div>
    </div>
  </div>
</template>

<script setup>
  import SystemSettings from './settings_parts/SystemSettings.vue'
</script>
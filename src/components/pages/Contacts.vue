<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold ml-2 mb-3">Contacts</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <Contacts />
      <CreateContact />
    </div>
  </div>
</template>

<script setup>
import Contacts from './contacts_parts/Contacts.vue'
import CreateContact from './contacts_parts/CreateContact.vue'
import ContactMessages from './contacts_parts/ContactMessages.vue'
</script>
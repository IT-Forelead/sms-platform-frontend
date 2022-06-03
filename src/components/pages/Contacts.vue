<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3">Contacts</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <Contacts :contacts="contacts" />
      </div>
      <div class="p-3">
        <CreateContact />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Contacts from './contacts_parts/Contacts.vue'
  import CreateContact from './contacts_parts/CreateContact.vue'
  import ContactMessages from './contacts_parts/ContactMessages.vue'
  
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import contactService from '../../services/contact.service'

  const store = useStore()

  const addContactInStore = () => {
    contactService.getContacts().then((data) => store.commit('setContacts', data))
  }

  const contacts = computed(() => {
    return store.state.contacts
  })

  onMounted(() => addContactInStore())
</script>
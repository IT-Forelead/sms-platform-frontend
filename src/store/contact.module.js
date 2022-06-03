import ContactService from '../services/contact.service';

export const contacts = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return ContactService.getContacts().then(
        contact => {
          return Promise.resolve(contact);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },

};
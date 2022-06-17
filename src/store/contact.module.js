import ContactService from '../services/contact.service';

export const contactsModule = {
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
    },
    
    create({ commit }, contactData) {
      return ContactService.createContact(contactData).then(
        contact => {
          return Promise.resolve(contact);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    update({ commit }, contactData) {
      return ContactService.updateContact(contactData).then(
        contact => {
          return Promise.resolve(contact);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    delete({ commit }, id) {
      return ContactService.deleteContact(id).then(
        contact => {
          return Promise.resolve(contact);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }

};
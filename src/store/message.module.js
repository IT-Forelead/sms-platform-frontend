import MessageService from '../services/message.service';

export const messagesModule = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return MessageService.getMessages().then(
        message => {
          return Promise.resolve(message);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }

};
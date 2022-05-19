import UserService from '../services/user.service';

export const user = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return UserService.getAllUsers().then(
        user => {
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },

};
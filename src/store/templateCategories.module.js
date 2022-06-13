import TemplateCategoriesService from '../services/templateCategories.service';

export const templateCategories = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return TemplateCategoriesService.getTemplateCategories().then(
        templateCategory => {
          return Promise.resolve(templateCategory);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    create({ commit }, tmplCatData) {
      return TemplateCategoriesService.createTemplateCategory(tmplCatData).then(
        templateCategory => {
          return Promise.resolve(templateCategory);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },

};
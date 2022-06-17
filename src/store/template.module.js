import SMSTemplateService from '../services/template.service';

export const templatesModule = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return SMSTemplateService.getSMSTemplates().then(
        template => {
          return Promise.resolve(template);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    create({ commit }, templateData) {
      return SMSTemplateService.createSMSTemplate(templateData).then(
        template => {
          return Promise.resolve(template);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    update({ commit }, templateData) {
      return SMSTemplateService.updateSMSTemplate(templateData).then(
        template => {
          return Promise.resolve(template);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    delete({ commit }, id) {
      return SMSTemplateService.deleteSMSTemplate(id).then(
        template => {
          return Promise.resolve(template);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }

};
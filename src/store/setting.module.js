import SettingService from '../services/setting.service';

export const settingsModule = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return SettingService.getSettings().then(
        setting => {
          return Promise.resolve(setting);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    update({ commit },settingData) {
      return SettingService.update(settingData).then(
        setting => {
          return Promise.resolve(setting);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    updateSMSIds({ commit }, settingData) {
      return SettingService.updateSMSIds(settingData).then(
        setting => {
          return Promise.resolve(setting);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }
};
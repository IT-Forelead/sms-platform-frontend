import HolidayService from '../services/holiday.service';

export const holidaysModule = {
  namespaced: true,
  actions: {
    get({ commit }) {
      return HolidayService.getHolidays().then(
        holiday => {
          return Promise.resolve(holiday);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    create({ commit }, holidayData) {
      return HolidayService.createHoliday(holidayData).then(
        holiday => {
          return Promise.resolve(holiday);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    update({ commit }, holidayData) {
      return HolidayService.updateHoliday(holidayData).then(
        holiday => {
          return Promise.resolve(holiday);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    updateSMSIds({ commit }, holidayData) {
      return HolidayService.updateSMSIds(holidayData).then(
        holiday => {
          return Promise.resolve(holiday);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    
    delete({ commit }, id) {
      return HolidayService.deleteHoliday(id).then(
        holiday => {
          return Promise.resolve(holiday);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  }

};
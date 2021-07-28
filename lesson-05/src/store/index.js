import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: {},
    fullPaymentValue: 0,
    categoryList: [],
    currentPage: 1,
    pagesNumber: 1,
  },

  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = Object.assign({}, state.paymentsList, payload);
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList[`page${state.currentPage}`].push(payload);
      state.paymentsList = Object.assign({}, state.paymentsList);
    },
    setCategoryList(state, category) {
      state.categoryList = category;
    },
    setPagesNumber(state, number) {
      state.pagesNumber = number;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    }
  },

  actions: {
    fetchData({commit, getters}, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = {
            "page1": [
              {"id": 1, "date": "2020-03-20", "category": "Food", "value": 169},
              {"id": 2, "date": "2020-03-21", "category": "Navigation", "value": 50},
              {"id": 3, "date": "2020-03-22", "category": "Sport", "value": 450}
            ],
            "page2": [
              {"id": 4, "date": "2019-05-23", "category": "Entertainment", "value": 969},
              {"id": 5, "date": "2019-05-24", "category": "Education", "value": 1500},
              {"id": 6, "date": "2019-05-25", "category": "Food", "value": 200}
            ],
            "page3": [
              {"id": 7, "date": "2021-07-23", "category": "Entertainment", "value": 969},
              {"id": 8, "date": "2021-07-24", "category": "Education", "value": 1500},
              {"id": 9, "date": "2021-07-25", "category": "Food", "value": 200}
            ],
          };
          const pagesNumber = Object.keys(items).length;
          resolve({[page]: items[page], pagesNumber});
        }, 500)
      }).then(result => {
        if(result[page]) {
          const paymentsList = getters.getPaymentsList;
          if(!(page in paymentsList)) {
            commit('setPaymentListData', {[page]: result[page]});
            commit('setPagesNumber', result.pagesNumber);
          }
          commit('setCurrentPage', Number(page.slice(-1)));
        }
      })
    },
    fetchCategory({commit}) {
      return new Promise((resolve) => {
        resolve(['Food', 'Navigation', 'Sport', 'Education', 'Entertainment']);
      }).then(result => {
        commit('setCategoryList', result);
      })
    }
  },

  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList,
    getCurrentPage: state => state.currentPage,
    getPagesNumber: state => state.pagesNumber,
  }
})
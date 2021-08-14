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
    chartData: {},
  },

  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = Object.assign({}, state.paymentsList, payload);
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList[`page${state.currentPage}`].push(payload);
      state.paymentsList = Object.assign({}, state.paymentsList);
    },
    removeDataFromPaymentsList(state, item){
      const i = state.paymentsList[`page${state.currentPage}`].indexOf(item);
      state.paymentsList[`page${state.currentPage}`].splice(i, 1);
    },
    editPaymentsListData(state, {item, category, value}) {
      const i = state.paymentsList[`page${state.currentPage}`].indexOf(item);
      item.category = category;
      item.value = value;
      state.paymentsList[`page${state.currentPage}`].splice(i, 1, item);
    },
    setCategoryList(state, category) {
      state.categoryList = category;
    },
    setPagesNumber(state, number) {
      state.pagesNumber = number;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setChartData(state, data) {
      state.chartData = data;
    }
  },

  actions: {
    fetchData({commit, getters}, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = {
            "page1": [
              {"id": 1, "date": "20.03.2020", "category": "Food", "value": 169},
              {"id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50},
              {"id": 3, "date": "22.03.2020", "category": "Sport", "value": 450}
            ],
            "page2": [
              {"id": 4, "date": "23.03.2020", "category": "Entertainment", "value": 900},
              {"id": 5, "date": "24.03.2020", "category": "Education", "value": 1200},
              {"id": 6, "date": "25.03.2020", "category": "Food", "value": 200}
            ],
            "page3": [
              {"id": 7, "date": "23.03.2020", "category": "Entertainment", "value": 100},
              {"id": 8, "date": "24.03.2020", "category": "Education", "value": 1500},
              {"id": 9, "date": "25.03.2020", "category": "Food", "value": 200}
            ],
          };
          const pagesNumber = Object.keys(items).length;
          let chartData = {};
          for (let pageItem in items) {
            for (let i = 0; i < items[pageItem].length; i++) {
              let currentCategory = items[pageItem][i].category;
              chartData[currentCategory] = chartData[currentCategory] ? chartData[currentCategory] + items[pageItem][i].value : items[pageItem][i].value
            }
          }
          commit('setChartData', chartData);
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
    getChartData: state => state.chartData,
  }
})
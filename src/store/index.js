import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: [
      { "date": new Date("2020-07-01").getTime(), "visits": 213 },
      { "date": new Date("2020-07-02").getTime(), "visits": 249 },
      { "date": new Date("2020-07-03").getTime(), "visits": 179 },
      { "date": new Date("2020-07-04").getTime(), "visits": 170 },
      { "date": new Date("2020-07-05").getTime(), "visits": 184 },
      { "date": new Date("2020-07-06").getTime(), "visits": 202 },
      { "date": new Date("2020-07-07").getTime(), "visits": 198 },
      { "date": new Date("2020-07-08").getTime(), "visits": 168 },
      { "date": new Date("2020-07-09").getTime(), "visits": 176 },
      { "date": new Date("2020-07-10").getTime(), "visits": 171 },
      { "date": new Date("2020-07-11").getTime(), "visits": 190 },
      { "date": new Date("2020-07-12").getTime(), "visits": 154 },
      { "date": new Date("2020-07-13").getTime(), "visits": 246 },
      { "date": new Date("2020-07-14").getTime(), "visits": 250 },
      { "date": new Date("2020-07-15").getTime(), "visits": 227 },
      { "date": new Date("2020-07-16").getTime(), "visits": 140 },
      { "date": new Date("2020-07-17").getTime(), "visits": 170 },
      { "date": new Date("2020-07-18").getTime(), "visits": 125 },
      { "date": new Date("2020-07-19").getTime(), "visits": 106 },
      { "date": new Date("2020-07-20").getTime(), "visits": 207 },
      { "date": new Date("2020-07-21").getTime(), "visits": 222 },
      { "date": new Date("2020-07-22").getTime(), "visits": 198 },
      { "date": new Date("2020-07-23").getTime(), "visits": 204 },
      { "date": new Date("2020-07-24").getTime(), "visits": 213 },
      { "date": new Date("2020-07-25").getTime(), "visits": 145 },
      { "date": new Date("2020-07-26").getTime(), "visits": 166 },
      { "date": new Date("2020-07-27").getTime(), "visits": 163 },
      { "date": new Date("2020-07-28").getTime(), "visits": 135 },
      { "date": new Date("2020-07-29").getTime(), "visits": 45 }
    ]
  },
  getters: {
    dataForChart(state) {
      return state.chartData;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

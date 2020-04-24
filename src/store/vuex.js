import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    shopDatas: [],
    maxshop: false,
    carflag: false,
    clearcar: null,
    receiveInfo: [{
      "name": "王某某",
      "phone": "13811111111",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "北京市",
      "cityId": 110100,
      "city": "市辖区",
      "countyId": 110106,
      "county": "海淀区",
      "add": "上地十街辉煌国际西6号楼319室",
      "default": true
    }, {
      "name": "李某某",
      "phone": "13811111111",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "北京市",
      "cityId": 110100,
      "city": "市辖区",
      "countyId": 110106,
      "county": "海淀区",
      "add": "上地十街辉煌国际东6号楼350室",
      "default": false
    }]
  },
  getters: {
    totalcount(state) {
      var count = 0;
      state.shopDatas.forEach((goods) => {
        count += goods.count;
      })
      return count;
    },
    totalprice(state) {
      var price = 0;
      state.shopDatas.forEach((goods) => {
        price += goods.count * goods.price;
      })
      return price;
    },
    totalcheckedgoods(state) {
      var allchecked = true;
      state.shopDatas.forEach((goods) => {
        if (!goods.checked) {
          allchecked = false;
          return;
        }
      })
      return allchecked;
    },
    checkedcount(state) {
      var checkedcount = 0;
      state.shopDatas.forEach((goods) => {
        if (goods.checked) {
          checkedcount += goods.count;
        }
      })
      return checkedcount;
    },
    checkedprice(state) {
      var price = 0;
      state.shopDatas.forEach((goods) => {
        if (goods.checked) {
          price += goods.count * goods.price;
        }
      })
      return price;
    },
    checkedgoods(state) {
      var checkedgoods = [];
      state.shopDatas.forEach((goods) => {
        if (goods.checked) {
          checkedgoods.push(goods)
        }
      })
      return checkedgoods;
    }
  },
  mutations: {
    addShop(state, data) {
      var boff = true;
      state.shopDatas.forEach((goods) => {
        if (goods.sku_id === data.info.sku_id) {
          goods.count += data.count;
          boff = false;
          if (goods.count > data.info.limit_num) {
            goods.count -= data.count;
            state.maxshop = true;
          }
        }
      });
      if (boff) {
        var goodslist = data.info;
        Vue.set(goodslist, 'count', data.count);
        Vue.set(goodslist, 'checked', true)
        state.shopDatas.push(goodslist);
      }
    },
    delshops(state, id) {
      state.shopDatas.forEach((goods, index) => {
        if (goods.sku_id === id) {
          state.shopDatas.splice(index, 1);
        }
      })
    },
    closepopup(state) {
      state.maxshop = false;
    },
    hidcar(state) {
      state.clearcar = setTimeout(() => {
        state.carflag = false;
      }, 500);
    },
    showcar(state) {
      clearTimeout(state.clearcar);
      state.carflag = true;
    },
    increase(state, data) {
      state.shopDatas.forEach((goods) => {
        if (goods.sku_id === data.sku_id) {
          goods.count++;
          if (goods.count >= data.limit_num) {
            goods.count = data.limit_num;
            state.maxshop = true;
          }
        }
      });
    },
    reduce(state, data) {
      state.shopDatas.forEach((goods) => {
        if (goods.sku_id === data.sku_id) {
          goods.count--;
          if (goods.count <= 1) {
            goods.count = 1;
          }
        }
      });
    },
    checked(state, data) {
      state.shopDatas.forEach((goods) => {
        if (goods.sku_id === data.sku_id) {
          goods.checked = !goods.checked;
        }
      })
    },
    allcheckedgoods(state, totalchecked) {
      state.shopDatas.forEach((goods) => {
        goods.checked = !totalchecked;
      })
    },
    delchecked(state) {
      var length = state.shopDatas.length;
      for (let i = length; i > 0; i--) {
        if (state.shopDatas[i - 1].checked) {
          state.shopDatas.splice(i - 1, 1);
        }
      }
    }
  }
})

export default store;
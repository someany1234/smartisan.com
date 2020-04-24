<template>
  <li class="nav-cart"
      @mouseenter="showCar"
      @mouseleave="hidCar">
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span class="cart-empty-num"
          :class="{'cart-num':totalcount>0}">
      <i>{{ totalcount }}</i>
    </span>
    <div class="nav-cart-wrapper"
         v-show="carflag">
      <div class="nav-cart-list">
        <div class="empty"
             v-if="totalcount<=0">
          <h3>购物车为空</h3>
          <p>您还没有选购任何商品，现在前往商城选购吧!</p>
        </div>
        <div class="full"
             v-else>
          <div class="nav-cart-items">
            <ul>
              <li class="clear"
                  v-for="item in shopCar"
                  :key="item.sku_id">
                <div class="cart-item js-cart-item cart-item-sell">
                  <div class="cart-item-inner">
                    <div class="item-thumb">
                      <img :src="item.ali_image"
                           alt="">
                    </div>
                    <div class="item-desc">
                      <div class="cart-cell">
                        <h4>
                          <a href="#/item/100027401">{{ item.title }}</a>
                        </h4>
                        <p class="attrs">
                          <span>{{ item.spec_json.show_name }}</span>
                        </p>
                        <h6>
                          <span class="price-icon">¥</span>
                          <span class="price-num">{{ item.price }}</span>
                          <span class="item-num">x {{ item.count }}</span>
                        </h6>
                      </div>
                    </div>
                    <div class="del-btn"
                         @click="delshop(item.sku_id)">删除</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav-cart-total">
            <p>
              共
              <strong class="ng-binding">{{ totalcount }}</strong> 件商品
            </p>
            <h5>
              合计：
              <span class="price-icon">¥</span>
              <span class="price-num ng-binding"
                    ng-bind="cartMenu.totalPrice">{{ totalprice }}</span>
            </h5>
            <h6>
              <router-link class="nav-cart-btn"
                           to="/cart">去购物车</router-link>

            </h6>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    shopCar () {
      return this.$store.state.shopDatas;
    },
    totalcount () {
      return this.$store.getters.totalcount;
    },
    totalprice () {
      return this.$store.getters.totalprice;
    },
    carflag () {
      return this.$store.state.carflag;
    }
  },
  methods: {
    delshop (id) {
      this.$store.commit("delshops", id)
    },
    hidCar () {
      this.$store.commit("hidcar")
    },
    showCar () {
      this.$store.commit("showcar")
    }
  }
}
</script>
<style>
</style>

<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img :alt="goods.name"
             :src="goods.sku_info[itemIndex].ali_image"
             style="opacity: 1;">
      </div>
      <h6>{{ goods.name }}</h6>
      <h3>{{ goods.name_title }}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="(goodscolor,index) in goods.sku_info"
              :key="goodscolor.id"
              @click="changeitem(index)">
            <a href="javascript:;"
               :class="{'active':index==itemIndex}">
              <img :src="'http://img01.smartisanos.cn/' + goodscolor.spec_json.image+'20X20.jpg'"
                   :title="goodscolor.spec_json.show_name">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <!-- <a href="javascript:;"
             target="_blank">查看详情</a> -->
          <router-link :to="{path:'/item',query:{itemId:goods.sku_info[itemIndex].sku_id}}">查看详情</router-link>
        </span>
        <span class="item-blue-btn"
              @click="addShopList(goods.sku_info[itemIndex])">加入购物车</span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i>
        <span>{{ goods.price }}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <router-link :to="{path:'/item',query:{itemId:goods.sku_info[itemIndex].sku_id}}"></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemIndex: 0
    }
  },
  props: {
    goods: Object,
  },
  methods: {
    changeitem (index) {
      this.itemIndex = index;
    },
    addShopList (data) {
      var itemData = { info: data, count: 1 }
      this.$store.commit('addShop', itemData)
    }
  }
}
</script>
<style>
</style>




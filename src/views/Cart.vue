<template>
  <CardCart
    v-for="something in listOfItems"
    :key="something.id"
    :itemsTaken="something"
    @add="changePrice"
    @subtract="changePrice"
  />
  <div class="mx-auto bg-dark text text-white text-center p-3 mb-5">
    <h3>TOTAL PRICE: PHP {{ sumPrice }}.00</h3>
  </div>
</template>

<script>
import CardCart from "@/components/CardCart.vue";

export default {
  name: "Cart",
  components: {
    CardCart,
  },

  data() {
    return {
      allInCart: [],
      totalPrice: 0,
      change: 0,
    };
  },

  computed: {
    listOfItems: function () {
      return this.allInCart.map(function (product) {
        return product ? JSON.parse(product) : "";
      });
    },
    sumPrice: function () {
      let price = 0;
      this.listOfItems.forEach((lunch) => {
        price += lunch.price * lunch.orderQuan;
      });
      if (this.change != 0) {
        price += this.change;
      }
      return price;
    },
  },

  created() {
    this.allInCart = this.$route.query.key.split("<=>");
  },

  methods: {
    changePrice(amount) {
      this.change += amount;
      console.log(amount);
    },
  },
};
</script>

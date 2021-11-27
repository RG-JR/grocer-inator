<template>
  <div class="container-fluid text-white mb-5">
    <div class="row">
      <div class="col-3 bg-dark text-center mx-auto rounded-3">
        <h3 class="p-1">{{ itemsTaken.name }}</h3>
        <img class="img-fluid rounded" :src="itemsTaken.img" />
        <h5 class="pt-3">Php {{ itemsTaken.price }}.00</h5>
        <div class="input-group border rounded-3 my-3">
          <button @click="decrement" class="btn btn-dark" type="button">
            -
          </button>
          <input
            v-model="quantity"
            type="text"
            class="form-control text-center"
          />
          <button @click="increment" class="btn btn-dark" type="button">
            +
          </button>
        </div>

        <p class="fs-6" v-if="error != ''">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCart",
  emits: ["add", "subtract"],

  data() {
    return { quantity: this.itemsTaken.orderQuan, error: "" };
  },

  methods: {
    decrement() {
      if (this.quantity <= 0) {
        this.error = "You cannot go below zero";
      } else {
        this.error = "";
        this.quantity--;
        this.$emit(
          "subtract",
          -(this.itemsTaken.price * (this.quantity - this.itemsTaken.orderQuan))
        );
      }
    },
    increment() {
      if (this.quantity >= this.itemsTaken.quantity) {
        this.error = "You cannot go above the item's stock";
      } else {
        this.error = "";
        this.quantity++;
        this.$emit(
          "add",
          this.itemsTaken.price * (this.quantity - this.itemsTaken.orderQuan)
        );
      }
    },
  },

  props: { itemsTaken: Object },
};
</script>

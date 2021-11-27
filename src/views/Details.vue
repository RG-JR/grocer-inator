<template>
  <div class="container-fluid text-white py-3">
    <div class="row">
      <div class="col-3 bg-dark text-center mx-auto rounded-3">
        <h1 class="p-1">{{ $route.query.name }}</h1>
        <h3 class="p-1">{{ $route.query.categ }}</h3>
        <img class="img-fluid rounded" :src="$route.query.img" />
        <p class="p-1">{{ $route.query.desc }}</p>
        <h5 class="p-1">Php {{ $route.query.price }}.00</h5>
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

        <button class="btn btn-light m-3" @click="grabbed">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  emits: ["take"],

  data() {
    return { quantity: 1, error: "" };
  },

  methods: {
    decrement() {
      if (this.quantity <= 0) {
        this.error = "You cannot go below zero";
      } else {
        this.error = "";
        this.quantity--;
      }
    },
    increment() {
      if (this.quantity >= this.$route.query.quantity) {
        this.error = "You cannot go above the item's stock";
      } else {
        this.error = "";
        this.quantity++;
      }
    },
    grabbed() {
      this.$emit("take", {
        id: this.$route.query.id,
        name: this.$route.query.name,
        price: this.$route.query.price,
        img: this.$route.query.img,
        quantity: this.$route.query.quantity,
        orderQuan: this.quantity,
      });
    },
  },
};
</script>

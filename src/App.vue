<template>
  <div class="mx-auto bg-dark text text-white text-center p-3 mb-5">
    <h1>A La Carte-inator</h1>
    <router-link to="/">Menu</router-link>
    <router-link
      :to="{
        name: 'Cart',
        query: { key: thing },
      }"
      class="btn btn-light m-3"
      >Cart</router-link
    >
  </div>
  <router-view @take="call" />
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      inCart: [],
    };
  },

  methods: {
    call(took) {
      this.inCart.push(took);
    },
  },

  computed: {
    thing: function () {
      return this.inCart
        .map(function (word) {
          return JSON.stringify(word);
        })
        .join("<=>");
    },
  },
};
</script>

<style>
body {
  background-image: url("https://images.unsplash.com/photo-1592064064956-30807b590c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  overflow: overlay;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #2c2c2c;
  border-radius: 100px;
}
</style>

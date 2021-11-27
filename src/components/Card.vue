<template>
  <div class="container-fluid text-white mb-5">
    <div class="row">
      <div class="col-3 bg-dark text-center mx-auto rounded-3">
        <h3 class="p-1">{{ list.name }}</h3>
        <img class="img-fluid rounded" :src="list.img" />
        <h5 class="pt-3">Php {{ list.price }}.00</h5>
        <router-link
          :to="{
            name: 'Details',
            params: { pathname: list.id },
            query: {
              id: list.id,
              name: list.name,
              categ: list.category.join(', '),
              img: list.img,
              desc: list.desc,
              price: list.price,
              quantity: list.quantity,
            },
          }"
          class="btn btn-light m-3"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    list: Object,
  },
};
</script>

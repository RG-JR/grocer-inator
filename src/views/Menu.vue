<template>
  <Card v-for="product in available" :key="product.id" :list="product" />
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Menu",
  components: {
    Card,
  },

  computed: {
    available: function () {
      return this.items.filter(function (product) {
        return product.quantity > 0;
      });
    },
  },

  data() {
    return {
      items: [
        {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 10,
          category: ["Meat"],
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
          desc: "Food of the Gods, Technoblade would not approve though...",
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 5,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          desc: "Happy from Fairy Tail and Gollum/Smeagol likes this. It's raw though...",
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          desc: "Apparently this came first...",
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 11,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          desc: "A certain religion doesn't like this...",
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 0,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          desc: "In Spanish. translates to I'm sauce.",
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 72,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          desc: "No wait... THIS came first XD",
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 12,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          desc: "Pre-evolution of Bacon, I think another religion doesn't like this either",
        },
      ],
    };
  },
};
</script>

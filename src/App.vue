<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-12">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://res.cloudinary.com/andresjoelcr/image/upload/v1636560107/resources-test/davivienda-logo-200_ddrb6e.png"
                alt=""
                width="200"
                class="d-inline-block align-text-top"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>

    <div class="row no-gutters">
      <div
        class="col-12 col-sm-4 mt-4 ps-5 animate__animated animate__fadeInLeft"
      >
        <h3>Nuestros Productos</h3>
        <div class="list-group mt-3 pe-3" id="list-tab" role="tablist">
          <a
            v-for="(product, index) in products"
            :key="index"
            class="list-group-item list-group-item-action"
            @click="loadCreditCardData(product)"
            >{{ product.name }}</a
          >
        </div>
      </div>
      <div class="col-12 col-sm-8">
        <template v-if="hasSelect">
          <div class="tab-content" id="nav-tabContent">
            <Card :product="productoSelected" />
          </div>
        </template>
        <template v-else>
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              mt-4
              animate__animated animate__fadeInRight
            "
          >
            <h3>Selecciona un Producto</h3>
            <img
              src="https://res.cloudinary.com/andresjoelcr/image/upload/v1636562993/resources-test/credit-card-empty_f6ukrz.png"
              class="mt-3"
              alt="no-select-product"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      products: [],
      productoSelected: {},
      hasSelect: false,
    };
  },
  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios
        .get("https://my-json-server.typicode.com/stebanjimenezg/test/db")
        .then((response) => {
          this.products = response.data.accounts;
          console.log(this.products);
        });
    },

    loadCreditCardData(product) {
      this.productoSelected = { ...product };
      this.hasSelect = true;

      console.log(this.productoSelected);
    },
  },
};
</script>

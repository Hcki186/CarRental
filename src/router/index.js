import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import("../views/HomePage.vue")
  },

  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () =>
      import("../views/AboutUs.vue")
  },

  {
    path: "/RentalCar",
    name: "RentalCar",
    component: () =>
      import("../views/RentalCar.vue")
  },

  {
    path: "/RentalCar/:id",
    name: "DetailCar",
    props: true,
    component: () =>
      import("../views/DetailCar.vue")
  },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });


export default router;
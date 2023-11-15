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
      import("../views/DetailCar.vue"),
  },

  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import("../views/notFoundPage.vue"),
  },
];

const router = new VueRouter({
    mode: "history",
    
    base: process.env.BASE_URL,
    routes,

    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        };
      }
      if (savedPosition) {
        return savedPosition;
      }
      return {x: 0, y: 0};
    }
  });


export default router;
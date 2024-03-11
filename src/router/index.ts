import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "../layouts/DashboardLayout.vue";
import EmptyLayout from "../layouts/EmptyLayout.vue";

import { useLoginStore } from "../store/useLoginStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    meta: { layout: EmptyLayout, auth: false }
  },
  {
    path: "/user",
    meta: { layout: DashboardLayout, auth: true },
    children: [
      {
        path: "",
        name: "Users",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/UserListView.vue"),
      },
      {
        path: "create",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/UserCreateView.vue"),
      },
      {
        path: "update/:id",
        name: "user-update",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/UserUpdateView.vue"),
      }
    ]
  },
  {
    path: "/customer",
    meta: { layout: DashboardLayout, auth: true },
    children: [
      {
        path: "",
        name: "Customers",
        component: () =>
          import(/* webpackChunkName: "customers" */ "../views/customer/CustomerListView.vue"),
      },
      {
        path: "create",
        component: () =>
          import(/* webpackChunkName: "customers" */ "../views/customer/CustomerCreateView.vue"),
      },
      {
        path: "update/:id",
        name: "customer-update",
        component: () =>
          import(/* webpackChunkName: "customers" */ "../views/customer/CustomerUpdateView.vue"),
      }
    ]
  },
  {
    path: "/location",
    meta: { layout: DashboardLayout, auth: true },
    children: [
      {
        path: "",
        name: "Locations",
        component: () =>
          import(/* webpackChunkName: "location" */ "../views/location/LocationListView.vue"),
          meta: { layout: DashboardLayout },
      },
      {
        path: "create",
        component: () =>
          import(/* webpackChunkName: "location" */ "../views/location/LocationCreateView.vue"),
          meta: { layout: DashboardLayout },
      },
    ]
  },
  {
    path: "/movies",
    name: "Movies",
    component: () =>
      import(/* webpackChunkName: "movies" */ "../views/MoviesView.vue"),
      meta: { layout: DashboardLayout, auth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFoundView.vue"),
      meta: { layout: DashboardLayout },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "bg-gray-200 rounded font-bold stroke-2"
});

router.beforeEach((to, __, next) => {
  const store = useLoginStore();

  if (to.meta.auth) {
    if (store.login.expired) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;

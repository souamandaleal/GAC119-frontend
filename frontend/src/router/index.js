import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView";
import ForgotPassView from "../views/ForgotPassView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot-password",
    name: "forgotpass",
    component: ForgotPassView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

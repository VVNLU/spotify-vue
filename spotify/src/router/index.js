import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import ForgetPasswordPage from "../pages/ForgetPasswordPage.vue";
import PremiumPage from "../pages/PremiumPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      component: ForgetPasswordPage,
    },
    {
      path: "/premium",
      name: "premium",
      component: PremiumPage,
    },
  ],
});
export default router;

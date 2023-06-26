import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import ForgetPasswordPage from "../pages/ForgetPasswordPage.vue";
import PremiumPage from "../pages/PremiumPage.vue";
import SupportPage from "../pages/SupportPage.vue";
import ProfileEdittingPage from "../pages/ProfileEdittingPage.vue";
import HomeContent from "../components/HomeContent.vue";
import HomeAlbum from "../components/HomeAlbum.vue";
import Search from "../components/Search.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      children: [
        {
          path: "content",
          component: HomeContent,
        },
        {
          path: "album",
          component: HomeAlbum,
        },
        {
          path: "search",
          component: Search,
        },
      ],
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
    {
      path: "/support",
      name: "support",
      component: SupportPage,
    },
    {
      path: "/profile/edit",
      name: "profileEdit",
      component: ProfileEdittingPage,
    },
  ],
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import { getAccessToken } from "../api/auth";
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
import Genre from "../components/Genre.vue";
import Collection from "../components/Collection.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/content",
      name: "content",
      component: HomeContent,
    },
    {
      path: "/album/:id",
      name: "album",
      component: HomeAlbum,
    },

    {
      path: "/search",
      name: "search",
      component: Search,
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
    {
      path: "/genre/:id",
      name: "genre",
      component: Genre,
    },
    {
      path: "/collection",
      name: "collection",
      component: Collection,
    },
  ],
});

router.beforeEach((to) => {
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    to.name !== "forgetpassword" &&
    localStorage.getItem("firebaseToken") === null
  ) {
    return { name: "login" || "register" || "forgetpassword" };
  }
});
router.beforeEach((to) => {
  if (to.name === "login" && localStorage.getItem("firebaseToken") !== null) {
    return { name: "home" };
  }
});
export default router;

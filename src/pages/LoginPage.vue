<template>
  <div class="login">
    <div class="loginForm">
      <div class="loginTitle">登入到Spotify</div>
      <div class="chooseUserBtn">
        <button @click="GoogleLogin()">
          <img src="../assets/logo/Google.png" alt="Google" /> 以 Google
          帳戶繼續
        </button>
        <button>
          <img src="../assets/logo/Facebook.png" alt="Facebook" />以 Facebook
          帳戶繼續
        </button>
        <button>
          <img src="../assets/logo/Apple.png" alt="Apple" />以 Apple 帳戶繼續
        </button>
      </div>
      <hr class="style-two" />
      <form class="loginInfo" @submit.prevent>
        <div class="inputTitle">
          <p>電子信箱或使用者名稱</p>
          <input
            class="userInput emailInput"
            v-model="email"
            type="email"
            placeholder="電子信箱或使用者名稱"
          />
        </div>
        <div class="inputTitle">
          <p>密碼</p>
          <input
            class="userInput PWSInput"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="密碼"
          />
          <a
            id="showEye"
            class="action-label icon"
            :class="showPassword ? 'showPassword' : '!showPassword'"
            ><i
              @click="togglePassword"
              :class="
                showPassword ? 'mdi mdi-eye-outline' : 'mdi mdi-eye-off-outline'
              "
            ></i>
          </a>
        </div>
        <div class="rememberBtn">
          <label for="rememberMe">
            <a
              id="rememberMe"
              class="action-label icon"
              :class="rememberAccount ? 'rememberAccount' : 'rememberAccount'"
            >
              <i
                @click="toggleremember"
                :class="
                  rememberAccount
                    ? 'mdi mdi-toggle-switch'
                    : 'mdi mdi-toggle-switch-off'
                "
              ></i>
              記住我</a
            ></label
          >
        </div>
        <button class="loginBtn" @click="login()">登入</button>
        <router-link to="/ForgetPassword" class="forgetPWS"
          >忘記密碼？</router-link
        >
      </form>
      <hr class="style-two" />
      <div>
        未註冊帳戶？&ensp;<router-link to="/register" class="register"
          >註冊 Spotify</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/index.js";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const rememberAccount = ref(false);
const providerGoogle = new GoogleAuthProvider();

const togglePassword = function () {
  showPassword.value = !showPassword.value;
};

const toggleremember = () => {
  rememberAccount.value = !rememberAccount.value;
};

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(userCredential);
    const user = userCredential.user;
    console.log(user);
    router.replace("/");
  } catch (e) {
    alert("您尚未註冊或帳號密碼有誤");
  }
};

const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, providerGoogle);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

const GoogleRedirect = async () => {
  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
</script>

<style sopced>
.login {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to bottom, #1a1a1a, #000000);
}
.loginForm {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: black;
  place-items: center;
  row-gap: 40px;
  width: 730px;
  margin: 32px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 85px;
}
.loginTitle {
  color: white;
  font-size: 45px;
  font-weight: bold;
  margin-top: 80px;
}
.chooseUserBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chooseUserBtn > button {
  display: flex;
  align-items: center;
  width: 320px;
  height: 50px;
  margin: 5px;
  border: #727272 1px solid;
  background-color: #000;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
}
.chooseUserBtn button:hover {
  border: #fff 1px solid;
}
.chooseUserBtn img {
  width: 10%;
  margin-left: 25px;
  margin-right: 35px;
}
hr.style-two {
  width: 70%;
  margin: 0 auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(235, 230, 230, 0),
    rgba(180, 168, 168, 0.75),
    rgba(235, 230, 230, 0)
  );
}
.loginInfo {
  display: flex;
  place-items: center;
  row-gap: 10px;
}
.inputTitle p {
  font-size: 14px;
  font-weight: bold;
}
.userInput {
  display: flex;
  width: 320px;
  height: 45px;
  border-radius: 5px;
  border: #424242 1.5px solid;
  background: #121212;
  font-size: 18px;
  text-indent: 10px;
  color: white;
}
.userInput:hover {
  border: #fff 1.5px solid;
}
.inputTitle {
  position: relative;
}
i {
  font-size: 30px;
  color: gray;
}
#showEye {
  position: absolute;
  top: 50px;
  left: 280px;
}
#rememberMe {
  display: inline-flex;
  align-items: center;
}
.mdi-toggle-switch {
  color: #1ed760;
}
.loginBtn {
  align-items: center;
  width: 320px;
  height: 50px;
  margin: 5px;
  background-color: #1ed760;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  border: none;
}
.loginBtn:hover {
  transform: scale(1.05);
}
.forgetPWS {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: white;
}
.register {
  color: white;
  text-decoration: none;
}
.forgetPWS:hover,
.register:hover {
  color: #1ed760;
  cursor: pointer;
}
.register:checked {
  border: 4px solid #ffffff;
}
</style>

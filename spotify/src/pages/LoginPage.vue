<template>
  <div class="login">
    <div class="loginForm">
      <div class="loginTitle">登入到Spotify</div>
      <div class="chooseUserBtn">
        <button>
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
        <div class="emailTitle">電子信箱或使用者名稱</div>
        <input
          v-model="email"
          type="email"
          placeholder="電子信箱或使用者名稱"
        />
        <div class="pwdTitle">密碼</div>
        <input
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
        <a class="action-label icon">
          <i class="mdi mdi-toggle-switch-off"></i> </a
        ><span>記住我</span>
        <button class="loginBtn" @click="login()">登入</button>
        <router-link to="/ForgetPassword" class="forgetPwd"
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index.js";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const togglePassword = function () {
  showPassword.value = !showPassword.value;
};

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    console.log(user);
  } catch (e) {
    alert("您尚未註冊或帳號密碼有誤");
  }
};
</script>

<style sopced>
.login {
  display: flex;
  align-items: center;
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
.emailTitle,
.pwdTitle {
  font-size: 14px;
  font-weight: bold;
}
input {
  position: relative;
  width: 320px;
  height: 45px;
  border-radius: 5px;
  border: #424242 1.5px solid;
  background: #121212;
  font-size: 18px;
  text-indent: 10px;
  color: white;
}
input:hover {
  border: #fff 1.5px solid;
}
i {
  font-size: 30px;
  color: gray;
}
#showEye {
  position: absolute;
  bottom: -65px;
  right: 480px;
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
.forgetPwd {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: white;
}
.register {
  color: white;
  text-decoration: none;
}
.forgetPwd:hover,
.register:hover {
  color: #1ed760;
  cursor: pointer;
}
.register:checked {
  border: 4px solid #ffffff;
}
</style>

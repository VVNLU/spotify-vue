<template>
  <div class="signUp">
    <div class="upperHalf">
      <router-link to="/" class="singupLogo">
        <img src="../assets/logo/logo_black.png" alt="spotify"
      /></router-link>
      <div class="signupTitle">免費註冊即可開始聆聽。</div>
      <div class="otherAccountBtn">
        <button class="FbBtn">
          <img src="../assets/logo/Facebook_white.png" alt="facebook" />
          使用Facebook帳號註冊
        </button>
        <button class="googleBtn">
          <img src="../assets/logo/Google.png" alt="google" />
          使用Google帳號註冊
        </button>
      </div>
    </div>
    <div class="dividingLine">
      <span class="line"></span>
      <span class="text">或 者</span>
      <span class="line"></span>
    </div>
    <div class="lowerHalf">
      <div class="formTitle">使用電子郵件地址註冊</div>
      <form @submit.prevent>
        <label for="emailAdd" class="emailAddTitle"
          >你的電子郵件地址是什麼？</label
        >
        <input
          id="emailAdd"
          v-model="email"
          type="email"
          placeholder="輸入你的電子郵件地址"
        />
        <label for="password" class="passwordTitle">創建密碼</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="創建密碼"
          minlength="6"
        />
        <span class="showWords">密碼需6個字以上。</span>
        <label for="name" class="nameTitle">我們該如何稱呼你？</label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="輸入個人資料名稱"
        />
        <div class="showWords">這會顯示在你的個人資料上。</div>

        <label for="birthday" class="bdTitle">你的出生日期是？</label>
        <input id="birthday" v-model="birthday" type="date" />
        <label for="gender" class="genderTitle">你的性別是什麼？</label>
        <div class="chooseGender">
          <input id="male" type="radio" value="male" name="gender" /><label
            for="male"
            >男</label
          >
          <input id="female" type="radio" value="female" name="gender" /><label
            for="female"
            >女</label
          >
          <input
            id="nobinary"
            type="radio"
            value="nobinary"
            name="gender"
          /><label for="nobinary">非二元性別</label>
          <input id="other" type="radio" value="other" name="gender" /><label
            for="other"
            >其他</label
          >
          <input
            id="unwillingToExplain"
            type="radio"
            value="unwillingToExplain"
            name="gender"
          /><label for="unwillingToExplain">不願說明</label>
        </div>
      </form>
      <div class="container">
        <label for="message">
          <input id="message" type="checkbox" value="message" /><span
            class="checkmark"
          ></span
          >我不希望接收來自Spotify的推廣消息</label
        >
        <label for="shareData">
          <input id="shareData" type="checkbox" value="shareData" /><span
            class="checkmark"
          ></span
          >我同意與Spotify 的內容提供商分享註冊數據，以用於市場推廣目的。</label
        >
      </div>
      <div class="agreemant">
        點擊註冊即表示你同意Spotify 的<router-link to="" class="terms"
          >使用條款與條件。</router-link
        >
      </div>
      <div class="gatherInfo">
        如需詳細了解Spotify
        如何收集、使用、分享和保護你的個人數據，請查看<router-link
          to="/"
          class="policy"
          >Spotify的隱私政策</router-link
        >。
      </div>
      <button class="submitBtn" @click="signup">註冊</button>
      <div class="haveAccount">
        已有帳號？<router-link to="login" class="loginRouter">登錄</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/index";
import { useRouter } from "vue-router";
import { getAccessToken } from "../api/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const birthday = ref("");
const router = useRouter();

const signup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    const getSpotifyToken = await getAccessToken();
    localStorage.setItem("firebaseToken", user.accessToken);
    console.log(user);
    await updateProfile(user, {
      displayName: name.value,
    });
    localStorage.setItem("username", user.displayName);
    router.replace("/");
    return user;
  } catch (e) {
    alert("密碼需6個字以上");
    throw new Error(e);
  }
};
</script>
<style>
.signUp {
  background-color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
}
.upperHalf {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
}
.singupLogo {
  margin-top: 20px;
}
.signupTitle {
  font-size: 32px;
  font-weight: bold;
}
.otherAccountBtn {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.otherAccountBtn > button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
}
.FbBtn {
  color: white;
  background: #405a93;
  border: none;
}
.googleBtn {
  background: white;
  color: #535353;
}
.otherAccountBtn > button:hover {
  transform: scale(1.05);
}
.otherAccountBtn img {
  width: 8%;
  margin-right: 15px;
}
.dividingLine {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.line {
  display: inline-block;
  width: 11%;
  border-top: 1px solid #cccccc;
}
.text {
  color: #7f7f7f;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
}
.lowerHalf {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formTitle {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  row-gap: 10px;
}
#emailAdd,
#password,
#name,
#birthday {
  width: 100%;
  height: 42px;
  border: #878787 1.5px solid;
  border-radius: 5px;
  text-indent: 10px;
  font-size: 16px;
  background: white;
}
#emailAdd:hover,
#password:hover,
#name:hover,
#birthday:hover {
  border: #000 1.5px solid;
}
.emailAddTitle,
.passwordTitle,
.nameTitle,
.genderTitle,
.bdTitle {
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
}
.showWords {
  font-size: 14px;
}
.chooseGender input {
  margin: 0 10px;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 30px;
  row-gap: 30px;
}

.agreemant,
.gatherInfo {
  font-size: 12px;
  margin-top: 15px;
}
.terms,
.policy,
.loginRouter {
  color: #1db954;
}
.terms:hover,
.policy:hover,
.loginRouter:hover {
  color: #1ed760;
}

.submitBtn {
  width: 130px;
  height: 55px;
  border-radius: 50px;
  border: none;
  background: #1ed760;
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
}
.submitBtn:hover {
  transform: scale(1.05);
  background: #1fdf64;
}
.haveAccount {
  margin-bottom: 150px;
}
</style>

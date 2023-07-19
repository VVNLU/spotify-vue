<template>
  <div class="supportPage">
    <div class="gradientbar">
      <Navbar class="supportNavbar" />
      <div class="support">
        <div class="customerSupport">
          <p class="SPOTIFY">SPOTIFY 客戶支援</p>
          <p class="supportTitle">我們可以幫上什麼忙嗎？</p>
          <div class="logined" v-if="isName" :name="userName">
            {{ userName() }},你好
          </div>
          <div class="helpFaster" v-else>
            <router-link to="login">登入</router-link>可更快獲得協助
          </div>
          <div class="supportSearchInput">
            <input type="text" placeholder="搜尋" /><a class="action-label icon"
              ><i class="mdi mdi-magnify"></i
            ></a>
          </div>
          <div class="illustrate">
            <a
              href="https://support.spotify.com/tw/category/payment-help/"
              class="pay"
            >
              <p>付款說明中心</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
            <a
              href="https://support.spotify.com/tw/category/plan-help/"
              class="plan"
            >
              <p>方案說明中心</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
            <a
              href="https://support.spotify.com/tw/category/app-help/"
              class="App"
            >
              <p>App說明中心</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
            <a
              href="https://support.spotify.com/tw/category/device-help/"
              class="device"
            >
              <p>裝置說明中心</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
            <a
              href="https://support.spotify.com/tw/category/safety-privacy/"
              class="safety"
            >
              <p>安全性與隱私權</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
            <a
              href="https://support.spotify.com/tw/category/account-help/"
              class="account"
            >
              <p>帳戶說明中心</p>
              <img
                src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="tips">
      <p class="tipTitle">小秘訣</p>
      <div class="tipBtn">
        <button
          onclick="
            location.href=
              'https://support.spotify.com/tw/article/reset-password/'
          "
        >
          無法重設密碼<a class="action-label icon"
            ><i class="mdi mdi-chevron-right"></i
          ></a>
        </button>
        <button
          onclick="
            location.href='https://support.spotify.com/tw/article/cannot-remember-login/'"
        >
          忘記登入資料<a class="action-label icon"
            ><i class="mdi mdi-chevron-right"></i
          ></a>
        </button>
        <button
          onclick="
            location.href='https://support.spotify.com/tw/article/facebook-login-help/'"
        >
          Facebook 帳戶登入協助<a class="action-label icon"
            ><i class="mdi mdi-chevron-right"></i
          ></a>
        </button>
        <button
          onclick="
            location.href='https://support.spotify.com/tw/article/payment-methods/'"
        >
          付款方式<a class="action-label icon"
            ><i class="mdi mdi-chevron-right"></i
          ></a>
        </button>
        <button
          onclick="
            location.href='https://support.spotify.com/tw/article/start-or-join-family-plan/'"
        >
          開始訂閱或加入 Premium Family<a class="action-label icon"
            ><i class="mdi mdi-chevron-right"></i
          ></a>
        </button>
      </div>
    </div>
    <div class="browseCommunities">
      <p class="browseTitle">瀏覽我們的社群</p>
      <p>有問題嗎？從我們的全球專業粉絲社群尋找答案。</p>
      <button
        class="browseBtn"
        onclick="location.href='https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers?_ga=2.11189620.1737755475.1686481902-1571868643.1684332844&_gac=1.127477247.1684564880.CjwKCAjwvJyjBhApEiwAWz2nLeHUdPaajBMN28eBkcxulqkFNs1YRoTgEX2WQl3PlBt8tcqLtnIGFxoC15AQAvD_BwE'"
      >
        前往社群
      </button>
    </div>
  </div>
  <FooterOthers />
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import FooterOthers from "../components/FooterOthers.vue";
const userName = () => {
  const result = localStorage.getItem("username");
  return result;
};
console.log(userName());

const isName = () => {
  return localStorage.getItem("username") !== null;
};
console.log(isName());
</script>
<style scoped>
.supportPage {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.gradientbar {
  background-image: linear-gradient(175deg, #1a9646, #121212 25%);
}
.supportNavbar {
  background: transparent;
}
.support {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 830px;
}
.customerSupport {
  width: 30%;
  text-align: center;
}
.SPOTIFY {
  color: #a7a7a7;
}
.logined {
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
}
.supportTitle {
  margin-top: 0;
  font-size: 68px;
  text-align: left;
  font-weight: bold;
}
.helpFaster {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: #a7a7a7;
  margin-bottom: 50px;
}
.helpFaster a {
  color: white;
}
.supportSearchInput {
  position: relative;
}
.supportSearchInput input {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  text-indent: 40px;
}
.supportSearchInput i {
  position: absolute;
  font-size: 30px;
  top: 5px;
  left: 10px;
  color: #5e5e5e;
}
.illustrate {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 15px;
  margin-top: 30px;
}
.illustrate a {
  position: relative;
  height: 92px;
  width: 173px;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  color: white;
}
.illustrate img {
  width: 64px;
  height: 64px;
  position: absolute;
  transform: rotate(25deg);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
  left: 130px;
  top: 25px;
}
.illustrate p {
  font-size: 17px;
  display: block;
  font-weight: bold;
  margin-left: 10px;
  padding-inline-end: 56px;
}
.pay {
  background-color: rgb(175, 40, 150);
}
.plan {
  background-color: rgb(140, 25, 50);
}
.App {
  background-color: rgb(176, 98, 57);
}
.device {
  background-color: rgb(0, 100, 80);
}
.safety {
  background-color: rgb(117, 117, 117);
}
.account {
  background-color: rgb(83, 122, 161);
}
.tips {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  background-color: #2a2a2a;
}
.tipTitle {
  font-size: 23px;
  font-weight: bold;
}
.tipBtn {
  display: flex;
  flex-direction: column;
}
.tipBtn button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  color: white;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  text-align: left;
  font-size: 18px;
  padding: 10px 0;
}
.tipBtn button:hover {
  cursor: pointer;
  text-decoration: underline;
}
.tipBtn i {
  font-size: 40px;
}
.browseCommunities {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 340px;
  width: 100%;
  background-color: #121212;
}
.browseTitle {
  font-size: 45px;
  font-weight: bold;
  margin: 80px 0 0 0;
}
.browseBtn {
  width: 130px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: #1ed760;
  font-size: 16px;
  font-weight: bold;
}
.browseBtn:hover {
  transform: scale(1.05);
}
@media (max-width: 1360px) {
  .customerSupport {
    width: 45%;
  }
}
</style>

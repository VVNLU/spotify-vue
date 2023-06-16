<template>
  <Navbar />
  <div class="premiun">
    <div class="freeOneMonth">
      <p class="freeOneMonthTitle">入手Premium，免費試用1個月</p>
      <p class="freeOneMonthContent">之後每月只需 NT$149.00。可隨時取消。</p>
      <button class="star">開始使用</button>
      <button class="plan" @click="toggleClick">查看方案</button>
      <p class="unsuitable">
        <router-link to="" class="terms">適用相關條款及細則</router-link
        >。已試用Premium的使用者不是用1個月的免費優惠。
      </p>
    </div>
    <div class="benefit">
      <p class="benefitTitle">升級Premium有什麼好處？</p>
      <div class="benefitContent">
        <div class="download">
          <img src="../assets/premium/download.png" alt="" />
          <p class="title">下載音樂。</p>
          <p class="content">隨時隨地聆聽。</p>
        </div>
        <div class="noAD">
          <img src="../assets/premium/noAD.png" alt="" />
          <p class="title">暢聽音樂無廣告。</p>
          <p class="content">享受不間段的音樂。</p>
        </div>
        <div class="playMusic">
          <img src="../assets/premium/play.png" alt="" />
          <p class="title">愛聽什麼、就播什麼。</p>
          <p class="content">行動裝置照樣聽。</p>
        </div>
        <div class="unlimitedSkip">
          <img src="../assets/premium/next.png" alt="" />
          <p class="title">無限次跳過歌曲。</p>
          <p class="content">只管按「下一首」就對了。</p>
        </div>
      </div>
    </div>
    <div class="premiumTerms" id="premiumTerms">
      <p class="premiumTitle">選擇適合自己的Premium方案</p>
      <p class="premiumContent">
        在你的手機、揚聲器和其他裝置上盡情收聽，完全不受限。
      </p>
      <div class="premiumBox">
        <div class="premiumList" v-for="(tab, index) in tabs" :key="index">
          <div class="forFree">1個月內完全免費</div>
          <p class="listTitle">{{ tab.title }}</p>
          <p class="listContent">
            優惠期過後，每個月費用為<span>NT${{ tab.price }}.00起</span><br />
            {{ tab.account }}個帳戶
          </p>
          <hr />
          <ul class="listUl">
            <li v-for="(item, index) in tab.list" :key="index">
              <a class="action-label icon"
                ><i class="mdi mdi-check"></i>{{ item }}</a
              >
            </li>
          </ul>
          <button class="listBtn">開始使用</button>
          <p class="listUnsuitable">
            <router-link to="" class="listTerms">適用相關條款及細則</router-link
            >。{{ tab.remark }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterOthers />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FooterOthers from "../components/FooterOthers.vue";
import { ref } from "vue";

const toggleClick = () => {
  window.location.hash = "premiumTerms";
};

const tabs = ref([
  {
    title: "Individual",
    price: "149",
    account: "1",
    list: ["無廣告暢聽音樂", "隨時隨地聽音樂，離線也可收聽", "隨選即播"],
    remark: "已試用 Premium 的使用者不適用 1 個月的免費優惠。",
  },
  {
    title: "Duo",
    price: "198",
    account: "2",
    list: [
      "2 個 Premium 帳戶，可供同住在一個屋簷下的伴侶使用",
      "盡情聆聽音樂，不受廣告干擾，支援離線收聽，隨選即播",
    ],
    remark: "已試用 Premium 的使用者不適用 1 個月的免費優惠。",
  },
  {
    title: "Family",
    price: "268",
    account: "高達6",
    list: [
      "6 個 Premium 帳戶供同住在一個屋簷下的家人使用",
      "封鎖兒童不宜的音樂",
      "盡情聆聽音樂，不受廣告干擾，支援離線收聽，隨選即播",
    ],
    remark: "已試用 Premium 的使用者不適用 1 個月的免費優惠。",
  },
  {
    title: "Student",
    price: "75",
    account: "1",
    list: [
      "符合資格的大學生專享的特殊折扣",
      "無廣告暢聽音樂",
      "隨時隨地聽音樂，離線也可收聽",
      "隨選即播",
    ],
    remark:
      "適用於在高教機構就讀、從未試用過 Premium 的學生。試用期過後，將收取每月 NT$75.00 的月費。",
  },
]);
</script>
<style scoped>
.premiun {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.freeOneMonth {
  position: relative;
  width: 100vw;
  height: 500px;
  color: white;
  background-color: #1d75de;
}
.freeOneMonthTitle {
  position: absolute;
  top: 70px;
  left: 90px;
  font-size: 40px;
  font-weight: bold;
}
.freeOneMonthContent {
  position: absolute;
  font-size: 24px;
  top: 170px;
  left: 90px;
}
.freeOneMonth > button {
  width: 120px;
  height: 50px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.freeOneMonth > button:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.star {
  position: absolute;
  top: 270px;
  left: 90px;
  border: none;
  background-color: #000;
}
.plan {
  position: absolute;
  top: 270px;
  left: 220px;
  border: #fff 2px solid;
  background-color: #1d75de;
}
.plan:hover {
  background-color: #1a69c7;
}

.unsuitable {
  position: absolute;
  top: 350px;
  left: 90px;
  font-size: 12px;
}
.terms {
  color: white;
}
.benefit {
  width: 100vw;
  height: 450px;
}
.benefitTitle {
  margin: 70px 0 50px 0;
  text-align: center;
  font-size: 38px;
  font-weight: bold;
}
.benefitContent {
  margin: 0 100px;
  display: flex;
  justify-content: space-around;
}
.title {
  text-align: center;
  font-size: 20px;
}
.content {
  text-align: center;
}
.premiumTerms {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 850px;
  background-color: #efefef;
}
.premiumTitle {
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  margin: 70px 0 0 0;
}
.premiumContent {
  text-align: center;
  margin-top: 10px;
}
.premiumBox {
  display: inline-flex;
  justify-content: space-evenly;
  margin-top: 50px;
}
.premiumList {
  width: 240px;
  height: 470px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 grey;
}
.forFree {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  background-color: #0d72ea;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
}
.listTitle {
  font-size: 22px;
  font-weight: bold;
  margin: 5px 0;
}
.listContent {
  margin: 5px 0;
}
hr {
  margin: 20px 0 5px 0;
}
.listUl {
  height: 160px;
  text-indent: -12px;
}
ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;
}
i {
  font-size: 25px;
  color: #000;
}
.listBtn {
  margin-top: 35px;
  width: 240px;
  height: 50px;
  background-color: #000;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
}
.listBtn:hover {
  transform: scale(1.05);
}
.listUnsuitable {
  margin-top: 15px;
  color: #000;
  font-size: 12px;
}
.listUnsuitable,
.listTerms {
  color: #535353;
}
</style>

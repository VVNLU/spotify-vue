<template>
  <Navbar />
  <div class="profileEdit">
    <div class="editContent">
      <div class="profileTitle">編輯個人檔案</div>
      <label for="renewemail" class="renewemail">電子郵件</label>
      <input type="email" name="" id="renewemail" />
      <label for="renewgender" class="renewgender">性別</label>
      <select name="" id="renewgender">
        <option value="male">男</option>
        <option value="female">女</option>
        <option value="nobinary">非二元性別</option>
        <option value="other">其他</option>
        <option value="unwillingToExplain">不願說明</option>
      </select>
      <label for="renewBirthday" class="renewBirthday">出生日期</label>
      <input type="date" id="renewBirthday" />
      <label for="currentPassword" class="currentPassword">現時密碼</label>
      <input type="password" name="" id="currentPassword" />
      <label for="renewPassword" class="renewPassword">新密碼</label>
      <input type="password" name="" id="renewPassword" />
      <label for="shareRenewData" class="shareRenewData">
        <input type="checkbox" id="shareRenewData" />
        請把我的註冊資料分享給&ensp;Spotify&ensp;的內容提供者以利市場推廣。</label
      >
      <hr />
      <div class="buttons">
        <button class="cancelBtn">取消</button>
        <button class="renewBtn">儲存個人檔案</button>
      </div>
    </div>
  </div>
  <FooterOthers />
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import FooterOthers from "../components/FooterOthers.vue";
</script>
<style scoped>
.profileEdit {
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #1f2a3a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.editContent {
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  width: 750px;
}
.profileTitle {
  font-size: 40px;
  font-weight: bold;
}
.renewemail,
.renewgender,
.renewBirthday,
.currentPassword,
.renewPassword {
  font-size: 14px;
  font-weight: bold;
  margin: 25px 0 5px 0;
}
.editContent > input,
select {
  height: 35px;
}
.shareRenewData {
  margin: 20px 0;
}
.editContent hr {
  width: 100%;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
.cancelBtn {
  font-size: 16px;
  font-weight: bold;
  color: #6a6a6a;
  background-color: #fff;
  border: none;
  margin-right: 20px;
}
.cancelBtn:hover {
  color: #000;
  transform: scale(1.05);
}
.renewBtn {
  font-size: 16px;
  font-weight: bold;
  background-color: #1ed760;
  border: none;
  border-radius: 50px;
  width: 150px;
  height: 45px;
}
.renewBtn:hover {
  background-color: #1fdf64;
  transform: scale(1.05);
}
</style>

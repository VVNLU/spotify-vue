<template>
  <div class="footer">
    <div class="logo">
      <img src="../assets/logo/logo.png" alt="" />
    </div>
    <div class="container">
      <span class="intro">公司簡介</span>
      <ul>
        <li>關於我們</li>
        <li>職位空缺</li>
        <li>For the Record</li>
      </ul>

      <span class="social">社群 </span>
      <ul>
        <li>藝人專屬</li>
        <li>開發商</li>
        <li>廣告宣傳</li>
        <li>投資者</li>
        <li>供應商</li>
        <li>Spotify for Work</li>
      </ul>

      <span class="link">常用連結</span>
      <ul>
        <li>支援</li>
        <li>網路播放器</li>
        <li>免費行動版App</li>
      </ul>
    </div>
    <div class="socialMedia">
      <a class="action-label icon"><i class="mdi mdi-instagram"></i></a>
      <a class="action-label icon"><i class="mdi mdi-twitter"></i></a>
      <a class="action-label icon"><i class="mdi mdi-facebook"></i></a>
    </div>
    <div class="footerConnect">
      <ul>
        <li>法律條款</li>
        <li>隱私權中心</li>
        <li>隱私政策</li>
        <li>Cookie</li>
        <li>關於廣告</li>
        <li>無障礙</li>
      </ul>
    </div>
    <div class="copyright">&copy;2023 Spotify AB</div>
  </div>
</template>

<style scoped>
.footer {
  height: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background: #000;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.logo {
  grid-row: 2/3;
  grid-column: 1/2;
  padding-left: 50px;
}
.logo img {
  width: 150px;
}
.container {
  display: flex;
  flex-direction: row;
  grid-row: 2/4;
  grid-column: 2/5;
}
span {
  display: flex;
  font-size: 12px;
  color: gray;
  font-weight: bold;
}
.social {
  padding-left: 6em;
  padding-right: 2em;
}
.link {
  padding-left: 6em;
}
.container ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
}
.container li {
  margin-top: 20px;
  text-indent: -3em;
}
.socialMedia {
  grid-row: 2/3;
  grid-column: 5/6;
}
.socialMedia i {
  background-color: #222326;
  border-radius: 50px;
  color: white;
  margin: 10px;
  padding: 10px 15px 10px 15px;
}
.container li:hover,
.socialMedia i:hover,
.footerConnect li:hover {
  color: #1ed760;
  cursor: pointer;
}
.footerConnect {
  font-size: 14px;
  color: grey;
  grid-row: 6/6;
  grid-column: 1/6;
}
.footerConnect ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}
.copyright {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: grey;
  grid-row: 6/6;
  grid-column: 5/6;
  margin-right: 40px;
}
</style>

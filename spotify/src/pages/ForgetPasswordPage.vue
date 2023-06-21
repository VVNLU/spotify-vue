<template>
  <div>
    <nav class="navbar">
      <img
        src="../assets/logo/logo_black.png"
        alt="spotify"
        class="resetLogo"
      />
    </nav>
    <hr />
    <div class="content">
      <div class="resetTitle">Password Reset</div>
      <div class="restContent">
        Enter your <span class="boldFont"> Spotify username</span>, or the
        <span class="boldFont"> email address</span> that you used to register.
        We'll send you an email with your username and a link to reset your
        password.
      </div>
      <form class="resetForm" @submit.prevent>
        <div class="btnTitle">Email address or username</div>
        <input
          class="emailInput"
          type="email"
          placeholder="Email address or username"
        />
        <label class="snedBtn"><button>Send</button></label>
      </form>
      <div>
        If you still need help, contact
        <router-link to="" class="contact"> Spotify Support</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: center;
}
.resetLogo {
  width: 15%;
  margin: 20px;
}
.navbar hr {
  background-color: #d9dadc;
  border: none;
  height: 1px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  row-gap: 30px;
}
.resetTitle {
  font-size: 45px;
  font-weight: bold;
  margin-top: 20px;
}
.restContent {
  text-align: center;
  width: 430px;
  word-wrap: break-word;
}
.boldFont {
  font-weight: bold;
}
.resetForm {
  display: flex;
  flex-direction: column;
  place-items: center;
}
.btnTitle {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.emailInput {
  width: 80%;
  height: 45px;
  border: #c3c3c3 1.5px solid;
  border-radius: 5px;
  text-indent: 10px;
  font-size: 16px;
  background-color: #fff;
}
.emailInput:hover {
  border: #000 1.5px solid;
}
.submitBtn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.snedBtn button {
  width: 95px;
  height: 50px;
  margin-top: 20px;
  background-color: #1ed760;
  font-weight: bold;
  border-radius: 50px;
  border: none;
}
.snedBtn:hover {
  transform: scale(1.05);
}
.contact {
  color: #000;
}
.contact:hover {
  color: #117a37;
}
</style>

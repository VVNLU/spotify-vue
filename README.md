# Spotify-vue

[Spotify-vue](https://github.com/VVNLU/spotify-vue) 是使用 [Vite](https://vitejs.dev/) 建立專案，以模仿 [Spotify web player](https://open.spotify.com/)。

## 專案說明

使用 [Firebase](https://firebase.google.com/docs/web/setup?hl=zh&authuser=1&_gl=1*ux3033*_ga*MTU4MDQ3MDQ3My4xNjg0NTUwNjYz*_ga_CW55HF8NVT*MTY4OTA0NzYzOS4yNi4xLjE2ODkwNDc3ODIuMC4wLjA.) 來實現登入、註冊、使用者資料管理，音樂來源使用 [Axios](https://www.npmjs.com/package/axios) 串接 [Spotify web API](https://developer.spotify.com/documentation/web-api)；末使用 CSS-frameworks，頁面皆為手刻。

## 如何啟動

### 版本要求

- node >= 16.13.0
- npm >= 8.1.0

### 設定環境變數

需要設定 Spotify 與 Firebase 的環境變數

- Spotify
  使用 `VITE_CLIENT_ID` 和 `VITE_CLIENT_SECRET` 設定 Spotify 的 Client ID 和 Client secret。如果你沒有 Client ID 和 Client secret 可以請參考 [Spotify Developer](https://developer.spotify.com/documentation/web-api)。

  注意： Spotify 的 access token 有效訪問時間只有 `1 小時`。

- Firebase
  需設定 Firebase SDK 的配置，如果沒有 Firebase SDK 的配置，請參考[Firebase doc](https://firebase.google.com/docs/web/setup?hl=zh&authuser=1&_gl=1*ux3033*_ga*MTU4MDQ3MDQ3My4xNjg0NTUwNjYz*_ga_CW55HF8NVT*MTY4OTA0NzYzOS4yNi4xLjE2ODkwNDc3ODIuMC4wLjA.)。

參考 .env.example 設定 Spotify 與 Firebase 的環境變數

```
# Spotify env
VITE_CLIENT_SECRET=''
VITE_CLIENT_ID=''

# Firebase SDK env
VITE_API_KEY= ''
VITE_AUTH_DOMAIN= ''
VITE_PROJECT_ID= ''
VITE_STORAGE_BUCKET= ''
VITE_MESSAGING_SENDER_ID= ''
VITE_APP_ID= ''
VITE_MEASUREMENT_ID= ''
```

### 安裝與啟動

```
$ cd spotify-vue/
$ yarn
$ yarn  dev
```

執行成功的話會看到:

```
  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

接著可以透過 [http://127.0.0.1:5173/](http://127.0.0.1:5173/) 進入網頁。

## 使用技術

- Vue.js / Vite
- Vue-Router
- Axios
- Firebase / Vuefire
- Mdi (Material Design Icons)
- Eslint / Prettier

## 功能

以下是規劃的功能，未打勾的還正在進行中；若有更好的功能建議可以開 [issues](https://github.com/VVNLU/spotify-vue/issues)！

- 功能
  - [x] 註冊、登入及登出帳號
  - [x] 查看類型、撥放清單
  - [x] 聆聽 30 秒的預覽音樂
  - [x] 上、下頁
  - [x] 查看 Premium、支援頁面
  - [x] 60 分鐘後自動登出功能 ( Spotify 的 Token 有效訪問時間為 `60分鐘`)
  - [ ] 搜尋功能
  - [ ] 歌手、專輯頁面
- UX / UI
  - [ ] sidebar 可調整
  - [ ] RWD 響應式設計
  - [ ] 忘記密碼提示
- 使用者資料 (預計使用 Firestore)
  - [ ] 建立使用者播放清單
  - [ ] 修改個人資料

### 其他

- 對專案有任何問題或提議可以開 [issues](https://github.com/VVNLU/spotify-vue/issues) 或與我聯繫 e-mail：vivianlu512@mail.com
- 可能會在 package.json 中看到沒在用到，但卻安裝的 lib。例如： `faker-js/faker`，這是在還未串接 Spotify API 前練習時做假資料用的。
